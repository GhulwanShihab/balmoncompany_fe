import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import alurPenanganan from '../assets/alur-penanganan-gangguan.png';

const GangguanFrekuensi = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardsData = [
    {
      title: "Tata Cara Registrasi Untuk Pemegang ISR",
      description: (
        <ul>
          <li>Pelapor membuka aplikasi Trouble Ticket: http://laporgangguansfr.postel.go.id</li>
          <li>Klik “User Registration” → Centang “Ya, Saya setuju” → Klik “Next”</li>
          <li>Pilih “Pemegang ISR” → Masukkan Nomor ISR valid</li>
          <li>Isi data pribadi → Klik “Save”</li>
          <li>Konfirmasi akun via email → Akun terbentuk</li>
        </ul>
      ),
    },
    {
      title: "Tata Cara Registrasi Untuk Non Pemegang ISR",
      description: (
        <ul>
          <li>Pelapor membuka aplikasi Trouble Ticket: http://laporgangguansfr.postel.go.id</li>
          <li>Klik “User Registration” → Centang “Ya, Saya setuju” → Klik “Next”</li>
          <li>Pilih “Non Pemegang ISR”</li>
          <li>Isi data pribadi → Klik “Save”</li>
          <li>Konfirmasi akun via email → Akun terbentuk</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">Lapor Gangguan Frekuensi</h1>
      </div>

      {/* Deskripsi + Gambar */}
      <div className="container py-5" style={styles.gangguanWrapper}>
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h3 style={styles.gangguanSubtitle}>Prosedur Pelaporan Gangguan</h3>
            <ul style={styles.gangguanDescription}>
              <li>Login menggunakan akun eksternal SDPPI</li>
              <li>Pilih menu → Aplikasi → Pusat Bantuan → Tambah Kasus Gangguan</li>
              <li>Isi form laporan → Klik “Kirim”</li>
              <li>Status awal aduan: Open</li>
              <li>Cek email notifikasi + lampiran bukti lapor</li>
            </ul>
            <a
              href="https://laporgangguansfr.postel.go.id/index.php?class=LoginForm"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-3"
              data-aos="zoom-in"
            >
              Lapor Gangguan &gt;
            </a>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src={alurPenanganan}
              alt="Alur Penanganan"
              className="img-fluid rounded shadow"
              style={styles.gangguanImage}
            />
          </div>
        </div>

        {/* Cards Interaktif */}
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div
                onClick={() =>
                  setSelectedCard(selectedCard === index ? null : index)
                }
                className="p-3 border rounded shadow-sm"
                style={{
                  ...styles.gangguanCard,
                  backgroundColor:
                    selectedCard === index ? '#003366' : '#f8f9fa',
                  color: selectedCard === index ? '#fff' : '#000',
                  cursor: 'pointer',
                }}
              >
                <h5>{card.title}</h5>
                {selectedCard === index && (
                  <div style={styles.gangguanDescription}>
                    {card.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  gangguanWrapper: {
    backgroundColor: '#fff',
    color: '#003366',
  },
  gangguanSubtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  gangguanDescription: {
    fontSize: '1rem',
    textAlign: 'justify',
  },
  gangguanCard: {
    transition: 'all 0.3s ease',
    borderRadius: '1rem',
  },
  gangguanImage: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default GangguanFrekuensi;
