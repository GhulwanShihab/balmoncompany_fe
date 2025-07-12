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
    <nav className="bg-white border-b sticky top-0 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo sebagai brand */}
          <Link className="flex items-center" to="/">
            <img src={logo} alt="Balmon" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Toggle button untuk mobile */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            type="button"
            onClick={handleNavCollapse}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigasi utama */}
          <div className={`${isNavCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:justify-end lg:flex-1 absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none`}>
          <ul className="lg:flex lg:space-x-8 lg:items-center py-4 lg:py-0">

            <li className="block lg:inline-block">
              <Link className="block lg:inline-block text-blue-600 hover:text-blue-800 px-4 py-2 lg:px-0" to="/">Beranda</Link>
            </li>

            <li className="relative block lg:inline-block">
              <div 
                className="block lg:inline-block text-gray-700 hover:text-blue-600 px-4 py-2 lg:px-0 cursor-pointer" 
                onClick={() => handleDropdownToggle('profil')}
              >
                Profil
              </div>
              {activeDropdown === 'profil' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/struktur-organisasi" onClick={() => setActiveDropdown(null)}>Struktur Organisasi</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/visi-misi" onClick={() => setActiveDropdown(null)}>Visi & Misi</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/tugas-fungsi" onClick={() => setActiveDropdown(null)}>Tugas & Fungsi</Link></li>
                </ul>
              )}
            </li>

            <li className="relative block lg:inline-block">
              <div 
                className="block lg:inline-block text-gray-700 hover:text-blue-600 px-4 py-2 lg:px-0 cursor-pointer" 
                onClick={() => handleDropdownToggle('pelayanan')}
              >
                Pelayanan
              </div>
              {activeDropdown === 'pelayanan' && (
                <ul className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/layanan-sfr-sor" onClick={() => setActiveDropdown(null)}>Izin SFR & SOR</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/izin-amatir-ikrap" onClick={() => setActiveDropdown(null)}>Izin Amatir Radio & IKRAP</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/izin-stasiun-radio" onClick={() => setActiveDropdown(null)}>Izin Stasiun Radio</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/perpanjangan-reor" onClick={() => setActiveDropdown(null)}>Perpanjangan Sertifikat REOR</Link></li>
                  <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="https://sertifikasi.postel.go.id/" target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)}>Sertifikasi Alat & Perangkat</a></li>
                  <li><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="https://www.postel.go.id/sdppi_maps/10-20200601-sdppi-maps-simulasi-bhp.php" target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)}>Simulasi BPH Frekuensi</a></li>
                </ul>
              )}
            </li>

            <li className="relative block lg:inline-block">
              <div 
                className="block lg:inline-block text-gray-700 hover:text-blue-600 px-4 py-2 lg:px-0 cursor-pointer" 
                onClick={() => handleDropdownToggle('program')}
              >
                Program
              </div>
              {activeDropdown === 'program' && (
                <ul className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/mots" onClick={() => setActiveDropdown(null)}>MOTS</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/lapor-gangguan-frekuensi" onClick={() => setActiveDropdown(null)}>Lapor Gangguan Frekuensi</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/wbs" onClick={() => setActiveDropdown(null)}>Whistle Blowing System (WBS)</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/lapor-sp4n" onClick={() => setActiveDropdown(null)}>SP4N Lapor!</Link></li>
                </ul>
              )}
            </li>

            <li className="relative block lg:inline-block">
              <div 
                className="block lg:inline-block text-gray-700 hover:text-blue-600 px-4 py-2 lg:px-0 cursor-pointer" 
                onClick={() => handleDropdownToggle('publikasi')}
              >
                Publikasi
              </div>
              {activeDropdown === 'publikasi' && (
                <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/daftar-artikel" onClick={() => setActiveDropdown(null)}>Artikel</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/daftar-foto" onClick={() => setActiveDropdown(null)}>Galeri Foto</Link></li>
                  <li><Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/daftar-video" onClick={() => setActiveDropdown(null)}>Galeri Video</Link></li>
                </ul>
              )}
            </li>

            <li className="block lg:inline-block">
              <Link className="block lg:inline-block text-gray-700 hover:text-blue-600 px-4 py-2 lg:px-0" to="/kontak">Kontak</Link>
            </li>

            {/* Tombol Login 
            <li className="nav-item ms-3">
              <button className="btn btn-outline-primary">Login</button>
            </li> */}
          </ul>
          </div>
        </div>
      </div>
      
      {/* Overlay untuk menutup dropdown saat klik di luar */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 -z-10"
          onClick={handleClickOutside}
        />
      )}
    </nav>
  );
};

export default Navbar;