import React from 'react';
import { Link } from 'react-router-dom';

import aduanImage from '../assets/aduan.png';
import iconWBS from '../assets/wbslogo.png';
import iconLapor from '../assets/iarlogo.png';
import iconSP4N from '../assets/laporlogo.png';

const AduanSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-8 md:mb-0" data-aos="fade-right">
            <h2 className="text-blue-900 font-bold text-3xl mb-4">Layanan Pengaduan Masyarakat</h2>
            <p className="mb-6 text-justify">
              Kami menyediakan beberapa saluran pengaduan agar masyarakat dapat menyampaikan
              keluhan atau masukan dengan mudah dan cepat. Semua laporan akan ditindaklanjuti
              secara profesional dan transparan.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 mb-4">
              <img src={iconWBS} alt="WBS" className="w-12 h-12" />
              <div>
                <h6 className="mb-1 font-semibold">Whistle Blowing System</h6>
                <Link to="/wbs" className="text-blue-900 font-bold no-underline">Klik di sini →</Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 mb-4">
              <img src={iconLapor} alt="Lapor Gangguan" className="w-12 h-12" />
              <div>
                <h6 className="mb-1 font-semibold">Lapor Gangguan Frekuensi</h6>
                <Link to="/lapor-gangguan-frekuensi" className="text-blue-900 font-bold no-underline">Klik di sini →</Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 mb-4">
              <img src={iconSP4N} alt="SP4N" className="w-12 h-12" />
              <div>
                <h6 className="mb-1 font-semibold">SP4N Lapor!</h6>
                <Link to="/lapor-sp4n" className="text-blue-900 font-bold no-underline">Klik di sini →</Link>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-left">
            <img
              src={aduanImage}
              alt="Ilustrasi Pengaduan"
              className="w-full max-w-md mx-auto rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AduanSection;