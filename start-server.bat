@echo off

REM Get the directory of the current script
set script_dir=%~dp0

echo Checking dependencies...
call "%script_dir%install-dependencies.bat"
if %errorlevel% neq 0 (
    echo Failed to install dependencies. Exiting.
    pause
    exit /b %errorlevel%
)

echo Starting servers...
start "Servers" cmd /k "npm start"

pause
