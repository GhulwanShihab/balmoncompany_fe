import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgHeadingGif from '../assets/bg-gif1.gif';
import layananData from '../components/SfrSorData';

const LayananSfrSor = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const cardRefs = useRef({});

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    
    // Scroll ke posisi card setelah toggle (baik saat buka maupun tutup)
    setTimeout(() => {
      if (cardRefs.current[index]) {
        cardRefs.current[index].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
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

      <div style={{ backgroundColor: '#f8f9fa', padding: '2rem 1rem 4rem', color: '#003366', minHeight: '100vh' }}>
        <div className="container">
          {Object.values(layananData).map((layanan, layananIndex) => (
            <div key={layananIndex} style={{ marginBottom: '4rem' }} data-aos="fade-up">
              <div style={{ 
                textAlign: 'center', 
                marginBottom: '3rem',
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  margin: 0,
                  color: '#2c3e50',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>{layanan.title}</h2>
              </div>

              {layanan.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} style={{ marginBottom: '3rem' }} data-aos="fade-up" data-aos-delay="100">
                  <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #e9ecef'
                  }}>
                    <div style={{
                      backgroundColor: '#007bff',
                      color: '#fff',
                      padding: '1.5rem',
                      borderBottom: '3px solid #0056b3'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: 'bold', 
                        margin: 0,
                        textAlign: 'center'
                      }}>{category.title}</h3>
                    </div>

                    <div style={{ 
                      padding: '2rem',
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                      gap: '2rem' 
                    }}>
                      {category.items.map((item, itemIndex) => {
                        const currentIndex = `${layananIndex}-${categoryIndex}-${itemIndex}`;
                        const isOpen = openIndex === currentIndex;

                        return (
                          <div
                            key={itemIndex}
                            ref={el => cardRefs.current[currentIndex] = el}
                            style={{
                              backgroundColor: '#fff',
                              border: '2px solid #e9ecef',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              ...(isOpen && {
                                borderColor: '#007bff',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 25px rgba(0,123,255,0.15)'
                              })
                            }}
                            onClick={() => toggleIndex(currentIndex)}
                            data-aos="fade-up"
                            data-aos-delay={`${(itemIndex + 1) * 100}`}
                          >
                            <div style={{ 
                              padding: '1.5rem',
                              backgroundColor: isOpen ? '#f8f9fa' : '#fff',
                              borderBottom: isOpen ? '1px solid #e9ecef' : 'none',
                              transition: 'background-color 0.3s ease'
                            }}>
                              <div style={{ 
                                fontSize: '1.1rem', 
                                fontWeight: 'bold', 
                                color: '#2c3e50',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                              }}>
                                <span style={{ flex: 1, marginRight: '1rem' }}>{item.name}</span>
                                <span style={{ 
                                  fontSize: '0.9rem',
                                  color: '#007bff',
                                  transition: 'transform 0.3s ease',
                                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                                }}>▼</span>
                              </div>
                            </div>

                            {isOpen && (
                              <div style={{ 
                                padding: '1.5rem',
                                backgroundColor: '#fafafa',
                                animation: 'fadeIn 0.3s ease-in-out'
                              }}>
                                {item.subsections.map((sub, subIndex) => (
                                  <div key={subIndex} style={{ 
                                    marginBottom: '1.5rem',
                                    padding: '1rem',
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    border: '1px solid #e9ecef'
                                  }}>
                                    {sub.subtitle && (
                                      <h4 style={{ 
                                        fontSize: '1rem', 
                                        fontWeight: 'bold', 
                                        color: '#007bff', 
                                        marginBottom: '0.8rem',
                                        padding: '0.5rem 0',
                                        borderBottom: '2px solid #e9ecef'
                                      }}>{sub.subtitle}</h4>
                                    )}
                                    <div style={{ 
                                      fontSize: '0.9rem',
                                      fontWeight: 'bold',
                                      color: '#495057',
                                      marginBottom: '0.5rem'
                                    }}>Persyaratan:</div>
                                    <ul style={{ 
                                      paddingLeft: '1.2rem', 
                                      marginTop: '0.5rem', 
                                      marginBottom: 0,
                                      lineHeight: '1.6'
                                    }}>
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default LayananSfrSor;
