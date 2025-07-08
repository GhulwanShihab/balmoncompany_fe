import React from 'react';
import { Link } from 'react-router-dom';

// Icon layanan
import icon1 from '../assets/sfrlogo.png';
import icon2 from '../assets/iarlogo.png';
import icon3 from '../assets/ISR Maritim.png';
import icon4 from '../assets/perpanjanganlogo.png';
import icon5 from '../assets/sertifikasilogo.png';
import icon6 from '../assets/perpanjanganlogo.png';

// 🔷 Background asset
import bgLayanan from '../assets/layanan-bg.jpg';

// 🔷 Style spesifik untuk komponen layanan
const sectionLayananStyle = {
  backgroundImage: `url(${bgLayanan})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  padding: '4rem 0',
};

const cardLayananStyle = {
  border: '1px solid #ddd',
  borderRadius: '12px',
  padding: '1.5rem',
  backgroundColor: '#fff',
  textAlign: 'center',
  height: '100%',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const iconLayananStyle = {
  height: '60px',
  marginBottom: '1rem',
};

const linkLayananStyle = {
  color: '#003366',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const judulLayananStyle = {
  color: 'lightblue',
  marginBottom: '3rem',
};

// 🔷 Data layanan
const layananList = [
  { icon: icon1, title: 'Izin SFR & SOR', link: '/layanan-sfr-sor' },
  { icon: icon2, title: 'Izin Amatir & IKRAP', link: '/izin-amatir-ikrap' },
  { icon: icon3, title: 'Izin Stasiun Radio', link: '/izin-stasiun-radio' },
  { icon: icon4, title: 'Perpanjangan REOR', link: '/perpanjangan-reor' },
  { icon: icon5, title: 'Sertifikasi Alat', link: 'https://sertifikasi.postel.go.id/', external: true },
  { icon: icon6, title: 'Simulasi BPH', link: 'https://www.postel.go.id/sdppi_maps/10-20200601-sdppi-maps-simulasi-bhp.php', external: true },
];

const LayananSection = () => {
  return (
    <div style={sectionLayananStyle}>
      <div className="container text-center">
        <h2 style={judulLayananStyle}>Layanan Frekuensi Radio <br /> Balai Monitor Spektrum Frekuensi Radio Kelas II Lampung</h2>
        <div className="row g-4">
          {layananList.map((layanan, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div style={cardLayananStyle}>
                <img src={layanan.icon} alt={layanan.title} style={iconLayananStyle} />
                <h5 className="mb-3">{layanan.title}</h5>
                <Link to={layanan.link} style={linkLayananStyle}>
                  Klik di sini →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayananSection;
