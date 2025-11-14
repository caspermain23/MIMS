# 🚀 GUÍA PRÁCTICA DE GIT - COMANDOS MÁS USADOS

## ✅ TU PROYECTO YA ESTÁ EN GITHUB

Ve a: **https://github.com/caspermain23/MIMS**

---

## 📋 COMANDOS MÁS USADOS (COPIAR Y PEGAR)

### **1. VER CAMBIOS QUE HICISTE**
```powershell
cd c:\xampp\htdocs\MIMS\mims
git status
```

**Resultado:** Te mostrará qué archivos cambiaron (en rojo = sin agregar, en verde = agregados)

---

### **2. AGREGAR CAMBIOS PARA COMMIT**
```powershell
git add .
```

**Explicación:** El `.` significa "agregar TODO". Si quieres agregar un archivo específico:
```powershell
git add frontend/src/App.js
```

---

### **3. CREAR UN COMMIT (GUARDAR CAMBIOS)**
```powershell
git commit -m "Descripción del cambio"
```

**Ejemplos:**
```powershell
git commit -m "Arreglar autenticación"
git commit -m "Agregar nuevo componente de búsqueda"
git commit -m "Actualizar estilos del dashboard"
```

---

### **4. SUBIR A GITHUB**
```powershell
git push
```

**Nota:** La primera vez debes usar `git push -u origin main`, pero después solo `git push`

---

### **5. VER HISTORIAL DE COMMITS**
```powershell
git log --oneline
```

**Resultado:** Lista todos tus commits:
```
d32f5aa Configuración inicial del proyecto MIMS
```

---

## 🔄 FLUJO COMPLETO (LO MÁS COMÚN)

Cuando termines de trabajar y quieras guardar tus cambios en GitHub:

```powershell
# 1. Ver qué cambió
git status

# 2. Agregar todo
git add .

# 3. Crear commit con mensaje
git commit -m "Descripción de lo que hiciste"

# 4. Subir a GitHub
git push
```

---

## 🎯 EJEMPLO PRÁCTICO

Imagina que editaste el archivo `frontend/src/App.js`:

```powershell
# 1. Ver cambios
cd c:\xampp\htdocs\MIMS\mims
git status

# Resultado:
# Modified:   frontend/src/App.js

# 2. Agregar cambios
git add .

# 3. Crear commit
git commit -m "Mejorar configuración de Axios en App.js"

# 4. Subir a GitHub
git push

# Listo! Los cambios están en GitHub
```

---

## ⚠️ ERRORES COMUNES Y SOLUCIONES

### **Error: "Please commit your changes before you merge"**
```powershell
# Significa que tienes cambios sin guardar
git add .
git commit -m "Cambios pendientes"
git push
```

### **Error: "Your branch is behind origin"**
```powershell
# Significa que alguien subió cambios y tú no los tienes
git pull
```

### **Error: "fatal: The current branch main has no upstream branch"**
```powershell
# Primera vez subiendo a main
git push -u origin main
```

---

## 📊 RESUMEN DE RAMAS

**¿Qué es una rama?** Es como una versión del proyecto. Normalmente trabajas en `main`.

```powershell
# Ver rama actual
git branch

# Cambiar de rama
git checkout nombre-de-rama

# Crear nueva rama
git checkout -b nombre-nueva-rama
```

---

## 🔍 OTROS COMANDOS ÚTILES

### Ver diferencias entre commits
```powershell
git diff
```

### Deshacer último commit (CUIDADO!)
```powershell
git reset --soft HEAD~1
```

### Ver quién cambió qué línea
```powershell
git blame archivo.js
```

### Obtener cambios del repositorio remoto
```powershell
git pull
```

### Ver rama remota
```powershell
git branch -a
```

---

## 💡 TIPS IMPORTANTES

1. **Haz commits pequeños y frecuentes** - No juntes 10 cambios en uno
2. **Escribe mensajes claros** - "git commit -m 'Arreglar bug'" es mejor que "git commit -m 'cambios'"
3. **Haz push regularmente** - No esperes al final del día
4. **Revisa git status antes de trabajar** - Para ver el estado actual

---

## 🎯 TU FLUJO DIARIO

**Mañana cuando abras el proyecto:**

```powershell
cd c:\xampp\htdocs\MIMS\mims

# Actualizar cambios del repositorio (si trabajas con otros)
git pull

# ... trabajas en tu código ...

# Cuando termines de trabajar
git status
git add .
git commit -m "Lo que hiciste"
git push
```

---

## ✨ ¡LISTO!

Tu proyecto está en GitHub y puedes:
- ✓ Ver el código en línea
- ✓ Compartir el link con otros
- ✓ Tener backup seguro
- ✓ Colaborar con otros desarrolladores

**URL del proyecto:** https://github.com/caspermain23/MIMS

---

**¿Necesitas ayuda con algún comando? Pregunta cuando quieras.**
