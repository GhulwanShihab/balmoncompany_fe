import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ListVideoHome = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/balmonlampung/galeri-videos");
      if (!response.ok) throw new Error("Gagal mengambil data video");
      const result = await response.json();

      if (result.data && Array.isArray(result.data)) {
        const getYouTubeVideoId = (url) => {
          try {
            const urlObj = new URL(url);
            return urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
          } catch {
            return null;
          }
        };

        const mappedVideos = result.data
          .map(item => {
            const videoId = getYouTubeVideoId(item.linkvideo);
            if (!videoId) return null;
            return {
              id: item.id,
              title: item.title,
              embedUrl: `https://www.youtube.com/embed/${videoId}`,
            };
          })
          .filter(item => item !== null);

        const lastThree = mappedVideos.slice(-3); // ambil 3 terakhir
        setVideos(lastThree);
      } else {
        throw new Error("Struktur data video tidak valid.");
      }
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "3rem 1rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem", color: "#003366" }}>
            Video Terkini
          </h2>
        </div>

        {loading ? (
          <p className="text-center">Memuat video...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : videos.length === 0 ? (
          <p className="text-center">Belum ada video tersedia.</p>
        ) : (
          <div className="row g-4">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ padding: "1rem", flex: 1 }}>
                    <h5 style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#002244",
                      marginBottom: "0.5rem"
                    }} title={video.title}>
                      {video.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListVideoHome;
