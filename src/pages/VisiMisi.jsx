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
      {/* Background GIF Header */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={bgHeadingGif}
          alt="Heading Background"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-10"
        />
        <h1 className="relative z-20 text-center font-bold text-4xl text-white flex items-center justify-center h-full m-0">
          Visi & Misi
        </h1>
      </div>

      {/* Konten */}
      <div className="bg-white py-8 px-4 pb-16 text-[#003366] min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Kolom Teks */}
            <div className="" data-aos="fade-right">
              <div className="text-lg leading-relaxed">
                <h2 className="text-2xl font-bold mb-4 text-left text-[#003366]">Visi</h2>
                <p className="text-left mb-6">
                  Terwujudnya Indonesia Maju yang Berdaulat, Mandiri, dan Berkepribadian Berlandaskan Gotong Royong
                </p>

                <h2 className="text-2xl font-bold mb-4 text-left text-[#003366]">Misi</h2>
                <ul className="text-left space-y-2">
                  <li className="pl-2">Peningkatan Kualitas Manusia Indonesia</li>
                  <li className="pl-2">Struktur Ekonomi yang Produktif, Mandiri, dan Berdaya Saing</li>
                  <li className="pl-2">Pembangunan yang Merata dan Berkeadilan</li>
                  <li className="pl-2">Mencapai Lingkungan Hidup yang Berkelanjutan</li>
                  <li className="pl-2">Kemajuan Budaya yang Mencerminkan Kepribadian Bangsa</li>
                  <li className="pl-2">Penegakan Sistem Hukum yang Bebas Korupsi, Bermartabat, dan Terpercaya</li>
                  <li className="pl-2">Perlindungan bagi Segenap Bangsa dan Memberikan Rasa Aman pada Seluruh Warga</li>
                  <li className="pl-2">Pengelolaan Pemerintahan yang Bersih, Efektif, dan Terpercaya</li>
                  <li className="pl-2">Sinergi Pemerintah Daerah dalam Kerangka Negara Kesatuan</li>
                </ul>
              </div>
            </div>

            {/* Kolom Gambar */}
            <div className="" data-aos="fade-left">
              <img
                src={visiImage}
                alt="Visi dan Misi"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
