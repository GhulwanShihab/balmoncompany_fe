import React from 'react';
import { Link } from 'react-router-dom';

// Gambar ilustrasi & ikon
import aduanImage from '../assets/aduan.png';
import iconWBS from '../assets/wbslogo.png';
import iconLapor from '../assets/iarlogo.png';
import iconSP4N from '../assets/laporlogo.png';

// 🔷 Style khusus untuk aduan section
const sectionAduanStyle = {
  backgroundColor: '#f0f4f8',
  padding: '4rem 0',
};

const cardAduanStyle = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
};

const iconAduanStyle = {
  width: '50px',
  height: '50px',
};

const titleAduanStyle = {
  color: '#003366',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const linkAduanStyle = {
  color: '#003366',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const AduanSection = () => {
  return (
    <div style={sectionAduanStyle}>
      <div className="container">
        <div className="row align-items-center">
          {/* KIRI: Judul + deskripsi + card */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <h2 style={titleAduanStyle}>Layanan Pengaduan Masyarakat</h2>
            <p className="mb-4 text-justify">
              Kami menyediakan beberapa saluran pengaduan agar masyarakat dapat menyampaikan
              keluhan atau masukan dengan mudah dan cepat. Semua laporan akan ditindaklanjuti
              secara profesional dan transparan.
            </p>

            {/* 3 Card aduan */}
            <div style={cardAduanStyle}>
              <img src={iconWBS} alt="WBS" style={iconAduanStyle} />
              <div>
                <h6 className="mb-1">Whistle Blowing System</h6>
                <Link to="/wbs" style={linkAduanStyle}>Klik di sini →</Link>
              </div>
            </div>

            <div style={cardAduanStyle}>
              <img src={iconLapor} alt="Lapor Gangguan" style={iconAduanStyle} />
              <div>
                <h6 className="mb-1">Lapor Gangguan Frekuensi</h6>
                <Link to="/lapor-gangguan-frekuensi" style={linkAduanStyle}>Klik di sini →</Link>
              </div>
            </div>

            <div style={cardAduanStyle}>
              <img src={iconSP4N} alt="SP4N" style={iconAduanStyle} />
              <div>
                <h6 className="mb-1">SP4N Lapor!</h6>
                <Link to="/lapor-sp4n" style={linkAduanStyle}>Klik di sini →</Link>
              </div>
            </div>
          </div>

          {/* KANAN: Gambar */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={aduanImage}
              alt="Ilustrasi Pengaduan"
              className="img-fluid"
              style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AduanSection;
