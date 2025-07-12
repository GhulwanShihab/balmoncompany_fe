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
    <div className="py-8 px-4 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl font-bold text-[#003366] text-center mb-6">
          Link Terkait
        </h2>
        <Slider {...settings}>
          {logoLinks.map((item) => (
            <div key={item.id} className="px-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-[100px] h-auto object-contain transition-transform duration-300 hover:scale-110"
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
