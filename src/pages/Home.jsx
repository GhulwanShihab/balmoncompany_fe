import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Carousel from '../components/Carousel';
import Sambutan from '../components/Sambutan';
import LayananSection from '../components/LayananSection';
import AduanSection from '../components/AduanSection';
import ListVideoHome from '../components/ListVideoHome';
import ListArtikelHome from '../components/ListArtikelHome';
import LinkTerkaitCarousel from '../components/LinkTerkaitCarousel';


const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Carousel />
      <Sambutan />
      <ListArtikelHome />
      <LayananSection />
      <AduanSection />
      <ListVideoHome />
      <LinkTerkaitCarousel />
    </>
  );
};

export default Home;
