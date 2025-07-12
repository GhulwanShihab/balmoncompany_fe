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
    <div className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#003366]">
            Video Terkini
          </h2>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Memuat video...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : videos.length === 0 ? (
          <p className="text-center text-gray-600">Belum ada video tersedia.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className=""
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
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
                  <div className="p-4 flex-1">
                    <h3 className="text-lg font-bold text-[#002244] mb-2" title={video.title}>
                      {video.title}
                    </h3>
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
