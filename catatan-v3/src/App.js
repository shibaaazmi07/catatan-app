import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, Outlet } from 'react-router-dom';
import TambahCatatan from './TambahCatatan';
import Register from "./Register";
import Login from "./Login";
import Home from './Home';
import './App.css';
import { getAccessToken } from './utils/network';

function NeedLogin(){
  let auth= getAccessToken();
  if(!auth){
    return<Navigate to="/login"/>;
  }
  return <Outlet/>
}

const Navigation = () => {
  const location = useLocation();
  const isRegisterOrLogin = location.pathname === '/' || location.pathname === '/login';

  return !isRegisterOrLogin && (
    <nav>
      <ul id="link-utama">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/tambah">Tambah Catatan</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [catatan, setCatatan] = useState([]);
  const tambahCatatan = (newCatatan) => {
    setCatatan([...catatan, newCatatan]);
  };

  return (
    <Router>
      <div id="utama">
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={<Register />}
          />
          <Route 
            path="/login" 
            element={<Login />}
          />
          <Route element={<NeedLogin />} >
            <Route
              path="/home"
              element={<Home catatan={catatan} setCatatan={setCatatan} />}
            />
            <Route
              path="/tambah"
              element={<TambahCatatan tambahCatatan={tambahCatatan} />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
