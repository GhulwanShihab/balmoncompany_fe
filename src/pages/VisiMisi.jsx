import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import visiImage from '../assets/visimisi.png';

const VisiMisi = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* 🔷 Background GIF Header */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '200px',
          overflow: 'hidden',
        }}
      >
        <img
          src={bgHeadingGif}
          alt="Heading Background"
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
        <h1
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            color: '#fff',
            lineHeight: '200px',
            margin: 0,
          }}
        >
          Visi & Misi
        </h1>
      </div>

      {/* 🔷 Konten */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem 1rem 4rem',
          color: '#003366',
          minHeight: '100vh',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Kolom Teks */}
            <div className="col-12 col-md-6" data-aos="fade-right">
              <div
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                }}
              >
                <h2 style={{ textAlign: 'left' }}>Visi</h2>
                <p style={{ textAlign: 'left' }}>
                  Terwujudnya Indonesia Maju yang Berdaulat, Mandiri, dan Berkepribadian Berlandaskan Gotong Royong
                </p>

                <h2 style={{ textAlign: 'left' }}>Misi</h2>
                <ul style={{ textAlign: 'left' }}>
                  <li>Peningkatan Kualitas Manusia Indonesia</li>
                  <li>Struktur Ekonomi yang Produktif, Mandiri, dan Berdaya Saing</li>
                  <li>Pembangunan yang Merata dan Berkeadilan</li>
                  <li>Mencapai Lingkungan Hidup yang Berkelanjutan</li>
                  <li>Kemajuan Budaya yang Mencerminkan Kepribadian Bangsa</li>
                  <li>Penegakan Sistem Hukum yang Bebas Korupsi, Bermartabat, dan Terpercaya</li>
                  <li>Perlindungan bagi Segenap Bangsa dan Memberikan Rasa Aman pada Seluruh Warga</li>
                  <li>Pengelolaan Pemerintahan yang Bersih, Efektif, dan Terpercaya</li>
                  <li>Sinergi Pemerintah Daerah dalam Kerangka Negara Kesatuan</li>
                </ul>
              </div>
            </div>

            {/* Kolom Gambar */}
            <div className="col-12 col-md-6" data-aos="fade-left">
              <img
                src={visiImage}
                alt="Visi dan Misi"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
