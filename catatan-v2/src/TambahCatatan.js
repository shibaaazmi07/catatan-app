// TambahCatatan.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const TambahCatatan = ({ tambahCatatan }) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(judul.trim() !== '' && isi.trim() !== '' && tanggal.trim() !== '');
  }, [judul, isi, tanggal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      tambahCatatan({ judul, isi, tanggal });
      navigate('/');
    }
  };

  return (
    <div>
      <div id='div-form'>
        <h2 id='judul-home'>Form Catatan</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-catatan">
            <label>Judul:</label>
            <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} />

            <label>Isi:</label>
            <textarea value={isi} onChange={(e) => setIsi(e.target.value)} />

            <label>Tanggal:</label>
            <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
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
