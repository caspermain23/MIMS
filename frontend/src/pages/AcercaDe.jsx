// frontend/src/pages/AcercaDe.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AcercaDe = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '2rem'
    }}>
      {/* Botón Volver */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1565c0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1976d2'}
      >
        ← Volver al Home
      </button>

      {/* Contenido Principal */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Encabezado */}
        <div style={{
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          textAlign: 'center',
          marginBottom: '2rem',
          borderTop: '4px solid #2e7d32'
        }}>
          <h1 style={{
            color: '#2e7d32',
            fontSize: '2.5rem',
            margin: '0 0 1rem 0'
          }}>
            💊 MIMS
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#666',
            margin: 0,
            fontWeight: 'bold'
          }}>
            Sistema de Gestión de Medicamentos
          </p>
          <p style={{
            fontSize: '0.95rem',
            color: '#999',
            margin: '0.5rem 0 0 0'
          }}>
            Versión 1.0.0
          </p>
        </div>

        {/* Descripción */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#1976d2', borderBottom: '2px solid #1976d2', paddingBottom: '1rem' }}>
            📋 ¿Qué es MIMS?
          </h2>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem' }}>
            MIMS es una plataforma integral de gestión de medicamentos diseñada para facilitar la administración, 
            inventario y distribución de medicamentos en establecimientos farmacéuticos y de salud. 
            Nuestro sistema proporciona herramientas modernas para optimizar procesos y mejorar la eficiencia operativa.
          </p>
        </div>

        {/* Características */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #2e7d32', paddingBottom: '1rem' }}>
            ✨ Características Principales
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            {[
              {
                icon: '📦',
                titulo: 'Gestión de Inventario',
                desc: 'Control completo del inventario de medicamentos en tiempo real'
              },
              {
                icon: '👥',
                titulo: 'Gestión de Usuarios',
                desc: 'Administración de usuarios con roles y permisos personalizables'
              },
              {
                icon: '💰',
                titulo: 'Control de Precios',
                desc: 'Seguimiento y análisis de precios de medicamentos'
              },
              {
                icon: '👨‍💼',
                titulo: 'Gestión de Empleados',
                desc: 'Administración del equipo de trabajo y asignaciones'
              },
              {
                icon: '📊',
                titulo: 'Reportes Analíticos',
                desc: 'Informes detallados y análisis de datos de medicamentos'
              },
              {
                icon: '💬',
                titulo: 'Sistema de Mensajes',
                desc: 'Comunicación interna entre miembros del equipo'
              }
            ].map((caracteristica, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                borderLeft: '4px solid #2e7d32',
                transition: 'transform 0.3s'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {caracteristica.icon}
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
                  {caracteristica.titulo}
                </h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                  {caracteristica.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tecnologías */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#1976d2', borderBottom: '2px solid #1976d2', paddingBottom: '1rem' }}>
            🔧 Tecnologías Utilizadas
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
          }}>
            {[
              { nombre: 'Django 4.2', icono: '🐍', desc: 'Backend robusto y escalable' },
              { nombre: 'React 19', icono: '⚛️', desc: 'Frontend moderno e interactivo' },
              { nombre: 'PostgreSQL', icono: '🗄️', desc: 'Base de datos confiable' },
              { nombre: 'JWT Auth', icono: '🔐', desc: 'Autenticación segura' },
              { nombre: 'REST API', icono: '🌐', desc: 'API robusta y escalable' },
              { nombre: 'Axios', icono: '📡', desc: 'Cliente HTTP moderno' }
            ].map((tech, index) => (
              <div key={index} style={{
                padding: '1rem',
                backgroundColor: '#e3f2fd',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid #90caf9'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  {tech.icono}
                </div>
                <h3 style={{ margin: '0 0 0.3rem 0', color: '#1976d2', fontSize: '1rem' }}>
                  {tech.nombre}
                </h3>
                <p style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo Desarrollo */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #2e7d32', paddingBottom: '1rem' }}>
            👨‍💻 Equipo de Desarrollo
          </h2>
          <div style={{
            marginTop: '1.5rem',
            padding: '1.5rem',
            backgroundColor: '#f0f8f4',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#2e7d32', margin: '0 0 0.5rem 0' }}>Jhonnatan Martinez</h3>
            <p style={{ margin: 0, color: '#666' }}>Desarrollador Full Stack</p>
            <p style={{ margin: '0.5rem 0 0 0', color: '#999', fontSize: '0.9rem' }}>
              📧 jhonnatan.martinez7@soy.sena.edu.co
            </p>
          </div>
        </div>

        {/* Información Adicional */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#1976d2', borderBottom: '2px solid #1976d2', paddingBottom: '1rem' }}>
            ℹ️ Información Adicional
          </h2>
          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ margin: '1rem 0', color: '#555' }}>
              <strong>Última Actualización:</strong> {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p style={{ margin: '1rem 0', color: '#555' }}>
              <strong>Repositorio:</strong> <a href="https://github.com/caspermain23/MIMS" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'none' }}>github.com/caspermain23/MIMS</a>
            </p>
            <p style={{ margin: '1rem 0', color: '#555' }}>
              <strong>Licencia:</strong> MIT License
            </p>
            <p style={{ margin: '1rem 0', color: '#555' }}>
              <strong>Soporte:</strong> Para reportar problemas o sugerencias, contacta al equipo de desarrollo.
            </p>
          </div>
        </div>

        {/* Pie de Página */}
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          color: '#999',
          borderTop: '2px solid #e0e0e0',
          marginTop: '2rem'
        }}>
          <p>© 2025 MIMS - Sistema de Gestión de Medicamentos</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Desarrollado con ❤️ usando React y Django</p>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
