import React, { useState, useEffect, useRef } from 'react';

// Komponen SVG WhatsApp Icon
const WhatsAppIcon = ({ size = 32, color = "white" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color}
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.72.045.477-.099.883z"/>
  </svg>
);

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  // Memperbaiki variabel yang tidak digunakan
  // const [isLoading, setIsLoading] = useState(false);
  // const [showTooltip, setShowTooltip] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Tetap menggunakan isLoading karena dipakai di handleSubmit
  const popupRef = useRef(null);
  
  // No. WhatsApp customer service Balmon Lampung
  const whatsappNumber = '6285266666910'; // Ganti dengan nomor WA sebenarnya
  
  // Hapus serviceOptions karena tidak digunakan atau tambahkan implementasinya jika diperlukan
  // const serviceOptions = [...];

  // Efek untuk menangani klik di luar popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Menambahkan isOpen ke dependency array

  // Menampilkan tooltip setelah beberapa detik (dimodifikasi untuk menghindari error)
  useEffect(() => {
    // Kita tidak menggunakan showTooltip, jadi tooltip sementara dihapus
    // atau Anda bisa mengimplementasikannya kembali jika diperlukan
    const tooltipTimer = setTimeout(() => {
      // Implementasi tooltip jika diperlukan
    }, 3000);
    
    return () => clearTimeout(tooltipTimer);
  }, [isOpen]); // Menambahkan isOpen sebagai dependency
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Format pesan untuk WhatsApp
    const formattedMessage = encodeURIComponent(
      `*Pesan dari Website Balmon Lampung*\n\n` +
      `*Nama:* ${name}\n` +
      `*Perihal:* ${subject}\n\n` +
      `*Pesan:* ${message}`
    );
    
    // Simulasi loading (bisa dihapus di produksi)
    setTimeout(() => {
      // Buka WhatsApp dengan pesan yang sudah diformat
      window.open(`https://wa.me/${whatsappNumber}?text=${formattedMessage}`, '_blank');
      
      // Reset form dan tutup popup
      setName('');
      setSubject('');
      setMessage('');
      setIsLoading(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Tombol Floating WhatsApp */}
      <button
        className="floating-whatsapp-button"
        onClick={() => setIsOpen(true)}
        aria-label="Hubungi kami via WhatsApp"
        title="Hubungi kami via WhatsApp"
      >
        <WhatsAppIcon />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div className="floating-whatsapp-popup" ref={popupRef}>
          <div className="floating-whatsapp-header">
            <h3>Customer Service Balmon Lampung</h3>
            <button 
              className="close-button" 
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
            >
              &times;
            </button>
          </div>
          
          <div className="floating-whatsapp-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama Anda</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Masukkan nama anda"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Perihal</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  placeholder="Perihal pesan anda"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  placeholder="Silahkan tulis pesan anda disini..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? 'Mengirim...' : (
                  <>
                    <WhatsAppIcon size={18} /> Kirim via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Overlay untuk menutup popup saat klik di luar */}
      {isOpen && (
        <div 
          className="floating-whatsapp-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* CSS Inline untuk komponen */}
      <style jsx>{`
        .floating-whatsapp-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25D366;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          border: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .floating-whatsapp-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
        }

        .floating-whatsapp-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1001;
        }

        .floating-whatsapp-popup {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 320px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
          z-index: 1002;
          overflow: hidden;
        }

        .floating-whatsapp-header {
          background-color: #075E54;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .floating-whatsapp-header h3 {
          margin: 0;
          font-size: 16px;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .floating-whatsapp-body {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #555;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 14px;
        }

        textarea.form-control {
          resize: vertical;
        }

        .btn-submit {
          width: 100%;
          padding: 12px;
          background-color: #25D366;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn-submit:hover {
          background-color: #128C7E;
        }

        .btn-submit:disabled {
          background-color: #7fd8a0;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;