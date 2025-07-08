import React from "react";
import Slider from "react-slick";

// Import gambar dari assets
import indogoLogo from "../assets/indogo.jpg";
import dtsLogo from "../assets/DTS.png";
import sippnLogo from "../assets/SIPPN.jpg";
import domaingoLogo from "../assets/domaingo.png";
import bankindoLogo from "../assets/bankindo.jpg";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LinkTerkaitCarousel = () => {
  const logoLinks = [
    { id: 1, name: "Indogo", logo: indogoLogo, link: "https://kominfo.go.id" },
    { id: 2, name: "DTS", logo: dtsLogo, link: "https://brti.kominfo.go.id" },
    { id: 3, name: "SIPPN", logo: sippnLogo, link: "https://balmon.example.com" },
    { id: 4, name: "Domaingo", logo: domaingoLogo, link: "https://postel.go.id" },
    { id: 5, name: "Bankindo", logo: bankindoLogo, link: "https://kemendagri.go.id" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "2rem 1rem", backgroundColor: "#f1f1f1" }}>
      <div className="container">
        <h4 style={{
          textAlign: "center",
          color: "#003366",
          fontWeight: "bold",
          marginBottom: "1.5rem"
        }}>
          Link Terkait
        </h4>
        <Slider {...settings}>
          {logoLinks.map((item) => (
            <div key={item.id} style={{ padding: "0 50px" }}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{
                    maxWidth: "100px",
                    height: "auto",
                    objectFit: "contain",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LinkTerkaitCarousel;
