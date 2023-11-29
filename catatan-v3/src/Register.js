import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import { register } from "./utils/network";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register({
        username: formData.username,
        password: formData.password,
      });

      if (response.error) {
        throw new Error(`Registration failed: ${response.message}`);
      }
      console.log('User registered successfully');
      navigate('/home');
    } catch (error) {
      console.error('User registered failed:', error.message);
      if (error.message.includes('Registration failed')) {
        console.error('Server response:', error.message);
      }
    }
  };

  return (
    <div>
      <h2 id='judul-register'>Register</h2>
      <form onSubmit={handleSubmit}>
        <div id="input-register">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div id="btn_bawah">
          <button id="btn_register" type="submit">Register</button>
          <button id="btn_login" type="button" onClick={() => navigate('/login')}>Halaman Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
