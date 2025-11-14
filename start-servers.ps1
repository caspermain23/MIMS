# Script para iniciar Backend y Frontend simultáneamente

Write-Host "============================================" -ForegroundColor Green
Write-Host "INICIANDO MIMS - Backend y Frontend" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# Variables
$backendPath = "c:\xampp\htdocs\MIMS\mims\backend"
$frontendPath = "c:\xampp\htdocs\MIMS\mims\frontend"
$pythonExe = "C:/Users/Caspe/AppData/Local/Microsoft/WindowsApps/python3.13.exe"

# Iniciar Backend
Write-Host "Iniciando Backend Django..." -ForegroundColor Cyan
$backendProcess = Start-Process -FilePath $pythonExe -ArgumentList "manage.py", "runserver" -WorkingDirectory $backendPath -NoNewWindow -PassThru

Write-Host "Backend iniciado (PID: $($backendProcess.Id))" -ForegroundColor Green

# Esperar a que el backend esté listo
Write-Host "Esperando a que el backend esté listo..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# Verificar si npm_modules existe
if (-Not (Test-Path "$frontendPath\node_modules")) {
    Write-Host "Instalando dependencias del frontend..." -ForegroundColor Cyan
    $npmInstall = Start-Process -FilePath "npm" -ArgumentList "install" -WorkingDirectory $frontendPath -NoNewWindow -PassThru
    $npmInstall | Wait-Process
    Write-Host "Dependencias instaladas" -ForegroundColor Green
}

# Iniciar Frontend
Write-Host "Iniciando Frontend React..." -ForegroundColor Cyan
$frontendProcess = Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory $frontendPath -NoNewWindow -PassThru

Write-Host "Frontend iniciado (PID: $($frontendProcess.Id))" -ForegroundColor Green

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "URLs DE ACCESO:" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host "Backend:     http://localhost:8000" -ForegroundColor Yellow
Write-Host "Admin:       http://localhost:8000/admin" -ForegroundColor Yellow
Write-Host "Frontend:    http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "CREDENCIALES DE ADMIN:" -ForegroundColor Green
Write-Host "Email:      admin@mims.local" -ForegroundColor Yellow
Write-Host "Contraseña: Admin123456" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# Mantener los procesos abiertos
Write-Host "Presiona Ctrl+C para detener los servidores" -ForegroundColor Yellow
$backendProcess | Wait-Process
$frontendProcess | Wait-Process
