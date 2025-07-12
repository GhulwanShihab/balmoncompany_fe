import React from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../assets/sfrlogo.png';
import icon2 from '../assets/iarlogo.png';
import icon3 from '../assets/ISR Maritim.png';
import icon4 from '../assets/perpanjanganlogo.png';
import icon5 from '../assets/sertifikasilogo.png';
import icon6 from '../assets/perpanjanganlogo.png';

import bgLayanan from '../assets/layanan-bg.jpg';

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
    <div 
      className="py-12 sm:py-16 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgLayanan})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-blue-200 mb-8 sm:mb-12 text-xl sm:text-2xl md:text-3xl font-bold">
          Layanan Frekuensi Radio <br /> 
          Balai Monitor Spektrum Frekuensi Radio Kelas II Lampung
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {layananList.map((layanan, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="border border-gray-300 rounded-xl p-4 sm:p-6 bg-white text-center h-full shadow-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full border-2 border-blue-200 flex items-center justify-center overflow-hidden">
                  <img src={layanan.icon} alt={layanan.title} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                </div>
                <h5 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold">{layanan.title}</h5>
                {layanan.external ? (
                  <a href={layanan.link} target="_blank" rel="noopener noreferrer" className="text-blue-900 font-bold no-underline">
                    Klik di sini →
                  </a>
                ) : (
                  <Link to={layanan.link} className="text-blue-900 font-bold no-underline">
                    Klik di sini →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayananSection;