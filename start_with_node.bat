set PORT=3001
:: set NODE_ENV=production

echo. & echo PORT: %PORT% 

start cmd /k "node server.js"
