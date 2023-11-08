// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function TableRowDariFunction(props){
  return(
    <tr>
      <th scope="row">{props.judul}</th>
      <th>{props.isi}</th>
      <th>{props.tanggal}</th>
    </tr>
  );
}

function PostItDariFunction(props) {
  return (
    <div className={`post-it ${props.warna}`}>
      <div className="post-it-header">
        <div className="close-button"></div>
      </div>
      <div className="post-it-title">{props.judul}</div>
      <div className="post-it-content">{props.isi}</div>
      <div className="post-it-date text-secondary">{props.tanggal}</div>
    </div>
  );
}

function App() {
  const nama="Shibaa";
  // data catatan
  const judul= "Bulan Januari";
  const isi="Saya memulai awal tahun dengan semangat perkuliahan";
  const tanggal="1 Januari 2023";
  const judul2= "Bulan Februari";
  const isi2="Saya menjalani perkulian dan kesibukan kampus";
  const tanggal2="1 Februari 2023";
  const judul3= "Bulan Maret";
  const isi3="Saya melaksanakan ujian tengah semester";
  const tanggal3="1 Maret 2023";
  const judul4= "Bulan April";
  const isi4="Saya mengikuti seminar-seminar untuk menambah pengetahuan";
  const tanggal4="20 Maret 2023";
  const judul5= "Bulan Mei";
  const isi5="Saya mengikuti pelatihan softskill";
  const tanggal5="15 Mei 2023";

  const [inputJudul, setInputJudul] = useState(""); //input judul
  const [inputIsi, setInputIsi] = useState(""); // input isi
  const [inputTanggal, setInputTanggal] = useState(""); // input tanggal
  const [catatan, setCatatan] = useState([]); // menyimpan catatan

  // catatan baru dari inputan
  const tambahkanCatatan = () => {
    const catatanBaru = {
      judul: inputJudul,
      isi: inputIsi,
      tanggal: inputTanggal,
      warna: "post-it-orange" //default warna catatan baru
    };
    // Menambahkan catatan baru ke dalam array catatan
    setCatatan([...catatan, catatanBaru]);
    // Mengosongkan kolom inputan setelah catatan ditambahkan
    setInputJudul("");
    setInputIsi("");
    setInputTanggal("");
  };

  return (
    <div className="App">
      <h1>Selamat Datang di Website Catatan milik {nama}</h1>
      <div class="input-catatan" >
        <p>Judul: <input type='text' placeholder='Tambahkan judul baru' value={inputJudul}
          onChange={(e) => setInputJudul(e.target.value)}></input></p>
        <p>Isi: <input type='text' placeholder='Tambahkan isi baru' value={inputIsi}
          onChange={(e) => setInputIsi(e.target.value)}></input></p>
        <p>Tanggal: <input type='text' placeholder='Tambahkan tanggal baru' value={inputTanggal}
          onChange={(e) => setInputTanggal(e.target.value)}></input></p>
      </div>
      <button class="btn-catatan btn btn-success" onClick={tambahkanCatatan}>Tambah Catatan</button>
      <br></br>

      <div class="posisi">
        <PostItDariFunction judul={judul} isi={isi} tanggal={tanggal}></PostItDariFunction>
        <PostItDariFunction judul={judul2} isi={isi2} tanggal={tanggal2} warna="post-it-orange"></PostItDariFunction>
        <PostItDariFunction judul={judul3} isi={isi3} tanggal={tanggal3}></PostItDariFunction>
        <PostItDariFunction judul={judul4} isi={isi4} tanggal={tanggal4} warna="post-it-orange"></PostItDariFunction>
        <PostItDariFunction judul={judul5} isi={isi5} tanggal={tanggal5}></PostItDariFunction>

        {catatan.map((catatan, index) => (
          <PostItDariFunction
            key={index}
            judul={catatan.judul}
            isi={catatan.isi}
            tanggal={catatan.tanggal}
            warna={catatan.warna}
          />
        ))}
      </div>
      
      <table class="table1">
        <thead>
          <tr>
            <th scope="col">Judul</th>
            <th scope="col">Isi</th>
            <th scope="col">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <TableRowDariFunction judul={judul} isi={isi} tanggal={tanggal}></TableRowDariFunction>
          <TableRowDariFunction judul={judul2} isi={isi2} tanggal={tanggal2}></TableRowDariFunction>
          <TableRowDariFunction judul={judul3} isi={isi3} tanggal={tanggal3}></TableRowDariFunction>
          <TableRowDariFunction judul={judul4} isi={isi4} tanggal={tanggal4}></TableRowDariFunction>
          <TableRowDariFunction judul={judul5} isi={isi5} tanggal={tanggal5}></TableRowDariFunction>
          
          {catatan.map((catatan, index) => ( 
            // dari inputan baru ke dalam tabel 
              <TableRowDariFunction
                key={index}
                judul={catatan.judul}
                isi={catatan.isi}
                tanggal={catatan.tanggal}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
