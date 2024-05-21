@echo off

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    pause
    exit /b %errorlevel%
)

echo Dependencies installed successfully.
exit /b 0
