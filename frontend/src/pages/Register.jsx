// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    nom_usu: '',
    ape_usu: '',
    cor_usu: '',
    con_usu: '',
    tel_usu: '',
    tip_doc: 'CC',
    num_doc: '',
    id_rol_fk: 2 // asume que rol 2 = cliente
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('/api/auth/register/', formData);
      alert('¡Registro exitoso! Ahora inicia sesión.');
      navigate('/login');
    } catch (err) {
      console.error('Error al registrarse:', err.response?.data || err);
      setError(err.response?.data?.error || 'Error al registrarse. Verifica tus datos.');
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
          maxWidth: '450px'
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Crear Cuenta</h2>
        {error && <div style={{ color: '#c62828', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        
        <input name="nom_usu" placeholder="Nombres *" onChange={handleChange} required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="ape_usu" placeholder="Apellidos *" onChange={handleChange} required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="cor_usu" type="email" placeholder="Correo *" onChange={handleChange} required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="con_usu" type="password" placeholder="Contraseña *" onChange={handleChange} required minLength="6"
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        <input name="tel_usu" placeholder="Teléfono (opcional)" onChange={handleChange}
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px' }} />
        
        <select name="tip_doc" onChange={handleChange} defaultValue="CC"
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '6px' }}>
          <option value="CC">Cédula de Ciudadanía</option>
          <option value="CE">Cédula de Extranjería</option>
          <option value="TI">Tarjeta de Identidad</option>
          <option value="PAS">Pasaporte</option>
        </select>
        
        <input name="num_doc" placeholder="Número de documento *" onChange={handleChange} required
          style={{ width: '100%', padding: '0.75rem', marginBottom: '1.5rem', border: '1px solid #ccc', borderRadius: '6px' }} />

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
          Registrarse
        </button>
        <p style={{ textAlign: 'center', marginTop: '1.2rem' }}>
          ¿Ya tienes cuenta? <a href="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>Inicia sesión</a>
        </p>
      </form>
    </div>
  );
};

export default Register;