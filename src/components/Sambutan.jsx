import React from 'react';
import kabalmon from '../assets/kabalmon.png';
import bgImage from '../assets/sambutan-bg.jpg'; // Ganti sesuai background kamu

const Sambutan = () => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Kolom Foto */}
            <div className="w-full md:w-1/3 flex-shrink-0" data-aos="fade-right">
              <img
                src={kabalmon}
                alt="Kepala Balmon"
                className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Kolom Teks */}
            <div className="flex-1" data-aos="fade-left">
              <h3 className="mb-3 text-blue-900 text-lg font-medium">
                Sambutan Kepala 
              </h3>
              <h2 className="font-bold mb-6 text-blue-900 text-2xl lg:text-3xl leading-tight">
                Balai Monitor Spektrum <br/>Frekuensi Radio Kelas II Lampung
              </h2>
              <p className="text-justify text-gray-700 leading-relaxed text-base">
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
    </div>
  );
};

export default Sambutan;
