import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget.jsx'
import navLogo from '/logoMahalo.png'
import './NavBar.css'

const Navbar = () => {

    const urlFace = "https://www.facebook.com/Mahaloaarg?view_public_for=103903104810380"
    const urlInst = "https://www.instagram.com/mahalo.mdp/"


    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_custom">
            <div className="container-fluid">
                <Link to="/">
                    <button className="navbar-brand fw-bold fs-4 navbar_icon" ><img src={navLogo} alt="Logo de la tienda"  className='navbar_img'/></button>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/about-us' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"}>Somos MAHALO</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/gallery' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"}>Galería</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/faqs' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"}>Preguntas frecuentes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"}>Contactanos</NavLink>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nuestra tienda
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to='/category/balanceboard' className={({ isActive }) => isActive ? "dropdown-item nav_active" : "dropdown-item"}>BalanceBoards</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/category/longboard' className={({ isActive }) => isActive ? "dropdown-item nav_active" : "dropdown-item"}>LongBoards</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/category/clothes' className={({ isActive }) => isActive ? "dropdown-item nav_active" : "dropdown-item"}>Indumentaria</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <CartWidget />
                        <Link to={urlFace} target="_blank" rel="noreferrer"><i className="bi bi-facebook fs-4 navbar_icon "></i></Link>
                        <Link to={urlInst} target="_blank" rel="noreferrer"><i className="bi bi-instagram fs-4 navbar_icon "></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




