@echo off
REM Iniciar Backend Django
echo Iniciando Backend Django...
start "Django Backend" cmd /k "cd /d c:\xampp\htdocs\MIMS\mims\backend && C:/Users/Caspe/AppData/Local/Microsoft/WindowsApps/python3.13.exe manage.py runserver"

REM Esperar un poco para que el backend inicie
timeout /t 3

REM Instalar dependencias del frontend si no existen
if not exist "c:\xampp\htdocs\MIMS\mims\frontend\node_modules" (
    echo Instalando dependencias del frontend...
    cd /d c:\xampp\htdocs\MIMS\mims\frontend
    call npm install
)

REM Iniciar Frontend React
echo Iniciando Frontend React...
start "React Frontend" cmd /k "cd /d c:\xampp\htdocs\MIMS\mims\frontend && npm start"

echo.
echo ========================================
echo Backend: http://localhost:8000
echo Admin: http://localhost:8000/admin
echo Frontend: http://localhost:3000
echo ========================================
echo.
