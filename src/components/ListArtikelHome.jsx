import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ListArtikelHome = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchDataNews();
  }, []);

  const fetchDataNews = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/balmonlampung/beritas");
      if (!response.ok) throw new Error("Gagal mengambil data berita");
      const result = await response.json();

      const newsData = result.data || [];
      const sortedNews = newsData.sort(
        (a, b) => new Date(b.tanggal_berita) - new Date(a.tanggal_berita)
      );
      const lastFive = sortedNews.slice(0, 5);
      setDatas(lastFive);
    } catch (error) {
      console.error("Error fetching news:", error);
      setDatas([]);
    }
  };

  // Fungsi bantu untuk menghapus tag HTML dari teks
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const getPreviewText = (item) => {
    if (item.deskripsi_berita && item.deskripsi_berita.trim() !== "") {
      return item.deskripsi_berita.slice(0, 140);
    } else if (item.teks) {
      return stripHtmlTags(item.teks).slice(0, 140);
    }
    return "";
  };

  const latest = datas[0];
  const others = datas.slice(1, 5);

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "3rem 1rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem", color: "#003366" }}>
            Berita Terkini
          </h2>
        </div>

        <div className="row g-4">
          {/* 🔹 Artikel Terbaru */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            {latest && (
              <div style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}>
                <div style={{ height: "280px", overflow: "hidden" }}>
                  <img
                    src={latest.foto_berita}
                    alt={latest.judul_berita}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.5rem", flex: 1 }}>
                  <h4 style={{ fontWeight: "bold", color: "#002244" }}>
                    {latest.judul_berita}
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "#666" }}>
                    {getPreviewText(latest)}...
                  </p>
                  <Link to={`/daftar-artikel/${latest.id}`}>
                    <button style={{
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "6px",
                      marginTop: "1rem",
                      cursor: "pointer",
                      fontWeight: "500"
                    }}>
                      Baca Selengkapnya
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 🔹 4 Artikel Lainnya */}
          <div className="col-12 col-md-6">
            <div className="row g-3">
              {others.map((item, index) => (
                <div key={index} className="col-6" data-aos="fade-left" data-aos-delay={index * 100}>
                  <div style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                  }}>
                    <div style={{ height: "120px", overflow: "hidden" }}>
                      <img
                        src={item.foto_berita}
                        alt={item.judul_berita}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "0.8rem" }}>
                      <h6 style={{
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        color: "#003366",
                        marginBottom: "0.5rem"
                      }}>
                        {item.judul_berita}
                      </h6>
                      <Link to={`/daftar-artikel/${item.id}`}>
                        <button style={{
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          padding: "0.4rem 0.8rem",
                          borderRadius: "4px",
                          fontSize: "0.8rem",
                          cursor: "pointer"
                        }}>
                          Baca Selengkapnya
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListArtikelHome;
