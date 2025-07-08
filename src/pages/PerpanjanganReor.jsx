import React, { useState } from "react";
import bgHeadingGif from "../assets/bg-gif1.gif";
import reorimg1 from "../assets/alur-reor.png";
import reorimg2 from "../assets/serti-reor.png";

const reorStyles = {
  wrapper: {
    backgroundColor: "#fff",
    color: "#003366",
    padding: "3rem 1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    textAlign: "justify",
  },
  card: {
    backgroundColor: "#f8f9fa",
    padding: "1rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  cardText: {
    marginTop: "0.75rem",
    fontSize: "1rem",
  },
};

const cardData = [
  {
    title: "Persyaratan",
    description: (
      <ol>
        <li>
          Permohonan perpanjangan Sertifikat REOR dapat diajukan paling cepat 12 bulan dan paling lambat 7 hari kerja sebelum akhir masa berlaku Sertifikat.
        </li>
        <li>
          Melampirkan dokumen:
          <ul>
            <li>KTP</li>
            <li>Pas foto 4x6 cm latar putih, kemeja putih berdasi hitam</li>
            <li>Sertifikat Kompetensi Operator Radio Lama</li>
            <li>Waktu penyelesaian maksimal 14 hari kerja*</li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    title: "Biaya",
    description: (
      <p>
        Mulai 18 November 2023, layanan Sertifikasi SOR (REOR & IAR-IKRAP), baik baru maupun perpanjangan tidak dikenakan biaya (Gratis).
      </p>
    ),
  },
];

const PerpanjanganREOR = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const toggleCard = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <>
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">Perpanjangan Sertifikat REOR</h1>
      </div>

      <div className="container" style={reorStyles.wrapper}>
        {/* Deskripsi Umum */}
        <div className="mb-5" data-aos="fade-up">
          <p style={reorStyles.text}>
            Sertifikasi Radio Elektronika dan Operator Radio (REOR) adalah bukti kompetensi seseorang untuk mengoperasikan perangkat komunikasi radio, termasuk GMDSS. Sertifikat berlaku 5 tahun dan dapat diperpanjang. Berikut adalah prosedur permohonannya.
          </p>
        </div>

        {/* Langkah Permohonan */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h3 style={reorStyles.subtitle}>Langkah Permohonan Sertifikasi REOR</h3>
            <ol style={reorStyles.text}>
              <li>Ikuti pelatihan di Lembaga Diklat REOR.</li>
              <li>Daftar Ujian Negara REOR secara online.</li>
              <li>Dokumen:
                <ul>
                  <li>Scan STTPP dari Lemdik</li>
                  <li>KTP</li>
                  <li>Foto 4x6 latar putih, kemeja putih, dasi hitam</li>
                </ul>
              </li>
              <li>Sertifikat dikirim ke Lembaga tempat pelantikan.</li>
              <li>Biaya: Rp 0</li>
            </ol>
            <a className="btn btn-primary" href="https://reor.postel.go.id/">Lihat Selengkapnya</a>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={reorimg1} alt="Langkah REOR" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Booking Online */}
        <div className="mb-5" data-aos="fade-up">
          <p style={reorStyles.text}>
            Ditjen SDPPI meluncurkan sistem layanan daring untuk memudahkan perpanjangan sertifikat REOR. Pemohon dapat melakukan pemesanan antrian di <a href="https://antrian.postel.go.id">https://antrian.postel.go.id</a> dan memilih lokasi pengambilan, termasuk di Balmon Lampung.
          </p>
        </div>

        {/* Langkah Booking */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2" data-aos="fade-left">
            <h3 style={reorStyles.subtitle}>Langkah Booking Online Pengambilan Sertifikat</h3>
            <ol style={reorStyles.text}>
              <li>Kunjungi <a href="https://antrian.postel.go.id">https://antrian.postel.go.id</a></li>
              <li>Masukkan Nomor Invoice dan Client ID</li>
              <li>Pilih metode pengambilan (langsung/diwakilkan)</li>
              <li>Jika diwakilkan, isi data wakil & unggah dokumen</li>
              <li>Pilih tanggal dan jam pengambilan</li>
              <li>Dapatkan QR Code antrian</li>
              <li>Tunjukkan QR Code saat pengambilan</li>
              <li>Biaya: Rp 0</li>
            </ol>
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade-right">
            <img src={reorimg2} alt="Sertifikat REOR" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Accordion Cards */}
        <div className="mb-5">
          <h3 className="text-center mb-4" style={reorStyles.subtitle}>Pengambilan Sertifikat Perpanjangan REOR</h3>
          <div className="row">
            {cardData.map((item, index) => (
              <div className="col-md-6 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div
                  style={reorStyles.card}
                  onClick={() => toggleCard(index)}
                >
                  <h5 style={reorStyles.cardTitle}>{item.title}</h5>
                  {selectedIndex === index && (
                    <div style={reorStyles.cardText}>{item.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Penutup */}
        <div className="mb-4" data-aos="fade-up">
          <p style={reorStyles.text}>
            Selain itu, tersedia sistem layanan online Sertifikasi Operator Radio yang mendukung program Maritime-On-The-Spot. Info lebih lanjut dapat diakses di <a href="http://serena.postel.go.id/">http://serena.postel.go.id</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default PerpanjanganREOR;
