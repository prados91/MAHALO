import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import { FaWhatsapp } from "react-icons/fa"; // Importa el ícono de WhatsApp desde react-icons

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const phoneNumber = "5491124752671";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <div className="main-whatsapp">
            <a
                href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}
                target="_blank"
                rel="noReferrer"
                className="whatsapp-container"
            >
                <div className="whatsapp-link">
                    <FaWhatsapp size={40} color="#F8F9FA" />
                </div>
            </a>
        </div>
    </React.StrictMode>
);
//#499FB6