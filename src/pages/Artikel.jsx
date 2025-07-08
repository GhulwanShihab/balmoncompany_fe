import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import iconCal from '../assets/calendar.png'; // pastikan file ada
import iconAuth from '../assets/writer.png';   // pastikan file ada

const ArtikelDetail = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchArtikel = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/balmonlampung/beritas/${id}`);
      const json = await response.json();
      if (json.success) {
        setArtikel(json.data);
      } else {
        setArtikel(null);
      }
    } catch (error) {
      console.error('Gagal memuat detail artikel:', error);
      setArtikel(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchArtikel();
  }, [fetchArtikel]);

  if (loading) {
    return <p className="text-center mt-5">Memuat detail artikel...</p>;
  }

  if (!artikel) {
    return <p className="text-center mt-5">Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="bg-light pt-5 pb-5" style={{ minHeight: '100vh' }}>
      <div className="container" data-aos="fade-up">
        <Link to="/daftar-artikel" className="btn btn-outline-primary mb-4">← Kembali ke Daftar Artikel</Link>

        <div className="card shadow-sm p-4">
          <div className="card-body">
            <h1 className="mb-3">{artikel.judul_berita}</h1>

            <div className="row mb-4">
              <div className="col-md-6 d-flex align-items-center mb-2 mb-md-0">
                <img 
                  src={iconCal} 
                  alt="Tanggal" 
                  style={{ width: '24px', height: '24px' }} 
                  className="me-2" 
                />
                <h6 className="mb-0">{artikel.tanggal_berita}</h6>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <img 
                  src={iconAuth} 
                  alt="Penulis" 
                  style={{ width: '24px', height: '24px' }} 
                  className="me-2" 
                />
                <h6 className="mb-0">{artikel.author_berita}</h6>
              </div>
            </div>

            {artikel.foto_berita && (
              <div className="text-center my-4">
                <img 
                  src={artikel.foto_berita} 
                  alt={artikel.judul_berita} 
                  className="img-fluid rounded shadow-sm" 
                  style={{ maxWidth: '1000px', width: '100%', height: 'auto' }}
                />
              </div>
            )}

            <div 
              className="mt-4" 
              style={{ fontSize: '1.1em', lineHeight: '1.8' }}
              dangerouslySetInnerHTML={{ __html: artikel.teks }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelDetail;
