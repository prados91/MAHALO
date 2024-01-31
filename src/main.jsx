import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const phoneNumber = "5491124752671"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <div className="main-whatsapp">
            <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target="_blank"><img
                src="./src/assets/logo-whatsapp.png" alt="Logo de WhatsApp" /></a>
        </div>
    </React.StrictMode>,
)
