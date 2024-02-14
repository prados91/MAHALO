import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import navLogo from '/MahaloLogo.svg';
import './NavBar.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
        setIsNavOpen(false);
    };

    const urlFace = "https://www.facebook.com/Mahaloaarg?view_public_for=103903104810380";
    const urlInst = "https://www.instagram.com/mahalo.mdp/";

    return (
        <nav className={`navbar navbar-expand-lg navbar-light fixed-top navbar__container ${isNavOpen ? 'show' : ''}`}>
            <div className="container-fluid ">
                <Link to="/" onClick={closeNav}>
                    <img src={navLogo} alt="Logo de la tienda" className='navbar_img' />
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/about-us' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"} onClick={closeNav}>Somos MAHALO</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/gallery' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"} onClick={closeNav}>Galería</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/faqs' className={({ isActive }) => isActive ? "nav-link nav_active" : "nav-link"} onClick={closeNav}>Preguntas frecuentes</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-social">
                        <Link to={urlFace} target="_blank" rel="noreferrer" onClick={closeNav}><i className="bi bi-facebook fs-4 navbar_icon "></i></Link>
                        <Link to={urlInst} target="_blank" rel="noreferrer" onClick={closeNav}><i className="bi bi-instagram fs-4 navbar_icon "></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
