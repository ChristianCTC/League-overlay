@echo off

REM Set the path to the sos-ws-relay-master directory
set "project_dir=%~dp0sos-ws-relay-master"

REM Change to the project directory
cd /d "%project_dir%"
if %errorlevel% neq 0 (
    echo Failed to navigate to the project directory: %project_dir%
    pause
    exit /b 1
)

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    pause
    exit /b %errorlevel%
)

echo Dependencies installed successfully.
pause
exit /b 0
