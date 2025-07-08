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
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
      }}>
        <img
          src={bgHeadingGif}
          alt="Header Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 1,
          }}
        />
        <h1 style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          color: '#fff',
          lineHeight: '200px',
          margin: 0,
        }}>
          Daftar Artikel
        </h1>
      </div>

      {/* 🔷 Konten */}
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem 1rem 4rem',
        color: '#003366',
        minHeight: '100vh',
      }}>
        <div className="container">
          {loading ? (
            <p className="text-center">Memuat artikel...</p>
          ) : datas.length === 0 ? (
            <p className="text-center">Belum ada artikel tersedia.</p>
          ) : (
            <>
              <div className="row g-4">
                {currentItems.map((data, idx) => (
                  <div className="col-md-4" key={data.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div style={{
                      backgroundColor: '#f4f8fc',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      {data.foto_berita && (
                        <img
                          src={data.foto_berita}
                          alt={data.judul_berita}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      <div style={{
                        padding: '1rem',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <h5 style={{
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          marginBottom: '0.5rem',
                        }}>{data.judul_berita}</h5>
                        <p><strong>Author:</strong> {data.author_berita}</p>
                        <p><strong>Tanggal:</strong> {data.tanggal_berita}</p>
                        <Link to={`/daftar-artikel/${data.id}`} style={{
                          marginTop: 'auto',
                          backgroundColor: '#003366',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '0.5rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }}>
                          Baca Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 🔷 Pagination */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-5" data-aos="fade-up">
                  <button
                    className="btn btn-outline-primary mx-2"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Sebelumnya
                  </button>
                  <button
                    className="btn btn-outline-primary mx-2"
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
