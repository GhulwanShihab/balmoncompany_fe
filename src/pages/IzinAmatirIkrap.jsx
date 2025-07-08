import React from 'react';
import bgHeadingGif from '../assets/bg-gif1.gif';
import radioImage from '../assets/iar.png';
import ikrapImage from '../assets/ikrap.png';
import perpanjanganImage from '../assets/perpanjangan.png';

const IzinAmatirIkrap = () => {
  return (
    <>
      {/* 🔷 Header */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">Izin Amatir Radio & IKRAP</h1>
      </div>

      {/* 🔷 Konten */}
      <div className="container py-5" style={styles.izinamatirradioWrapper}>
        {/* Bagian IAR */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h3 className="izinamatirradio-subtitle">Izin Amatir Radio (IAR)</h3>
            <p className="izinamatirradio-description">
              Izin Amatir Radio diberikan kepada individu yang ingin menggunakan frekuensi amatir
              untuk keperluan non-komersial seperti eksperimen teknis dan komunikasi pribadi.
            </p>
            <a href="https://iar-ikrap.postel.go.id/" className="btn btn-primary">Lihat Selengkapnya</a>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img src={radioImage} alt="Izin Amatir Radio" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Bagian IKRAP */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6" data-aos="fade-left">
            <h3 className="izinamatirradio-subtitle">Izin Komunikasi Radio Antar Penduduk</h3>
            <p className="izinamatirradio-description">
              Izin Komunikasi Radio Antar Penduduk (IKRAP) merupakan izin untuk komunikasi radio 
              antar warga negara yang diberikan untuk kegiatan non-komersial.
            </p>
            <a href="https://iar-ikrap.postel.go.id/" className="btn btn-primary">Lihat Selengkapnya</a>
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <img src={ikrapImage} alt="IKRAP" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Bagian Perpanjangan */}
        <div className="row">
          <div className="col-md-12" data-aos="fade-up">
            <h3 className="izinamatirradio-subtitle text-center">Perpanjangan IAR dan IKRAP</h3>
            <div className="text-center mt-4">
              <img src={perpanjanganImage} alt="Perpanjangan" className="img-fluid rounded shadow" style={{ maxWidth: '1000px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  izinamatirradioWrapper: {
    backgroundColor: '#fff',
    color: '#003366',
  },
  izinamatirradioSubtitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  izinamatirradioDescription: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    textAlign: 'justify',
  },
};

export default IzinAmatirIkrap;
