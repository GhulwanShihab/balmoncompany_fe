import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeaderGif from '../assets/bg-gif1.gif';

const DaftarVideo = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/balmonlampung/galeri-videos');
      if (!response.ok) throw new Error('Gagal mengambil data galeri video');
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

        const videoData = result.data.map(item => {
          const videoId = getYouTubeVideoId(item.linkvideo);
          if (!videoId) return null;
          return {
            id: item.id,
            title: item.title,
            linkvideo: `https://www.youtube.com/embed/${videoId}`,
          };
        }).filter(item => item !== null);

        setDatas(videoData);
      } else {
        throw new Error('Format data dari server tidak sesuai');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
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
          Galeri Video
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
            <p className="text-center">Memuat galeri video...</p>
          ) : error ? (
            <p className="text-center text-danger">{error}</p>
          ) : datas.length === 0 ? (
            <p className="text-center">Belum ada video tersedia.</p>
          ) : (
            <div className="row g-4">
              {datas.map((item, index) => (
                <div className="col-md-4" key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div style={{
                    backgroundColor: '#f4f8fc',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                      <iframe
                        src={item.linkvideo}
                        title={item.title}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <h5 style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: 0,
                      }}>{item.title}</h5>
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

export default DaftarVideo;
