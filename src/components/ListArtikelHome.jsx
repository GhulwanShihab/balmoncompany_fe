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
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-blue-900">
            Berita Terkini
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 🔹 Artikel Terbaru */}
          <div data-aos="fade-right">
            {latest && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={latest.foto_berita}
                    alt={latest.judul_berita}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-bold text-gray-800 text-xl mb-3 line-clamp-2">
                    {latest.judul_berita}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                    {getPreviewText(latest)}...
                  </p>
                  <Link to={`/daftar-artikel/${latest.id}`}>
                    <button className="bg-blue-600 text-white border-none py-2 px-4 rounded cursor-pointer font-medium hover:bg-blue-700 transition-colors duration-200 mt-auto self-start">
                      Baca Selengkapnya
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 🔹 4 Artikel Lainnya */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((item, index) => (
                <div key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={item.foto_berita}
                        alt={item.judul_berita}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h6 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2 flex-1">
                        {item.judul_berita}
                      </h6>
                      <Link to={`/daftar-artikel/${item.id}`}>
                        <button className="bg-blue-600 text-white border-none py-2 px-3 rounded text-xs cursor-pointer hover:bg-blue-700 transition-colors duration-200 mt-auto self-start">
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
