import React from 'react';
import './Panier.css';
import ProductImage from '../Icons/product_details.svg';
import { ReactComponent as CartIcon } from '../Icons/Quantite.svg';
import { ReactComponent as RemoveIcon } from '../Icons/Trash.svg';

const Panier = () => {
    const panierItems = [
        { id: 1, name: 'Vitamin C', size: '100ml', price: '2000DA' },
        { id: 2, name: 'Vitamin C', size: '100ml', price: '2000DA' },
        { id: 3, name: 'Vitamin C', size: '100ml', price: '2000DA' },
    ];

    return (
        <div className="panier-container">
            <h2 className="panier-title">Mon Panier</h2>
            {panierItems.map((item) => (
                <div key={item.id} className="panier-item">
                    <img src={ProductImage} alt="Product" />
                    <div className="panier-item-text">
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                    </div>
                    <div className="panier-item-icon">
                        <CartIcon />
                    </div>
                    <div className="panier-item-price">
                        {item.price}
                    </div>
                    <div className="panier-item-remove">
                        <RemoveIcon />
                    </div>
                </div>
            ))}
            <button className="commander-button">Commander</button>
        </div>
    );
}

export default Panier;
