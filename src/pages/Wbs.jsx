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
      <div className="container mx-auto px-4 max-w-6xl py-5 text-center" style={styles.wbsWrapper}>
        <h2 className="mb-4" data-aos="fade-up" style={styles.wbsSubtitle}>
          Jangan takut melapor! Karena identitas pelapor <span style={{ color: '#007bff' }}>AMAN</span>.
        </h2>

        <a
          href="https://wbs.kominfo.go.id/"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 text-lg mb-5 inline-block"
          data-aos="zoom-in"
        >
          Lapor Pelanggaran &gt;
        </a>

        <div data-aos="fade-up">
          <img
            src={wbsImage}
            alt="Whistleblowing System"
            className="max-w-full h-auto rounded shadow-lg"
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
