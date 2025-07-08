import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bgHeadingGif from '../assets/bg-gif1.gif';

// 🟦 Style Inline
const strukturPageWrapperStyle = {
  backgroundColor: '#fff',
  padding: '2rem 1rem 2rem',
  color: '#003366',
  minHeight: '100vh',
};

const strukturPegawaiCardStyle = {
  backgroundColor: '#ffffffdd',
  borderRadius: '12px',
  padding: '0.5rem',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  height: '100%',
};

const strukturImgPegawaiStyle = {
  width: '100%',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  borderRadius: '0px',
  marginBottom: '1rem',
};

// Style khusus untuk kepala balmon
const kepalaBalmonCardStyle = {
  ...strukturPegawaiCardStyle,
  backgroundColor: '#f8f9ff',
  boxShadow: '0 6px 16px rgba(0,51,102,0.15)',
  border: '1px solid #e6eeff',
};

const kepalaBalmonImgStyle = {
  ...strukturImgPegawaiStyle,
  marginBottom: '1rem',
};

const kepalaBalmonNamaStyle = {
  color: '#003366',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
};

const kepalaBalmonJabatanStyle = {
  color: '#0055aa',
  fontStyle: 'italic',
  fontSize: '1.1rem',
  marginBottom: '0.75rem',
};

const strukturNamaPegawaiStyle = {
  color: '#003366',
  fontWeight: 'bold',
  fontSize: '1.1rem',
};

const strukturBidangPegawaiStyle = {
  color: '#555',
  fontStyle: 'italic',
};

const StrukturOrganisasi = () => {
  const [pegawai, setPegawai] = useState([]);
  const [kepalaBalmon, setKepalaBalmon] = useState(null);
  const [staffPegawai, setStaffPegawai] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    async function fetchPegawai() {
      try {
        const response = await fetch('http://localhost:8000/api/balmonlampung/struktur-organisasi'); // ⬅️ Ganti sesuai endpoint kamu
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.urutan - b.urutan); // Sort berdasarkan urutan kecil ke besar
        
        // Pisahkan kepala balmon (item pertama) dari staff lainnya
        if (sortedData.length > 0) {
          setKepalaBalmon(sortedData[0]);
          setStaffPegawai(sortedData.slice(1));
        } else {
          setKepalaBalmon(null);
          setStaffPegawai([]);
        }
        
        setPegawai(sortedData);
      } catch (error) {
        console.error('Gagal mengambil data struktur organisasi:', error);
      }
    }

    fetchPegawai();
  }, []);

  return (
    <>
      {/* 🔷 Heading GIF Full Width & No Overflow */}
      <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
        <img
          src={bgHeadingGif}
          alt="Heading Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
            zIndex: 1,
          }}
        />
        <h1
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '2.5rem',
            color: '#fff',
            lineHeight: '200px',
            margin: 0,
          }}
        >
          Struktur Organisasi
        </h1>
      </div>

      {/* 🔷 Konten Pegawai */}
      <div style={strukturPageWrapperStyle}>
        <div className="container">
          {/* Kepala Balmon Section */}
          {kepalaBalmon && (
            <div className="row mb-4" data-aos="fade-up">
              <div className="col-12 col-sm-6 col-md-4 mx-auto">
                <div style={kepalaBalmonCardStyle}>
                  <img
                    src={`http://localhost:8000/storage/${kepalaBalmon.foto}`}
                    alt={kepalaBalmon.nama}
                    style={kepalaBalmonImgStyle}
                  />
                  <div style={kepalaBalmonNamaStyle}>
                    {kepalaBalmon.nama}
                  </div>
                  <div style={kepalaBalmonJabatanStyle}>
                    {kepalaBalmon.jabatan}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Divider */}
          {kepalaBalmon && (
            <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="col-12 text-center">
                <hr style={{ width: '50%', margin: '0 auto', borderTop: '2px solid #003366' }} />
              </div>
            </div>
          )}

          {/* Staff Section */}
          <div className="row g-4 justify-content-center">
            {staffPegawai.map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-4"
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div style={strukturPegawaiCardStyle}>
                  <img
                    src={`http://localhost:8000/storage/${item.foto}`}
                    alt={item.nama}
                    style={strukturImgPegawaiStyle}
                  />
                  <div style={strukturNamaPegawaiStyle}>
                    {item.nama}
                  </div>
                  <div style={strukturBidangPegawaiStyle}>
                    {item.jabatan}
                  </div>
                </div>
              </div>
            ))}

            {pegawai.length === 0 && (
              <div className="col-12 text-center mt-4">
                <p>Belum ada data struktur organisasi.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StrukturOrganisasi;