import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import { deleteNote, getNotes } from './utils/network';


function Catatan({ title, body, createdAt, onDelete }) {
  const colors = ['pink', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="post-it" style={{ backgroundColor: randomColor }}>
      <div className="post-it-header">
        <div className="close-button"></div>
      </div>
      <div className="post-it-title">{title}</div>
      <div className="post-it-content">{body}</div>
      <div className="post-it-date text-secondary">{createdAt}</div>
      <div className="delete-icon"><DeleteIcon onClick={onDelete} /></div>
    </div>
  );
}

const Home = ({ catatan, setCatatan }) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await getNotes();

      if (!response.error) {
        console.log('Data saat ini',response.data);
        setCatatan(response.data);
      } else {
        console.error('Gagal mengambil catatan:', response.code);
      }
    };

    fetchNotes();
  }, [setCatatan]); 

  const handleDelete = async (id, index) => {
    const response = await deleteNote(id);

    if (!response.error) {
      const updatedCatatan = [...catatan];
      updatedCatatan.splice(index, 1);
      console.log('Note berhasil dihapus',response.data);
      setCatatan(updatedCatatan);
    } else {
      console.error('Gagal menghapus catatan:', response.code);
    }
  };
  

  const filteredCatatan = catatan.filter((note) =>
    (note.title || '').toLowerCase().includes(searchTerm.toLowerCase())
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
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              onDelete={() => handleDelete(note.id, index)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Home;
