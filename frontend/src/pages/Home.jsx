// frontend/src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const res = await axios.get('/api/medicamentos/');
        setMedicamentos(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar medicamentos:', err);
        setError('Error al cargar los medicamentos');
        setLoading(false);
      }
    };

    fetchMedicamentos();
  }, []);

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando medicamentos...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bienvenido al Inventario de Medicamentos</h1>
      <p>Hola, <strong>{user.nombre}</strong>! 🎉</p>

      <h2>Catálogo de Medicamentos</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginTop: '1rem'
      }}>
        {medicamentos.map(med => (
          <div key={med.id_med} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#f9f9f9'
          }}>
            {/* ✅ Mostrar la imagen si existe */}
            {med.img_med && (
              <img
                src={`http://localhost:8000${med.img_med}`}
                alt={med.nom_med}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  marginBottom: '0.8rem'
                }}
              />
            )}

            <h3>{med.nom_med}</h3>
            <p><strong>Proveedor:</strong> {med.med_usu}</p>
            <p><strong>Precio:</strong> ${med.pre_med}</p>
            <p>{med.des_med || 'Sin descripción'}</p>
            {med.id_cat_fk && (
              <p><strong>Categoría:</strong> {med.id_cat_fk.nom_cat}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;