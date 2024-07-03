import React from 'react';
import { Link } from 'react-router-dom'; 
import './Scroll.css'; 
import product1Image from '../Icons/product1.jpeg';
import product2Image from '../Icons/product2.jpeg';
import product7Image from '../Icons/product7.jpeg';
import product4Image from '../Icons/product4.jpeg';
import product8Image from '../Icons/product8.jpeg';
import product6Image from '../Icons/product6.jpeg';


const Scroll = () => {
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
            <h2>Nos offres</h2>
            <br /> 
        <div className="Offre-box">
          
            {products.map(product => (
                <div key={product.id} className="itemm">
                        <Link to="/details" className="immage">
                        <img src={product.image} alt={product.name} className="immage" />
                    </Link>
                    
                    <div className="detaills">
                        <h4 className="namee">{product.name}</h4>
                        <p className="pricee">{product.price} DA</p>
                      
                    </div>
                </div>
            ))}
         
        </div></div>
     
    );
}

export default Scroll;