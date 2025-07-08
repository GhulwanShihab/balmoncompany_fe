import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeaderGif from '../assets/bg-gif1.gif';

const DaftarFoto = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/balmonlampung/galeri-fotos');
      if (!response.ok) throw new Error('Gagal mengambil data galeri foto');
      const result = await response.json();
      if (result.data && Array.isArray(result.data)) {
        const fotoData = result.data.map(item => ({
          id: item.id,
          judulFoto: item.judul_foto,
          foto: `http://localhost:8000/storage/${item.foto}`,
        }));
        setDatas(fotoData);
      } else {
        throw new Error('Data tidak valid');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setDatas([]);
    } finally {
      setLoading(false);
    }
  };

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
          src={bgHeaderGif}
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
          Galeri Foto
        </h1>
      </div>

      {/* 🔷 Konten */}
      <div style={{
        backgroundColor: '#fff',
        padding: '3rem 1rem',
        color: '#003366',
        minHeight: '100vh',
      }}>
        <div className="container">
          {loading ? (
            <p className="text-center">Memuat galeri foto...</p>
          ) : error ? (
            <p className="text-center text-danger">{error}</p>
          ) : datas.length === 0 ? (
            <p className="text-center">Belum ada galeri tersedia.</p>
          ) : (
            <div className="row g-4">
              {datas.map((item, index) => (
                <div className="col-md-4" key={item.id} data-aos="zoom-in" data-aos-delay={index * 100}>
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
                    <div style={{
                      width: '100%',
                      height: '240px',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={item.foto}
                        alt={item.judulFoto}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <h5 style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: '0',
                      }}>{item.judulFoto}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DaftarFoto;
