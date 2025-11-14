# 🎉 MIMS - Sistema de Gestión de Medicamentos

## ✅ Instalación Completada

Todo ha sido configurado y está funcionando correctamente. Ambos servidores están ejecutándose de manera simultánea.

---

## 🚀 URLs DE ACCESO

| Componente | URL | Puerto |
|-----------|-----|--------|
| **Frontend React** | http://localhost:3000 | 3000 |
| **Backend Django** | http://localhost:8000 | 8000 |
| **Panel Admin Django** | http://localhost:8000/admin | 8000 |

---

## 🔐 CREDENCIALES DE ADMINISTRADOR

```
Email:      admin@mims.local
Contraseña: Admin123456
```

**Uso:** Ingresa estas credenciales en http://localhost:8000/admin

---

## 📋 Servicios Instalados

### Backend (Django)
- ✓ Django 4.2.16
- ✓ Django REST Framework 3.16.1
- ✓ JWT Authentication (SimpleJWT)
- ✓ CORS Headers
- ✓ Pillow para gestión de imágenes
- ✓ SQLite3 (Base de datos)

### Frontend (React)
- ✓ React 19.2.0
- ✓ React Router DOM 7.9.5
- ✓ Axios (Cliente HTTP)
- ✓ React Scripts 5.0.1

---

## 🛠️ Comandos Útiles

### Iniciar servidores de nuevo
```powershell
# En PowerShell desde el directorio raíz
.\start-servers.ps1
```

### Backend solo
```powershell
cd backend
python manage.py runserver
```

### Frontend solo
```powershell
cd frontend
npm start
```

---

## 📱 Funcionalidades Disponibles

### Apps Django Instaladas:
1. **usuarios** - Gestión de usuarios
2. **medicamentos** - Catálogo de medicamentos
3. **inventario** - Control de inventario
4. **empleado** - Gestión de empleados
5. **administracion** - Funciones administrativas
6. **mensajes** - Sistema de mensajería

---

## ⚠️ Notas Importantes

- La base de datos se encuentra en `backend/db.sqlite3`
- El frontend está configurado para comunicarse con el backend
- CORS está habilitado para desarrollo
- Todos los archivos migratorios ya han sido ejecutados

---

## 🐛 Solución de Problemas

### Si el puerto 8000 o 3000 ya está en uso:
```powershell
# Cambiar puerto del backend
python manage.py runserver 8001

# Para cambiar el puerto de React, establece la variable de entorno
$env:PORT=3001; npm start
```

### Si hay errores de dependencias:
```powershell
# Backend
pip install -r requirements.txt

# Frontend
npm install
```

---

## ✨ Estado Actual

| Componente | Estado |
|-----------|--------|
| Backend Django | ✓ Ejecutándose |
| Frontend React | ✓ Ejecutándose |
| Base de datos | ✓ Inicializada |
| Superusuario | ✓ Creado |
| CORS | ✓ Configurado |

---

**Fecha de configuración:** 14 de noviembre de 2025  
**Versión de Python:** 3.13.9  
**Versión de Node.js:** (instalada)

