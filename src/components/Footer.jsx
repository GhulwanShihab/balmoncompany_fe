import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import logoKomdigi from '../assets/logo-komdigi.png';
import logoBalmon from '../assets/logo.png';
import WebVisitorStats from './WebVisitorStats';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <img src={logoKomdigi} alt="Logo Komdigi" className="h-20" />
              <img src={logoBalmon} alt="Logo Balmon" className="h-20" />
            </div>
            <h5 className="text-white font-bold mb-4">Kontak Kami</h5>
            <p className="mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Jl. Kramat Jaya KM. 14 No.9 RT 004/002, Desa Hajimena,<br /> Kec. Natar, Kab. Lampung Selatan, Lampung 35362
            </p>
            <p className="flex items-center gap-2 mb-1">
              <FaEnvelope /> balmonlampung@kominfo.go.id
            </p>
            <a href="https://wa.me/6285266666910" target="_blank" rel="noreferrer" className="text-white no-underline flex items-center gap-2 mb-2">
              <FaWhatsapp /> WhatsApp Kami
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <h5 className="text-white font-bold mb-4">Waktu Layanan</h5>
            <p className="mb-1">Senin - Kamis: 08.00 - 16.00</p>
            <p className="mb-3">Jumat: 08.00 - 16.30</p>

            <h5 className="text-white font-bold mb-4">Ikuti Kami</h5>
            <ul className="list-none">
              <li>
                <a href="https://instagram.com/balmonsfr_lampung" target="_blank" rel="noreferrer" className="text-white no-underline flex items-center gap-2 mb-2">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:balmonsaranadanpelayanan@gmail.com" target="_blank" rel="noreferrer" className="text-white no-underline flex items-center gap-2 mb-2">
                  <FaEnvelope /> Email
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCr1uz5gL0fLLv_sysPknxa" target="_blank" rel="noreferrer" className="text-white no-underline flex items-center gap-2 mb-2">
                  <FaYoutube /> YouTube
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h5 className="text-white font-bold mb-4">FAQ</h5>
            <p>Temukan jawaban atas pertanyaan umum dan panduan layanan kami.</p>
            <ul className="list-none">
              <li>
                <a href="https://postel.go.id/?mod=faq&lang=en" target="_blank" rel="noreferrer" className="text-white no-underline flex items-center gap-2 mb-2">
                  Pertanyaan Umum (postel.go.id)
                </a>
              </li>
            </ul>
            
            <WebVisitorStats />
          </div>
        </div>

        <hr className="border-t border-gray-300 mt-8" />
        <p className="text-center mt-4 mb-0">© 2025 Balmon Lampung. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;