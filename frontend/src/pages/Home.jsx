// frontend/src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [medicamentos, setMedicamentos] = useState([]);
  const [medicamentosFiltrados, setMedicamentosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [ordenar, setOrdenar] = useState('nombre');

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const res = await axios.get('/api/medicamentos/');
        setMedicamentos(res.data);
        setMedicamentosFiltrados(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar medicamentos:', err);
        setError('Error al cargar los medicamentos');
        setLoading(false);
      }
    };

    fetchMedicamentos();
  }, []);

  // Filtrar y ordenar medicamentos
  useEffect(() => {
    let resultado = medicamentos.filter(med =>
      med.nom_med.toLowerCase().includes(busqueda.toLowerCase()) ||
      (med.des_med && med.des_med.toLowerCase().includes(busqueda.toLowerCase()))
    );

    // Ordenar
    if (ordenar === 'nombre') {
      resultado.sort((a, b) => a.nom_med.localeCompare(b.nom_med));
    } else if (ordenar === 'precio-asc') {
      resultado.sort((a, b) => parseFloat(a.pre_med) - parseFloat(b.pre_med));
    } else if (ordenar === 'precio-desc') {
      resultado.sort((a, b) => parseFloat(b.pre_med) - parseFloat(a.pre_med));
    }

    setMedicamentosFiltrados(resultado);
  }, [busqueda, ordenar, medicamentos]);

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Estadísticas
  const totalMedicamentos = medicamentos.length;
  const precioPromedio = medicamentos.length > 0
    ? (medicamentos.reduce((sum, med) => sum + parseFloat(med.pre_med || 0), 0) / medicamentos.length).toFixed(2)
    : 0;
  const medicamentoMasCaro = medicamentos.length > 0
    ? medicamentos.reduce((prev, current) => parseFloat(current.pre_med) > parseFloat(prev.pre_med) ? current : prev)
    : null;

  if (loading) return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <div style={{ fontSize: '3rem' }}>⏳</div>
        <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>Cargando medicamentos...</p>
      </div>
    </div>
  );

  if (error) return (
    <div style={{ padding: '2rem', color: '#c62828', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <div style={{ fontSize: '3rem' }}>❌</div>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* ENCABEZADO */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#1976d2', marginBottom: '0.5rem' }}>🏥 Bienvenido al Inventario de Medicamentos</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Hola, <strong>{user.nombre}</strong>! 👋 Aquí puedes gestionar y visualizar todos los medicamentos disponibles.</p>
      </div>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #2e7d32'
        }}>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>Total de Medicamentos</p>
          <h2 style={{ color: '#2e7d32', margin: '0.5rem 0 0 0', fontSize: '2rem' }}>{totalMedicamentos}</h2>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #1976d2'
        }}>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>Precio Promedio</p>
          <h2 style={{ color: '#1976d2', margin: '0.5rem 0 0 0', fontSize: '2rem' }}>${precioPromedio}</h2>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderLeft: '4px solid #f57c00'
        }}>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>Medicamento Más Caro</p>
          <h2 style={{ color: '#f57c00', margin: '0.5rem 0 0 0', fontSize: '1.3rem' }}>
            ${medicamentoMasCaro?.pre_med || 'N/A'}
          </h2>
          <p style={{ color: '#999', fontSize: '0.8rem', margin: '0.5rem 0 0 0' }}>
            {medicamentoMasCaro?.nom_med || 'Sin medicamentos'}
          </p>
        </div>
      </div>

      {/* CONTROLES DE BÚSQUEDA Y ORDENAMIENTO */}
      <div style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          {/* Búsqueda */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              🔍 Buscar Medicamento
            </label>
            <input
              type="text"
              placeholder="Escribe el nombre o descripción..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Ordenamiento */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              📊 Ordenar Por
            </label>
            <select
              value={ordenar}
              onChange={(e) => setOrdenar(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <option value="nombre">Nombre (A-Z)</option>
              <option value="precio-asc">Precio (Menor a Mayor)</option>
              <option value="precio-desc">Precio (Mayor a Menor)</option>
            </select>
          </div>

          {/* Resultados */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
              📋 Resultados
            </label>
            <div style={{
              padding: '0.75rem',
              backgroundColor: '#f0f0f0',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#333'
            }}>
              {medicamentosFiltrados.length} de {totalMedicamentos} medicamentos
            </div>
          </div>
        </div>
      </div>

      {/* LISTA DE MEDICAMENTOS */}
      <div>
        <h2 style={{ color: '#333', marginBottom: '1.5rem' }}>💊 Catálogo de Medicamentos</h2>

        {medicamentosFiltrados.length === 0 ? (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.1rem' }}>😕 No se encontraron medicamentos con esos criterios.</p>
            <p>Intenta con una búsqueda diferente.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {medicamentosFiltrados.map(med => (
              <div key={med.id_med} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
              }}
              >
                {/* Imagen */}
                <div style={{
                  backgroundColor: '#f0f0f0',
                  height: '180px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {med.img_med ? (
                    <img
                      src={`http://localhost:8000${med.img_med}`}
                      alt={med.nom_med}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div style={{ fontSize: '3rem' }}>💊</div>
                  )}
                </div>

                {/* Contenido */}
                <div style={{ padding: '1.2rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: '#1976d2', fontSize: '1.1rem' }}>
                    {med.nom_med}
                  </h3>

                  <div style={{
                    backgroundColor: '#e3f2fd',
                    padding: '0.5rem 0.8rem',
                    borderRadius: '4px',
                    marginBottom: '0.8rem',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    color: '#1976d2',
                    textAlign: 'center'
                  }}>
                    💰 ${med.pre_med}
                  </div>

                  <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0', minHeight: '40px' }}>
                    {med.des_med || '📝 Sin descripción disponible'}
                  </p>

                  <div style={{
                    borderTop: '1px solid #e0e0e0',
                    paddingTop: '0.8rem',
                    marginTop: '0.8rem'
                  }}>
                    <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: '#999' }}>
                      <strong>👤 Proveedor:</strong> {med.med_usu || 'N/A'}
                    </p>
                    {med.id_cat_fk && (
                      <p style={{ margin: '0.3rem 0', fontSize: '0.85rem', color: '#999' }}>
                        <strong>📂 Categoría:</strong> {med.id_cat_fk.nom_cat}
                      </p>
                    )}
                  </div>

                  <button style={{
                    width: '100%',
                    marginTop: '1rem',
                    padding: '0.75rem',
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1b5e20'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2e7d32'}
                  onClick={() => alert(`Seleccionaste: ${med.nom_med}`)}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PIE DE PÁGINA */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666',
        borderTop: '2px solid #2e7d32'
      }}>
        <p>© 2025 MIMS - Sistema de Gestión de Medicamentos</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  );
};

export default Home;