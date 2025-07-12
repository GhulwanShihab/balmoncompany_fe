import React, { useState } from 'react';
import bgHeadingGif from '../assets/bg-gif1.gif';
import nelayanImage from '../assets/img-nelayan.png'; // ganti sesuai path gambar nelayan

const MOTS = () => {
  const [selectedList, setSelectedList] = useState('list1');

  const listContent = {
    list1: (
      <div>
        <p>
          Maritime on The Spot (MoTS) merupakan program afirmatif pemberian sertifikasi kompetensi komunikasi laut ke nelayan,
          serta perizinan radio komunikasi kapal nelayan secara jemput bola langsung di pelabuhan perikanan dan gratis. 
          Sejak 2019, program ini berfokus pada uji coba penggunaan frekuensi radio untuk komunikasi nelayan dan sertifikasi kecakapan operator radio (SRC/LRC).
        </p>
        <h3>ISR Maritim untuk Perorangan</h3>
        <ol>
          <li>Pengajuan Akun E-Licensing
            <p>Syarat:</p>
            <ul>
              <li>Formulir Permohonan</li>
              <li>KTP/SIM</li>
              <li>NPWP</li>
              <li>SIUP Perikanan</li>
              <li>SIPI</li>
              <li>NIB</li>
            </ul>
          </li>
          <li>Pengajuan Izin Stasiun Radio
            <p>Syarat:</p>
            <ul>
              <li>Surat Permohonan</li>
              <li>Groose Akta</li>
              <li>Surat Penetapan Callsign</li>
              <li>Surat Laut atau Pas Tahunan</li>
              <li>Surat Ukur</li>
              <li>Surat Penetapan MMSI</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
    list2: (
      <div>
        <p>
          Izin penggunaan Spektrum Frekuensi Radio untuk Komunikasi Radio Umum dalam mendukung kegiatan sektor perikanan 
          yang merupakan inovasi solusi lanjutan dari program MoTS.
        </p>
        <h3>Persyaratan</h3>
        <ul>
          <li>Sertifikat SRC/LRC</li>
          <li>KTP</li>
          <li>Pas foto 4x6 latar putih, kemeja putih & dasi hitam</li>
          <li>Kartu Pelaku Usaha Kelautan & Perikanan (KUSUKA)</li>
          <li>Atau Surat Keterangan dari Dinas/Kabupaten/Pelabuhan</li>
          <li>Atau Surat Keterangan Sebagai Operator Radio</li>
        </ul>
      </div>
    ),
    list3: (
      <div>
        <p>
          Upaya edukasi dan peningkatan kompetensi kepada masyarakat maritim melalui bimbingan teknis,
          berupa materi dan praktik penggunaan perangkat radio sesuai kecakapan kapal.
        </p>
        <ul>
          <li>KTP</li>
          <li>Pas foto 4x6 latar putih, kemeja putih & dasi hitam</li>
        </ul>
      </div>
    ),
  };

  return (
    <>
      {/* 🟦 Header */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">Maritime on The Spot (MoTS)</h1>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-5" style={styles.motsWrapper}>
        {/* 🟨 Main Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-5">
          <div className="" data-aos="fade-right">
            <h3 style={styles.motsSubtitle}>Program MoTS</h3>
            <p style={styles.motsDescription}>
              MoTS adalah program afirmatif jemput bola oleh Balmon Lampung untuk membantu nelayan mendapatkan sertifikasi operator dan izin radio secara mudah, cepat, dan gratis di lokasi pelabuhan.
            </p>
          </div>
          <div className="text-center" data-aos="fade-left">
            <img src={nelayanImage} alt="Nelayan" className="max-w-full h-auto rounded shadow-lg" style={{ maxWidth: '50%', height: 'auto' }} />
          </div>
        </div>

        {/* 🟧 List Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4" data-aos="fade-up">
            <div
              onClick={() => setSelectedList('list1')}
              className={`p-3 border rounded shadow-sm ${selectedList === 'list1' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              style={{ cursor: 'pointer' }}
            >
              Izin Stasiun Radio (ISR) Maritim
            </div>
          </div>
          <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <div
              onClick={() => setSelectedList('list2')}
              className={`p-3 border rounded shadow-sm ${selectedList === 'list2' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              style={{ cursor: 'pointer' }}
            >
              Izin Komunikasi Radio Nelayan (IKRAN)
            </div>
          </div>
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <div
              onClick={() => setSelectedList('list3')}
              className={`p-3 border rounded shadow-sm ${selectedList === 'list3' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              style={{ cursor: 'pointer' }}
            >
              Bimbingan Teknis Sertifikat Operator Radio (SRC/LRC)
            </div>
          </div>
        </div>

        {/* 🟩 Content */}
        <div className="grid grid-cols-1 mt-4">
          <div className="" data-aos="fade-up">
            <div className="p-4 border rounded shadow-sm bg-white" style={styles.motsDescription}>
              {listContent[selectedList]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 🧾 Inline Styles
const styles = {
  motsWrapper: {
    backgroundColor: '#fff',
    color: '#003366',
  },
  motsSubtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  motsDescription: {
    fontSize: '1rem',
    textAlign: 'justify',
  },
};

export default MOTS;
