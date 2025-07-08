import { useEffect } from 'react';
import slide_1 from '../assets/header website.png';
import slide_2 from '../assets/Khas Lampung.png';
import slide_3 from '../assets/ZI.png';


const Carousel = () => {
  useEffect(() => {
    // Inisialisasi manual carousel setelah render
    const carouselElement = document.getElementById('myCarousel');
    if (carouselElement) {
      // Cegah duplikasi inisialisasi
      if (!carouselElement.classList.contains('carousel-initialized')) {
        const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
        new bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel',
          pause: 'hover',
        });
        carouselElement.classList.add('carousel-initialized');
      }
    }
  }, []);

  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      data-bs-pause="hover"
    >
      <div className="carousel-inner">
        {[slide_1, slide_2, slide_3].map((slide, idx) => (
          <div
            className={`carousel-item ${idx === 0 ? 'active' : ''}`}
            key={idx}
          >
            <div style={{ maxHeight: '600px', overflow: 'hidden' }}>
              <img
                src={slide}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
