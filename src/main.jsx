import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

if (window.location.pathname === '/qr-code') {
  window.location.replace('https://docs.google.com/forms/d/1nzAgcUvFrlL5R6tKMpDrK1rq6xUPaCZ_PY-0NVKCEZo/viewform')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
