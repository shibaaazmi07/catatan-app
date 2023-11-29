// Home.js
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';

const colors = ['pink', 'yellow'];
function Catatan({ judul, isi, tanggal, onDelete }) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="post-it" style={{ backgroundColor: randomColor }}>
      <div className="post-it-header">
        <div className="close-button"></div>
      </div>
      <div className="post-it-title">{judul}</div>
      <div className="post-it-content">{isi}</div>
      <div className="post-it-date text-secondary">{tanggal}</div>
      <div className="delete-icon"><DeleteIcon onClick={onDelete} /></div>
    </div>
  );
}

const Home = ({ catatan, setCatatan }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    const updatedCatatan = [...catatan];
    updatedCatatan.splice(index, 1);
    setCatatan(updatedCatatan);
  };

  const filteredCatatan = catatan.filter((note) =>
    note.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 id='judul-home'>Home Daftar Catatan</h2>
      <div className="search-input">
        <input
          id="search-icon"
          type="text"
          placeholder="Cari berdasarkan judul"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon />
      </div>
      <ul>
        <div className="posisi">
          {filteredCatatan.map((note, index) => (
            <Catatan
              key={index}
              judul={note.judul}
              isi={note.isi}
              tanggal={note.tanggal}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Home;
