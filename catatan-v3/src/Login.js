import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './register.css';
import {login, putAccessToken} from "./utils/network";

function Login(){
  const navigate = useNavigate();
  const[username, setUsername]= useState("");
  const[password, setPassword]= useState("");

  function onSubmitHandler(event){
    event.preventDefault();
    login({username, password}).then((response)=>{
      if (response.data.token){
        putAccessToken(response.data.token);
        navigate("/home");
      }else{
        alert("gagal login");
      }
    });
  }

  return (
    <div>
      <h2 id='judul-register'>Login</h2>
      <form onSubmit={onSubmitHandler}>
        <div id="input-register">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          
          <label >Password:</label>
          <input 
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div id="btn_bawah">
          <button id="btn_register" type="button" onClick={() => navigate('/')}>Halaman Register</button>
          <button id="btn_login" type="submit">Login</button> 
        </div>
      </form>
    </div>
  );
};

export default Login;
