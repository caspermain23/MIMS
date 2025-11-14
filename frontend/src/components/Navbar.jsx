// frontend/src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <nav style={{
      background: 'linear-gradient(90deg, #2e7d32, #1976d2)',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
        Inventario Med
      </div>
      <div>
        <span>Hola, {user.nombre || 'usuario'}</span>
        <button
          onClick={handleLogout}
          style={{
            marginLeft: '1rem',
            background: 'white',
            color: '#1976d2',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Salir
        </button>
      </div>
    </nav>
  );
};

export default Navbar;