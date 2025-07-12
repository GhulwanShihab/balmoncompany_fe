import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    return <p className="text-center mt-20">Memuat detail artikel...</p>;
  }

  if (!artikel) {
    return <p className="text-center mt-20">Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="bg-gray-50 py-8 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl" data-aos="fade-up">
        <Link to="/daftar-artikel" className="inline-block px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-colors duration-200 mb-6">← Kembali ke Daftar Artikel</Link>

        <article className="bg-white rounded-lg shadow-md p-8">
          <div>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">{artikel.judul_berita}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center mb-2 md:mb-0">
                <img 
                  src={iconCal} 
                  alt="Tanggal" 
                  style={{ width: '24px', height: '24px' }} 
                  className="mr-2" 
                />
                <h6 className="text-gray-600 font-medium">{artikel.tanggal_berita}</h6>
              </div>
              <div className="flex items-center">
                <img 
                  src={iconAuth} 
                  alt="Penulis" 
                  style={{ width: '24px', height: '24px' }} 
                  className="mr-2" 
                />
                <h6 className="text-gray-600 font-medium">{artikel.author_berita}</h6>
              </div>
            </div>

            {artikel.foto_berita && (
              <div className="text-center my-6">
                <img 
                  src={artikel.foto_berita} 
                  alt={artikel.judul_berita} 
                  className="max-w-full h-auto rounded shadow-sm" 
                  style={{ maxWidth: '1000px', width: '100%', height: 'auto' }}
                />
              </div>
            )}

            <div 
              className="mt-6 text-lg leading-relaxed prose prose-lg max-w-none" 
              dangerouslySetInnerHTML={{ __html: artikel.teks }}
            ></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArtikelDetail;
