# 🔐 GUÍA DE ACCESO - MIMS

## ✅ ESTADO ACTUAL

- ✓ **Backend Django**: http://localhost:8000 (Funcionando)
- ✓ **Frontend React**: http://localhost:3000 (Compilado y funcionando)
- ✓ **Base de datos**: Inicializada con superusuario

---

## 🚀 CÓMO INGRESAR A LA APLICACIÓN

### Opción 1: Usar Credenciales de Administrador (Recomendado)

1. Abre tu navegador
2. Ve a: **http://localhost:3000**
3. Verás la página de Login
4. Ingresa las siguientes credenciales:

```
📧 Correo:      admin@mims.local
🔑 Contraseña:  Admin123456
```

5. Haz clic en **"Entrar"**
6. ¡Listo! Ahora verás el panel principal con los medicamentos

---

### Opción 2: Crear una Nueva Cuenta (Registro)

1. Ve a: **http://localhost:3000**
2. Haz clic en **"¿No tienes cuenta? Regístrate"**
3. Completa el formulario con:
   - **Nombres**: Tu nombre
   - **Apellidos**: Tu apellido
   - **Correo**: Tu email (debe ser único)
   - **Contraseña**: Mínimo 6 caracteres
   - **Teléfono**: Opcional
   - **Tipo de Documento**: Selecciona uno
   - **Número de Documento**: Tu cédula/pasaporte
4. Haz clic en **"Registrarse"**
5. Serás redirigido al login. Usa tus nuevas credenciales

---

## 🛠️ ACCESO AL PANEL DE ADMINISTRACIÓN

Para gestionar usuarios, medicamentos y más desde el backend:

1. Ve a: **http://localhost:8000/admin**
2. Ingresa las mismas credenciales:
   ```
   👤 Correo o Usuario: admin@mims.local
   🔑 Contraseña: Admin123456
   ```

---

## 📍 URLs IMPORTANTES

| Sección | URL | Descripción |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | Aplicación principal de React |
| Backend API | http://localhost:8000 | API REST de Django |
| Admin Django | http://localhost:8000/admin | Panel administrativo |
| Login | http://localhost:3000/login | Página de inicio de sesión |
| Registro | http://localhost:3000/register | Página para crear cuenta |

---

## 🐛 SI NO FUNCIONA

### Error: "Credenciales inválidas"
- ✓ Verifica que el backend esté corriendo (http://localhost:8000 debe responder)
- ✓ Asegúrate de escribir correctamente: `admin@mims.local` (incluye @mims.local)
- ✓ La contraseña es: `Admin123456` (con mayúscula en A)

### Error: "No se puede conectar a http://localhost:3000"
- Reinicia el frontend: `npm start` en la carpeta `frontend/`

### Error: "La aplicación no carga medicamentos"
- ✓ Verifica que ambos servidores estén corriendo
- ✓ Abre la consola (F12) para ver errores detallados

---

## 💾 FLUJO COMPLETO DE LA APLICACIÓN

```
1. Accedes a http://localhost:3000
                  ↓
2. React carga la página de Login
                  ↓
3. Escribes correo y contraseña
                  ↓
4. Envías el formulario
                  ↓
5. React envía petición a http://localhost:8000/api/auth/login/
                  ↓
6. Django verifica credenciales en la base de datos
                  ↓
7. Si son correctas, devuelve un token JWT
                  ↓
8. React guarda el token en localStorage
                  ↓
9. React te redirige a la página principal (Home)
                  ↓
10. Home carga medicamentos desde http://localhost:8000/api/medicamentos/
                  ↓
11. Django devuelve la lista de medicamentos
                  ↓
12. React muestra los medicamentos en pantalla
```

---

## 📊 QUÉ VAS A VER

**En la Página Principal (Home):**
- Título: "Bienvenido al Inventario de Medicamentos"
- Tu nombre: "Hola, Admin Usuario! 🎉"
- Cuadrícula de medicamentos con:
  - 📸 Imagen del medicamento
  - 💊 Nombre del medicamento
  - 🏢 Proveedor
  - 💵 Precio
  - 📝 Descripción
  - 📂 Categoría

**En la Barra de Navegación (Navbar):**
- Nombre de la app: "Inventario Med"
- Tu usuario: "Hola, Admin Usuario"
- Botón: "Salir"

---

## ✨ SOLUCIÓN RÁPIDA

Si algo no funciona, ejecuta estos comandos en orden:

```powershell
# 1. Ir al directorio principal
cd c:\xampp\htdocs\MIMS\mims

# 2. Iniciar backend en una terminal
cd backend
python manage.py runserver

# 3. En otra terminal, iniciar frontend
cd ..\frontend
npm start
```

Luego abre http://localhost:3000 en tu navegador.

---

**¡Listo! Tu sistema MIMS está completamente funcional. 🚀**
