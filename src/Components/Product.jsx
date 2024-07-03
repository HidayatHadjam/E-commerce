import React from 'react';
import './Product.css'; 
import { Link } from 'react-router-dom';

import product2Image from '../Icons/product2.jpeg';
import product1Image from '../Icons/product1.jpeg';
import product7Image from '../Icons/product7.jpeg';
import product4Image from '../Icons/product4.jpeg';
import product8Image from '../Icons/product8.jpeg';
import product6Image from '../Icons/product6.jpeg';


const Product = () => {
    const products = [
        { id: 1, name: 'television', price: 10955, image: product1Image, description: 'Description of Product1' },
        { id: 2, name: 'Chaussures', price: 15555, image: product2Image, description: 'Description of Product 2' },
        { id: 3, name: 'Casque', price: 20000, image: product7Image, description: 'Description of Product 3' },
        { id: 4, name: 'Petrin', price: 3000, image: product4Image, description: 'Description of Product 1' },
        { id: 5, name: 'Vêtements', price: 15555, image: product8Image, description: 'Description of Product 2' },
        { id: 6, name: 'Product 6', price: 20000, image: product6Image, description: 'Description of Product 3' },
    ];

    return (
      
        <div style={{ textAlign: 'center' }}>
             <br /> <br />
            <h2>Nos Produits</h2>


            
        <div className="product-list">
          
            {products.map(product => (
                <a href="/details"> <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-details">
                        <h4 className="product-name">{product.name}</h4>
                        <p className="product-price">{product.price} DA</p>
                      
                    </div>
                </div></a>
            ))}
        </div></div>
    );
}

export default Product;
