# 📤 CÓMO SUBIR TU PROYECTO A GITHUB

## ✅ LO QUE YA HICISTE

```
✓ Instalaste Git
✓ Configuraste tu usuario (caspermain23)
✓ Configuraste tu email (jhonnatan.martinez7@soy.sena.edu.co)
✓ Creaste tu primer commit en tu computadora
```

Ahora necesitas **subir a GitHub**.

---

## 🚀 PASOS PARA SUBIR A GITHUB

### **PASO 1: Crea un Repositorio en GitHub**

1. Ve a https://github.com (inicia sesión si no lo estás)
2. Haz clic en el **+** en la esquina superior derecha
3. Selecciona **New repository**
4. Llena los datos:
   - **Repository name:** `MIMS` (o el nombre que quieras)
   - **Description:** Sistema de Gestión de Medicamentos
   - **Visibility:** Public (o Private si prefieres)
   - **NO marques** "Initialize this repository with" (porque ya tienes commits locales)
5. Haz clic en **Create repository**

---

### **PASO 2: Conecta tu repositorio local con GitHub**

Después de crear el repositorio, GitHub te mostrará una URL. Copia el comando que dice:

```
git remote add origin https://github.com/TU-USUARIO/MIMS.git
```

**Abre PowerShell en tu proyecto y ejecuta:**

```powershell
cd c:\xampp\htdocs\MIMS\mims

git remote add origin https://github.com/caspermain23/MIMS.git
```

*(Reemplaza "caspermain23" con tu nombre de usuario real de GitHub)*

---

### **PASO 3: Renombra la rama (si es necesario)**

```powershell
git branch -M main
```

---

### **PASO 4: Sube tu código a GitHub**

```powershell
git push -u origin main
```

Si sale un error sobre autenticación, GitHub te pedirá que uses un **token de acceso personal**.

---

## 🔐 SI PIDE AUTENTICACIÓN

Si GitHub pide autenticación:

1. Ve a https://github.com/settings/tokens
2. Haz clic en **Generate new token (classic)**
3. Dale un nombre: `MIMS-Push`
4. Selecciona los permisos:
   - ✓ repo (todo)
   - ✓ workflow
5. Haz clic en **Generate token**
6. **Copia el token** (no lo volverás a ver)

Cuando git te pida la contraseña, **pega el token** en lugar de tu contraseña.

---

## 📝 COMANDO RÁPIDO COMPLETO

Si quieres hacer todo en una sola vez:

```powershell
cd c:\xampp\htdocs\MIMS\mims

# 1. Agregar repositorio remoto
git remote add origin https://github.com/caspermain23/MIMS.git

# 2. Renombrar rama
git branch -M main

# 3. Subir a GitHub
git push -u origin main
```

---

## ✅ VERIFICACIÓN

Cuando termines, ve a:
```
https://github.com/caspermain23/MIMS
```

Deberías ver:
- ✓ 97 archivos en el repositorio
- ✓ Tu commit "Configuración inicial del proyecto MIMS..."
- ✓ Todas las carpetas (backend, frontend, etc.)

---

## 🔄 PRÓXIMAS VECES (Después del primer push)

Cuando hagas cambios y quieras subirlos:

```powershell
# 1. Ver cambios
git status

# 2. Agregar cambios
git add .

# 3. Crear commit
git commit -m "Descripción del cambio"

# 4. Subir a GitHub
git push
```

---

## 🎯 EJEMPLO DE PRÓXIMOS COMMITS

```powershell
# Si arreglas un bug
git commit -m "Arreglar error de autenticación en login"

# Si agregas una feature
git commit -m "Agregar funcionalidad de buscar medicamentos"

# Si haces cambios en el diseño
git commit -m "Mejorar UI del panel administrativo"
```

---

**¡Una vez hagas el push, tu código estará seguro en GitHub! 🎉**
