import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

if (window.location.pathname === '/qr-code') {
  window.location.replace('https://forsyth.instructure.com/courses/149132/grades')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
