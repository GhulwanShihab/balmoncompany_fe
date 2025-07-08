import React from 'react';
import kabalmon from '../assets/kabalmon.png';
import bgImage from '../assets/sambutan-bg.jpg'; // Ganti sesuai background kamu

// Style khusus untuk section sambutan
const sambutanSectionStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  paddingTop: '3rem',
  paddingBottom: '3rem',
};

// Overlay putih semi-transparan
const sambutanOverlayStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '2rem',
  borderRadius: '0.5rem',
};

// Warna biru tua
const sambutanBlueText = {
  color: '#003366',
};

const Sambutan = () => {
  return (
    <div style={sambutanSectionStyle}>
      <div className="container px-5 px-md-6" style={sambutanOverlayStyle}>
        <div className="row align-items-center">
          {/* Kolom Foto */}
          <div className="col-md-4 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={kabalmon}
              alt="Kepala Balmon"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Kolom Teks */}
          <div className="col-md-8" data-aos="fade-left">
            <h3 className="mb-2" style={sambutanBlueText}>
              Sambutan Kepala 
            </h3>
            <h2 className="fw-bold mb-5" style={sambutanBlueText}>
              Balai Monitor Spektrum <br/>Frekuensi Radio Kelas II Lampung
            </h2>
            <p style={{ textAlign: 'justify' }}>
              Selamat datang di website resmi Balai Monitor Spektrum Frekuensi Radio.
              Website ini kami hadirkan sebagai bentuk komitmen kami dalam memberikan
              pelayanan informasi yang transparan, akuntabel, dan mudah diakses oleh masyarakat.
              Harapan kami, melalui media ini komunikasi dan informasi terkait spektrum frekuensi
              dapat tersampaikan secara luas dan efisien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sambutan;
