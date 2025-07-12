import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { BrowserRouter } from 'react-router-dom'; // 🟦 Tambahan penting

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* 🟦 Bungkus App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
