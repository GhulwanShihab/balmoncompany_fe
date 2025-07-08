// App.jsx
import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';  // Mengimpor CSS global
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Layout from './components/Layout';
import VisiMisi from './pages/VisiMisi';
import TugasFungsi from './pages/TugasFungsi';
import LayananSfrSor from './pages/LayananSfrSor';
import IzinAmatirIKRAP from './pages/IzinAmatirIkrap';
import IzinStasiunRadio from './pages/IzinStasiunRadio';
import PerpanjanganREOR from './pages/PerpanjanganReor';
import MOTS from './pages/Mots';
import GangguanFrekuensi from './pages/LaporGangguanFrekuensi';
import WBS from './pages/Wbs';
import LaporSp4n from './pages/LaporSp4n';
import DaftarArtikel from './pages/DaftarArtikel';
import ArtikelDetail from './pages/Artikel';
import DaftarFoto from './pages/DaftarFoto';
import DaftarVideo from './pages/DaftarVideo';
import Contact from './pages/Kontak';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/tugas-fungsi" element={<TugasFungsi />} />
        <Route path="/layanan-sfr-sor" element={<LayananSfrSor />} />
        <Route path="/izin-amatir-ikrap" element={<IzinAmatirIKRAP />} />
        <Route path="/izin-stasiun-radio" element={<IzinStasiunRadio />} />
        <Route path="/perpanjangan-reor" element={<PerpanjanganREOR />} />
        <Route path="/mots" element={<MOTS />} />
        <Route path="/lapor-gangguan-frekuensi" element={<GangguanFrekuensi />} />
        <Route path="/wbs" element={<WBS />} />
        <Route path="/lapor-sp4n" element={<LaporSp4n />} />
        <Route path="/daftar-artikel" element={<DaftarArtikel />} />
        <Route path="/daftar-artikel/:id" element={<ArtikelDetail />} />
        <Route path="/daftar-foto" element={<DaftarFoto />} />
        <Route path="/daftar-video" element={<DaftarVideo />} />
        <Route path="/kontak" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
