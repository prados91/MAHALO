import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget.jsx'
import navLogo from '/vite.svg'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navbar__container">
                <Link to="/">
                    <button className="navbar__logo" ><img src={navLogo} alt="Logo de la tienda" /></button>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li>
                            <NavLink to='/about-us' className={({ isActive }) => isActive ? " nav-link navbar__items--btnON" : " nav-link navbar__items--btn"}>Nosotros</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to='/category/boards' className={({ isActive }) => isActive ? "navbar__items--btnON" : "nav-link navbar__items--btn"}>Boards</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/category/indumentaria' className={({ isActive }) => isActive ? "navbar__items--btnON" : "nav-link navbar__items--btn"}>Indumentaria</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to='/gallery' className={({ isActive }) => isActive ? "nav-link navbar__items--btnON" : "nav-link navbar__items--btn"}>Galería</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "nav-link navbar__items--btnON" : "nav-link navbar__items--btn"}>Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to='/faqs' className={({ isActive }) => isActive ? "nav-link navbar__items--btnON" : "nav-link navbar__items--btn"}>FAQS</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar


