// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet /> {/* 👈 Di sini semua page akan dirender */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Layout;
