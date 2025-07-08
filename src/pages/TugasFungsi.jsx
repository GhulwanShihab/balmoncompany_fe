import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import tugasFungsiImage from '../assets/visimisi.png'; // Ganti jika perlu

// 🔷 Style Inline
const pageWrapperStyle = {
  backgroundColor: '#fff',
  padding: '2rem 1rem 4rem',
  color: '#003366',
  minHeight: '100vh',
};

const textSectionStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
};

const imageStyle = {
  width: '100%',
  borderRadius: '12px',
  objectFit: 'cover',
};

const TugasDanFungsi = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* 🔷 Background GIF Header */}
      <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
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
          Tugas & Fungsi
        </h1>
      </div>

      {/* 🔷 Konten */}
      <div style={pageWrapperStyle}>
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Kolom Teks */}
            <div className="col-md-6" data-aos="fade-right">
              <div style={textSectionStyle}>
                <h2>Tugas</h2>
                <p>
                  Melaksanakan tugas pokok dan fungsi sebagai lembaga yang menyediakan layanan untuk mendukung 
                  perkembangan sektor komunikasi dan informatika di wilayah Lampung.
                </p>

                <h2>Fungsi</h2>
                <ul>
                  <li>Pengawasan dan evaluasi perkembangan sektor komunikasi dan informatika.</li>
                  <li>Penyiapan dan pemberian layanan komunikasi di wilayah Lampung.</li>
                  <li>Fasilitasi pengembangan infrastruktur telekomunikasi dan informasi.</li>
                  <li>Penyuluhan dan pendidikan di bidang komunikasi dan informatika.</li>
                </ul>
              </div>
            </div>

            {/* Kolom Gambar */}
            <div className="col-md-6" data-aos="fade-left">
              <img src={tugasFungsiImage} alt="Tugas dan Fungsi" style={imageStyle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TugasDanFungsi;
