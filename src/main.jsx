import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/assets/styles/css/global style/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
