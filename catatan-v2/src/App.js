// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TambahCatatan from './TambahCatatan';
import Home from './Home';
import './App.css';

const App = () => {
  const [catatan, setCatatan] = useState([
    {
      judul: "Bulan Januari",
      isi: "Saya memulai awal tahun dengan semangat perkuliahan",
      tanggal: "2023-1-1",
    },
    {
      judul: "Bulan Februari",
      isi: "Saya menjalani perkulian dan kesibukan kampus",
      tanggal: "2023-2-1",
    },
    {
      judul: "Bulan Maret",
      isi: "Saya melaksanakan ujian tengah semester",
      tanggal: "2023-3-1",
    }
  ]);

  const tambahCatatan = (newCatatan) => {
    setCatatan([...catatan, newCatatan]);
  };

  return (
    <Router>
      <div id="utama">
        <nav>
          <ul id="link-utama">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tambah">Tambah Catatan</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home catatan={catatan} setCatatan={setCatatan} />}
          />
          <Route
            path="/tambah"
            element={<TambahCatatan tambahCatatan={tambahCatatan} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
