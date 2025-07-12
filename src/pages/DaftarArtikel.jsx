import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgHeadingGif from '../assets/bg-gif1.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ITEMS_PER_PAGE = 6;

const DaftarArtikel = () => {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/balmonlampung/beritas');
      if (!response.ok) throw new Error('Gagal mengambil data berita');
      const json = await response.json();

      const sortedData = (json?.data || []).sort(
        (a, b) => new Date(b.tanggal_berita) - new Date(a.tanggal_berita)
      );
      setDatas(sortedData);

    } catch (error) {
      console.error('Error fetching:', error);
      setDatas([]);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = datas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* 🔷 Header */}
      <div className="relative w-full h-52 overflow-hidden">
        <img
          src={bgHeadingGif}
          alt="Header Background"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-10"
        />
        <h1 className="relative z-20 text-center font-bold text-4xl text-white flex items-center justify-center h-full m-0">
          Daftar Artikel
        </h1>
      </div>

      {/* 🔷 Konten */}
      <div className="bg-gray-50 py-12 px-4 text-blue-900 min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {loading ? (
            <p className="text-center">Memuat artikel...</p>
          ) : datas.length === 0 ? (
            <p className="text-center">Belum ada artikel tersedia.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentItems.map((data, idx) => (
                  <div key={data.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-200">
                      {data.foto_berita && (
                        <img
                          src={data.foto_berita}
                          alt={data.judul_berita}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-5 flex-1 flex flex-col">
                        <h5 className="text-lg font-semibold mb-3 text-gray-800 line-clamp-2">{data.judul_berita}</h5>
                        <div className="text-sm text-gray-500 mb-4 space-y-1">
                          <p><span className="font-medium">Author:</span> {data.author_berita}</p>
                          <p><span className="font-medium">Tanggal:</span> {data.tanggal_berita}</p>
                        </div>
                        <Link to={`/daftar-artikel/${data.id}`} className="mt-auto bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 inline-block text-sm font-medium">
                          Baca Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 🔷 Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12" data-aos="fade-up">
                  <button
                    className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 mx-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Sebelumnya
                  </button>
                  <button
                    className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 mx-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Selanjutnya
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DaftarArtikel;
