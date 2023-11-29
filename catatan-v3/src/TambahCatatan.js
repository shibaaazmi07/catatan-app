import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from './utils/network'; 
import './App.css';

const TambahCatatan = ({ tambahCatatan }) => {
  const [title, setJudul] = useState('');
  const [body, setIsi] = useState('');
  const [createdAt, setTanggal] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(title.trim() !== '' && body.trim() !== '' && createdAt.trim() !== '');
  }, [title, body, createdAt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const response = await addNote({
        title: title,
        body: body,
      });

      if (!response.error) {
        console.log('Catatan berhasil ditambahkan:', response.data);
        tambahCatatan(response.data);
        navigate('/home');
      } else {
        console.error('Catatan gagal ditambahkan:', response.code);
      }
    }
  };

  return (
    <div>
      <div id='div-form'>
        <h2 id='judul-home'>Form Catatan</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-catatan">
            <label>Judul:</label>
            <input type="text" value={title} onChange={(e) => setJudul(e.target.value)} />

            <label>Isi:</label>
            <textarea value={body} onChange={(e) => setIsi(e.target.value)} />

            <label>Tanggal:</label>
            <input type="date" value={createdAt} onChange={(e) => setTanggal(e.target.value)} />
          </div>
          <button
            className={`btn-catatan btn btn-success ${isFormValid ? '' : 'disabled'}`}
            type="submit"
            disabled={!isFormValid}>Tambah Catatan
          </button>
        </form>
      </div>
      <br></br>
    </div>
  );
};

export default TambahCatatan;
