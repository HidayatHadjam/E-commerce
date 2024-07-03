import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div>
            <div className='SearchBox'>  
                <input id="textInput" placeholder="Entrer le mot clé" type="text" />
                <button 
                    className={`Bouton-Rechercher ${activeButton === 'rechercher' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('rechercher')}
                >
                    Rechercher
                </button>  
            </div>
            <div className='filtre'>
                <button 
                    className={`Bouton-filtre1 ${activeButton === 'filtre1' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('filtre1')}
                >
                    Catégorie
                </button>
                <button 
                    className={`Bouton-filtre2 ${activeButton === 'filtre2' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('filtre2')}
                >
                    Prix
                </button>
            </div>
        </div>
    );
}

export default Searchbar;



