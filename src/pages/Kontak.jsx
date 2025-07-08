import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import potraitImage from '../assets/contact.png';
import bgHeadingGif from '../assets/bg-gif1.gif';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Header background GIF */}
      <div className="background-gif-wrapper">
        <img src={bgHeadingGif} alt="Header" />
        <h1 className="background-gif-text">KONTAK</h1>
      </div>

      {/* Konten */}
      <div className="container py-5" style={styles.contactWrapper}>
        <div className="row align-items-start">
          {/* Gambar */}
          <div className="col-md-6 mb-4 mb-md-0 text-center" data-aos="fade-right">
            <img
              src={potraitImage}
              alt="Contact"
              className="img-fluid rounded shadow"
              style={styles.contactImage}
            />
          </div>

          {/* Info Kontak */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 style={styles.contactSubtitle}><strong>INFORMASI KONTAK</strong></h2>
            <p><strong>Alamat :</strong> Jl. Kramat Jaya KM. 14 No.9 RT 004/002, Desa Hajimena, Kec. Natar, Kab. Lampung Selatan, Lampung 35362</p>
            <p><strong>Email :</strong> balmonsaranadanpelayanan@gmail.com</p>
            <p><strong>Telepon/WhatsApp :</strong> 0852 6666 6910</p>

            <h2 className="mt-4" style={styles.contactSubtitle}><strong>LOKASI</strong></h2>
            <div style={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3898460387272!2d105.2139320760099!3d-5.357337094621426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cff77ffa9fed%3A0x3c61fa95e2bec86b!2sBalai%20Monitor%20Spektrum%20Frekuensi%20Radio%20Kelas%20II%20Lampung!5e0!3m2!1sen!2sid!4v1721032151058!5m2!1sen!2sid"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  contactWrapper: {
    backgroundColor: '#fff',
    color: '#003366',
  },
  contactSubtitle: {
    color: '#0d6efd',
    fontWeight: '700',
    marginBottom: '20px',
  },
  contactImage: {
    maxWidth: '80%',
    height: 'auto',
  },
  mapContainer: {
    marginTop: '15px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
  },
};

export default Contact;
