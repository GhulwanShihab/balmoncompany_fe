import React, { useState } from 'react';
import bgHeadingGif from '../assets/bg-gif1.gif';
import radioImage from '../assets/alur-isr.png';
import syaratImage from '../assets/sanksi-isr.png';

const syaratKetentuanList = [
  {
    title: '1. Legalitas Perusahaan',
    description: 'Pemohon wajib memiliki dokumen berikut:',
    list: ['Akta pendirian', 'NPWP', 'SIUP yang sah']
  },
  {
    title: '2. Surat Permohonan',
    description: 'Permohonan harus ditandatangani pimpinan dan dibubuhi cap resmi.',
    list: []
  },
  {
    title: '3. Spesifikasi Teknis',
    description: 'Lampirkan detail teknis perangkat yang digunakan:',
    list: ['Frekuensi kerja', 'Daya pancar', 'Tipe antena']
  },
  {
    title: '4. Lokasi Stasiun',
    description: 'Lokasi harus jelas dan sesuai peruntukan tata ruang daerah.',
    list: []
  },
  {
    title: '5. Koordinasi Frekuensi',
    description: 'Harus melalui proses analisa interferensi oleh petugas.',
    list: ['Analisa spektrum', 'Koordinasi dengan stasiun sekitar']
  },
  {
    title: '6. Sertifikasi Alat',
    description: 'Perangkat yang digunakan harus tersertifikasi oleh Kominfo.',
    list: []
  },
  {
    title: '7. Operator Bersertifikat',
    description: 'Stasiun harus dioperasikan oleh tenaga bersertifikat resmi.',
    list: ['Sertifikat Operator Radio', 'Izin Amatir Profesional (jika diperlukan)']
  },
  {
    title: '8. Biaya dan Retribusi',
    description: 'Pembayaran biaya sesuai ketentuan berlaku.',
    list: ['Biaya registrasi', 'Retribusi tahunan']
  },
  {
    title: '9. Masa Berlaku',
    description: 'Izin berlaku selama 5 tahun dan dapat diperpanjang.',
    list: []
  },
];

const IzinStasiunRadio = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* 🔷 Header */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">Izin Stasiun Radio</h1>
      </div>

      <div className="container py-5" style={styles.isrWrapper}>
        {/* 📡 Info Izin */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h3 style={styles.isrSubtitle}>Izin Stasiun Radio</h3>
            <p style={styles.isrDescription}>
              Izin ini diberikan kepada badan usaha/lembaga untuk menyelenggarakan siaran radio sesuai dengan ketentuan perundang-undangan yang berlaku.
              Proses permohonan harus melalui tahapan teknis dan administratif yang ketat untuk menjaga keteraturan spektrum frekuensi.
            </p>
            <a href="https://spectraweb.ditfrek.postel.go.id/session/landingpage" className="btn btn-primary">Lihat Selengkapnya</a>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={radioImage} alt="Izin Stasiun Radio" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* 📞 Call Center */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <h3 style={styles.isrSubtitle}>Call Center Balmon Lampung</h3>
            <p style={styles.isrDescription}>
              Silakan hubungi call center Balmon untuk mendapatkan informasi teknis, bantuan, atau konsultasi terkait perizinan stasiun radio.
            </p>
            <a href="https://wa.me/6285266666910" className="btn btn-primary">Hubungi Kami</a>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/aY60woPbVho?si=xWCweffeBfIKk_TV"
                title="Call Center Video"
                allowFullScreen
                style={styles.isrVideo}
              ></iframe>
            </div>
          </div>
        </div>

        {/* 📋 Syarat & Ketentuan */}
        <div className="row mb-4" data-aos="fade-up">
          <div className="col-md-12 text-center">
            <h3 style={styles.isrSubtitle}>Syarat dan Ketentuan</h3>
          </div>

          <div className="row mt-4">
            {syaratKetentuanList.map((item, index) => (
              <div key={index} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="border p-3 rounded shadow-sm" onClick={() => toggleDropdown(index)} style={{ cursor: 'pointer' }}>
                  <h5 style={styles.isrSubItemTitle}>{item.title}</h5>
                  {openIndex === index && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <p style={styles.isrDescription}>{item.description}</p>
                      {item.list.length > 0 && (
                        <ul>
                          {item.list.map((listItem, i) => (
                            <li key={i} style={{ textAlign: 'left' }}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-12 text-center" data-aos="fade-up" >
                <h3 style={styles.isrSubtitle}>Tata Cara Pembayaran & Sanksi</h3>
            </div>
            <div className="text-center mt-4" data-aos="fade-up">
                <img src={syaratImage} alt="Tata Cara Pembayaran & Sanksi" className="img-fluid rounded shadow" style={styles.isrImage} />
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

// 🔧 Styling
const styles = {
  isrWrapper: {
    backgroundColor: '#fff',
    color: '#003366',
  },
  isrSubtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  isrDescription: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    textAlign: 'justify',
  },
  isrSubItemTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#003366',
  },
  isrImage: {
    maxWidth: '1000px'
  },
  isrVideo: {
    borderRadius: '12px'
  }
};

export default IzinStasiunRadio;
