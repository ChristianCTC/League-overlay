@echo off

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Downloading and installing Node.js...

    REM Set the URL to download Node.js (Windows installer)
    set "nodejs_url=https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi"

    REM Set the path to save the downloaded installer
    set "nodejs_installer=%temp%\nodejs_installer.msi"

    REM Download the Node.js installer
    powershell -Command "Invoke-WebRequest -Uri %nodejs_url% -OutFile %nodejs_installer%"

    REM Install Node.js silently
    msiexec /i %nodejs_installer% /quiet

    REM Check if installation was successful
    node -v >nul 2>&1
    if %errorlevel% neq 0 (
        echo Failed to install Node.js. Exiting.
        pause
        exit /b 1
    ) else (
        echo Node.js installed successfully.
    )
) else (
    echo Node.js is already installed.
)

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    pause
    exit /b %errorlevel%
)

echo Dependencies installed successfully.
exit /b 0
