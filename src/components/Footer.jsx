import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import logoKomdigi from '../assets/logo-komdigi.png';
import logoBalmon from '../assets/logo.png';
import WebVisitorStats from './WebVisitorStats';

const footerContainerStyle = {
  backgroundColor: '#003366',
  color: '#fff',
  padding: '2rem 0',
  fontSize: '0.95rem',
};

const headingFooterStyle = {
  color: '#ffffff',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const footerLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.5rem',
};

const footerHrStyle = {
  borderTop: '1px solid #bbb',
  marginTop: '2rem',
};

const footerBottomTextStyle = {
  textAlign: 'center',
  marginTop: '1rem',
  marginBottom: 0,
};

const Footer = () => {
  return (
    <footer style={footerContainerStyle}>
      <div className="container">
        <div className="row g-4">
          {/* 🔹 Grid Kiri */}
          <div className="col-md-4">
            <div className="mb-3 d-flex align-items-center gap-3">
              <img src={logoKomdigi} alt="Logo Komdigi" style={{ height: 80 }} />
              <img src={logoBalmon} alt="Logo Balmon" style={{ height: 80 }} />
            </div>
            <h5 style={headingFooterStyle}>Kontak Kami</h5>
            <p className="mb-1 d-flex align-items-center gap-2">
              <FaMapMarkerAlt /> Jl. Kramat Jaya KM. 14 No.9 RT 004/002, Desa Hajimena,<br /> Kec. Natar, Kab. Lampung Selatan, Lampung 35362
            </p>
            <p className="d-flex align-items-center gap-2 mb-1">
              <FaEnvelope /> balmonlampung@kominfo.go.id
            </p>
            <a href="https://wa.me/6285266666910" target="_blank" rel="noreferrer" style={footerLinkStyle}>
              <FaWhatsapp /> WhatsApp Kami
            </a>
          </div>

          {/* 🔹 Grid Tengah */}
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
            <h5 style={headingFooterStyle}>Waktu Layanan</h5>
            <p className="mb-1">Senin - Kamis: 08.00 - 16.00</p>
            <p className="mb-3">Jumat: 08.00 - 16.30</p>

            <h5 style={headingFooterStyle}>Ikuti Kami</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://instagram.com/balmonsfr_lampung" target="_blank" rel="noreferrer" style={footerLinkStyle}>
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:balmonsaranadanpelayanan@gmail.com" target="_blank" rel="noreferrer" style={footerLinkStyle}>
                  <FaEnvelope /> Email
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCr1uz5gL0fLLv_sysPknxa" target="_blank" rel="noreferrer" style={footerLinkStyle}>
                  <FaYoutube /> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* 🔹 Grid Kanan */}
          <div className="col-md-4 text-start">
            <h5 style={headingFooterStyle}>FAQ</h5>
            <p>Temukan jawaban atas pertanyaan umum dan panduan layanan kami.</p>
            <ul className="list-unstyled">
              <li>
                <a href="https://postel.go.id/?mod=faq&lang=en" target="_blank" rel="noreferrer" style={footerLinkStyle}>
                  Pertanyaan Umum (postel.go.id)
                </a>
              </li>
            </ul>
            
            {/* Tambahan Statistik Pengunjung */}
            <WebVisitorStats />
          </div>
        </div>

        <hr style={footerHrStyle} />
        <p style={footerBottomTextStyle}>© 2025 Balmon Lampung. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;