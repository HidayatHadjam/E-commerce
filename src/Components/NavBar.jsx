import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css';
import logoImage from '../Icons/GrosMarket.svg';
import cartIcon from '../Icons/Panier.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logoImage} alt="Logo" className="logo-img" />
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Accueil</a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link">Se connecter</a>
                </li>
                <li className="nav-item">
                    <a href="/cart" className="nav-link">
                         <Link to="/ajouter" className="nav-link">
                        <img src={cartIcon} alt="Panier" className="cart-icon" />
                    </Link>
                        
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;