import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // State untuk mengelola dropdown yang aktif
  const [activeDropdown, setActiveDropdown] = useState(null);
  // State untuk toggle menu mobile
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Fungsi untuk menangani klik pada dropdown
  const handleDropdownToggle = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Tutup dropdown jika yang sama diklik
    } else {
      setActiveDropdown(dropdownName); // Buka dropdown yang diklik
    }
  };

  // Fungsi untuk menangani klik di luar dropdown untuk menutupnya
  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  // Fungsi untuk toggle menu mobile
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm">
      <div className="container">
        {/* Logo sebagai brand */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Balmon" style={{ height: '50px' }} />
        </Link>

        {/* Toggle button untuk mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigasi utama */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
          <ul className="navbar-nav nav nav-tabs align-items-center">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Beranda</Link>
            </li>

            <li className="nav-item dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => handleDropdownToggle('profil')}
                style={{ cursor: 'pointer' }}
              >
                Profil
              </div>
              {activeDropdown === 'profil' && (
                <ul className="dropdown-menu show">
                  <li><Link className="dropdown-item" to="/struktur-organisasi" onClick={() => setActiveDropdown(null)}>Struktur Organisasi</Link></li>
                  <li><Link className="dropdown-item" to="/visi-misi" onClick={() => setActiveDropdown(null)}>Visi & Misi</Link></li>
                  <li><Link className="dropdown-item" to="/tugas-fungsi" onClick={() => setActiveDropdown(null)}>Tugas & Fungsi</Link></li>
                </ul>
              )}
            </li>

            <li className="nav-item dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => handleDropdownToggle('pelayanan')}
                style={{ cursor: 'pointer' }}
              >
                Pelayanan
              </div>
              {activeDropdown === 'pelayanan' && (
                <ul className="dropdown-menu show">
                  <li><Link className="dropdown-item" to="/layanan-sfr-sor" onClick={() => setActiveDropdown(null)}>Izin SFR & SOR</Link></li>
                  <li><Link className="dropdown-item" to="/izin-amatir-ikrap" onClick={() => setActiveDropdown(null)}>Izin Amatir Radio & IKRAP</Link></li>
                  <li><Link className="dropdown-item" to="/izin-stasiun-radio" onClick={() => setActiveDropdown(null)}>Izin Stasiun Radio</Link></li>
                  <li><Link className="dropdown-item" to="/perpanjangan-reor" onClick={() => setActiveDropdown(null)}>Perpanjangan Sertifikat REOR</Link></li>
                  <li><a className="dropdown-item" href="https://sertifikasi.postel.go.id/" target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)}>Sertifikasi Alat & Perangkat</a></li>
                  <li><a className="dropdown-item" href="https://www.postel.go.id/sdppi_maps/10-20200601-sdppi-maps-simulasi-bhp.php" target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)}>Simulasi BPH Frekuensi</a></li>
                </ul>
              )}
            </li>

            <li className="nav-item dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => handleDropdownToggle('program')}
                style={{ cursor: 'pointer' }}
              >
                Program
              </div>
              {activeDropdown === 'program' && (
                <ul className="dropdown-menu show">
                  <li><Link className="dropdown-item" to="/mots" onClick={() => setActiveDropdown(null)}>MOTS</Link></li>
                  <li><Link className="dropdown-item" to="/lapor-gangguan-frekuensi" onClick={() => setActiveDropdown(null)}>Lapor Gangguan Frekuensi</Link></li>
                  <li><Link className="dropdown-item" to="/wbs" onClick={() => setActiveDropdown(null)}>Whistle Blowing System (WBS)</Link></li>
                  <li><Link className="dropdown-item" to="/lapor-sp4n" onClick={() => setActiveDropdown(null)}>SP4N Lapor!</Link></li>
                </ul>
              )}
            </li>

            <li className="nav-item dropdown">
              <div 
                className="nav-link dropdown-toggle" 
                onClick={() => handleDropdownToggle('publikasi')}
                style={{ cursor: 'pointer' }}
              >
                Publikasi
              </div>
              {activeDropdown === 'publikasi' && (
                <ul className="dropdown-menu show">
                  <li><Link className="dropdown-item" to="/daftar-artikel" onClick={() => setActiveDropdown(null)}>Artikel</Link></li>
                  <li><Link className="dropdown-item" to="/daftar-foto" onClick={() => setActiveDropdown(null)}>Galeri Foto</Link></li>
                  <li><Link className="dropdown-item" to="/daftar-video" onClick={() => setActiveDropdown(null)}>Galeri Video</Link></li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/kontak">Kontak</Link>
            </li>

            {/* Tombol Login 
            <li className="nav-item ms-3">
              <button className="btn btn-outline-primary">Login</button>
            </li> */}
          </ul>
        </div>
      </div>
      
      {/* Overlay untuk menutup dropdown saat klik di luar */}
      {activeDropdown && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }}
          onClick={handleClickOutside}
        />
      )}
    </nav>
  );
};

export default Navbar;