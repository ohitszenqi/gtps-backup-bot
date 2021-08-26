@echo off
where node.exe >nul 2>&1 || echo Error: Node Js is not installed, to install please run nodejs.bat. && exit /B
cd.. && node server.js
pause