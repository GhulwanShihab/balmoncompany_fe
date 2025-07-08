import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import wbsImage from '../assets/wbslapor.jpg';

const WBS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Header dengan background gif */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">Whistleblowing System (WBS)</h1>
      </div>

      {/* Konten vertikal */}
      <div className="container py-5 text-center" style={styles.wbsWrapper}>
        <h2 className="mb-4" data-aos="fade-up" style={styles.wbsSubtitle}>
          Jangan takut melapor! Karena identitas pelapor <span style={{ color: '#007bff' }}>AMAN</span>.
        </h2>

        <a
          href="https://wbs.kominfo.go.id/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg mb-5"
          data-aos="zoom-in"
        >
          Lapor Pelanggaran &gt;
        </a>

        <div data-aos="fade-up">
          <img
            src={wbsImage}
            alt="Whistleblowing System"
            className="img-fluid rounded shadow"
            style={styles.wbsImage}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  wbsWrapper: {
    backgroundColor: '#ffffff',
    color: '#003366',
  },
  wbsSubtitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.6',
  },
  wbsImage: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default WBS;
