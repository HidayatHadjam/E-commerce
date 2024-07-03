import React from 'react';
import './Footer.css';
import { ReactComponent as LogoIcon } from '../Icons/GrosMarket.svg';
import { ReactComponent as AnotherIcon } from '../Icons/Social.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="column">
                <h2>A PROPOS DE NOUS</h2>
                <a href="#about-us">Cité Rabia, Bab Ezzouar</a>
                <a href="mailto:grosmarket@gmail.com">grosmarket@gmail.com</a>
                <a href="tel:+213555608082">+213555608082</a>
            </div>
            <div className="column">
                <h2>INFORMATION</h2>
                <a href="#home">Accueil</a>
                <a href="#categories">Catégories</a>
                <a href="#services">Services</a>
            </div>
            <div className="column">
                <h2>NOS PAGES</h2>
                <a href="#account">Mon compte</a>
                <a href="#order-history">Historique des commandes</a>
                <a href="#order-tracking">Suivi de commande</a>
                <a href="#services">Services</a>
            </div>
            <div className="column">
                <LogoIcon className="footer-logo" />
                <AnotherIcon className="footer-icon" />
            </div>
        </div>
    );
}

export default Footer;
