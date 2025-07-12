import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import laporLogo from '../assets/logo-lapor.png';

const LaporSp4n = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Header background GIF */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">SP4N LAPOR!</h1>
      </div>

      {/* Konten utama */}
      <div className="container mx-auto px-4 max-w-6xl py-5" style={styles.sp4nWrapper}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Kiri - Gambar dan tombol */}
          <div className="mb-4 md:mb-0 text-center md:text-left" data-aos="fade-right">
            <img
              src={laporLogo}
              alt="Lapor Logo"
              className="max-w-full h-auto mb-4"
              style={styles.sp4nImage}
            />
            <p>
              Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) – Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!)
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start mt-3">
              <a
                href="https://kominfo.lapor.go.id/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 text-lg"
              >
                Lapor Kominfo
              </a>
              <a
                href="https://www.lapor.go.id/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 text-lg"
              >
                Lapor!
              </a>
            </div>
          </div>

          {/* Kanan - Deskripsi */}
          <div className="" data-aos="fade-left">
            <h2 style={styles.sp4nSubtitle}>
              Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!)
            </h2>
            <p className="text-justify">
              Layanan penyampaian semua aspirasi dan pengaduan masyarakat yang terintegrasi secara Nasional dengan laman akses website <strong>www.lapor.go.id</strong>.
              <br /><br />
              LAPOR! telah ditetapkan sebagai Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N) berdasarkan <strong>Peraturan Presiden Nomor 76 Tahun 2013</strong> dan <strong>Peraturan Menteri PANRB Nomor 3 Tahun 2015</strong>.
              <br /><br />
              SP4N LAPOR! dibentuk untuk merealisasikan kebijakan <strong>“no wrong door policy”</strong> yang menjamin hak masyarakat agar pengaduan dari manapun dan jenis apapun akan disalurkan kepada penyelenggara pelayanan publik yang berwenang menanganinya.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  sp4nWrapper: {
    backgroundColor: '#fff',
    color: '#003366',
  },
  sp4nSubtitle: {
    fontWeight: '700',
    color: '#0d6efd',
    marginBottom: '20px',
  },
  sp4nImage: {
    maxWidth: '800px',
    height: 'auto',
  },
};

export default LaporSp4n;
