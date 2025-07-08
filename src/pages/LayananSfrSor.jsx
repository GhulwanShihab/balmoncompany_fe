import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import layananData from '../components/SfrSorData';

const LayananSfrSor = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderRequirement = (req, i) => {
    if (typeof req === 'string') {
      return <li key={i}>{req}</li>;
    } else if (typeof req === 'object' && req.title && Array.isArray(req.items)) {
      return (
        <li key={i}>
          <strong>{req.title}</strong>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {req.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </li>
      );
    }
    return null;
  };

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
        <img
          src={bgHeadingGif}
          alt="Header Background"
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
        <h1 style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          color: '#fff',
          lineHeight: '200px',
          margin: 0,
        }}>Layanan SFR & SOR</h1>
      </div>

      <div style={{ backgroundColor: '#fff', padding: '2rem 1rem 4rem', color: '#003366', minHeight: '100vh' }}>
        <div className="container">
          {Object.values(layananData).map((layanan, layananIndex) => (
            <div key={layananIndex} style={{ marginBottom: '3rem' }} data-aos="fade-up">
              <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>{layanan.title}</h2>

              {layanan.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="100">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{category.title}</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {category.items.map((item, itemIndex) => {
                      const currentIndex = `${layananIndex}-${categoryIndex}-${itemIndex}`;
                      const isOpen = openIndex === currentIndex;

                      return (
                        <div
                          key={itemIndex}
                          style={{
                            backgroundColor: '#f4f8fc',
                            padding: '1rem',
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                          }}
                          onClick={() => toggleIndex(currentIndex)}
                          data-aos="fade-up"
                          data-aos-delay={`${(itemIndex + 1) * 100}`}
                        >
                          <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                            {item.name}
                            <span style={{ float: 'right' }}>{isOpen ? '▲' : '▼'}</span>
                          </div>

                          {isOpen && (
                            <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
                              {item.subsections.map((sub, subIndex) => (
                                <div key={subIndex} style={{ marginBottom: '1rem' }}>
                                  <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#005088', marginBottom: '0.3rem' }}>{sub.subtitle}</h4>
                                  <strong>Syarat:</strong>
                                  <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', marginBottom: 0 }}>
                                    {sub.requirements.map(renderRequirement)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LayananSfrSor;
