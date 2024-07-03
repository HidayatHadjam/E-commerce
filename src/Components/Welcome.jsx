import React from 'react';
import './Welcome.css';
import men from '../Icons/welcome.png'

const Welcome = () => {
    return (
        <div className='WelcomeBox'>
        <div className="DescriptionWelcome">
        <h2>GrosMarket  votre Partenaire de Confiance</h2>
        <p>Notre plateforme offre une gamme complète de services pour optimiser vos opérations commerciales, le marketing digital, les paiements, le tout soutenu par notre engagement constant envers l'innovation. </p>
        <button className='Bouton-lire'>  Lire plus  </button>
        </div>
        <img src={men} className='Img-men'/> 
        </div>



    );
}

export default Welcome;