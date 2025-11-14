// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ cor_usu: '', con_usu: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login/', formData);
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/');
    } catch (err) {
      console.error('Error al iniciar sesión:', err.response?.data || err);
      setError(err.response?.data?.error || 'Credenciales inválidas');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f5e9, #e3f2fd)'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'white',
          padding: '2.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Iniciar Sesión</h2>
        {error && <div style={{ color: '#c62828', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        <input
          type="email"
          name="cor_usu"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="password"
          name="con_usu"
          placeholder="Contraseña"
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1.5rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            boxSizing: 'border-box'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'linear-gradient(90deg, #2e7d32, #1976d2)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Entrar
        </button>
        <p style={{ textAlign: 'center', marginTop: '1.2rem' }}>
          ¿No tienes cuenta? <a href="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>Regístrate</a>
        </p>
      </form>
    </div>
  );
};

export default Login;