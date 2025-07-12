import React, { useState, useEffect, useRef } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);
  const popupRef = useRef(null);
  
  const whatsappNumber = '6285266666910';

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
  }, [isOpen]);

  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      // Implementasi tooltip jika diperlukan
    }, 3000);
    
    return () => clearTimeout(tooltipTimer);
  }, [isOpen]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formattedMessage = encodeURIComponent(
      `*Pesan dari Website Balmon Lampung*\n\n` +
      `*Nama:* ${name}\n` +
      `*Perihal:* ${subject}\n\n` +
      `*Pesan:* ${message}`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${formattedMessage}`, '_blank');
      
      setName('');
      setSubject('');
      setMessage('');
      setIsLoading(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      <button
        className="fixed bottom-5 right-5 w-15 h-15 rounded-full bg-green-500 text-white flex items-center justify-center text-xl border-none shadow-lg cursor-pointer z-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        onClick={() => setIsOpen(true)}
        aria-label="Hubungi kami via WhatsApp"
        title="Hubungi kami via WhatsApp"
      >
        <WhatsAppIcon />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden" ref={popupRef}>
          <div className="bg-teal-700 text-white p-4 flex justify-between items-center">
            <h3 className="m-0 text-base">Customer Service Balmon Lampung</h3>
            <button 
              className="bg-transparent border-none text-white text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup"
            >
              &times;
            </button>
          </div>
          
          <div className="p-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-bold text-gray-600">Nama Anda</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  placeholder="Masukkan nama anda"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-1 font-bold text-gray-600">Perihal</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  placeholder="Perihal pesan anda"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-bold text-gray-600">Pesan</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded text-sm resize-y"
                  placeholder="Silahkan tulis pesan anda disini..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full p-3 bg-green-500 text-white border-none rounded text-base font-bold cursor-pointer transition-colors duration-300 hover:bg-teal-600 disabled:bg-green-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={isLoading}
              >
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

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default FloatingWhatsApp;