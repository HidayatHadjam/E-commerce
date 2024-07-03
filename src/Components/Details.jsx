import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import { ReactComponent as HeartIcon } from '../Icons/Heart.svg';
import { ReactComponent as StarIcon } from '../Icons/Star.svg';
import ProductImage from '../Icons/product_details.svg';

const Details = () => {
    return (
        <div className="details">
            <div className="details-column">
                <p className="category">Catégorie / Suppléments / Vitamin C</p>
                <div className="image-container">
                    <img src={ProductImage} alt="Product" />
                </div>
            </div>
            <div className="details-column2">
                <h1>Vitamin C-100ML-Original</h1>
                <div className="stars">
                    <StarIcon className="star-icon" />
                    <span>| 100 ml</span>
                </div>
                <p className="price">2000 DA</p>
                <hr />
                <p className="description">
                    Vitamin C, also known as ascorbic acid, is a vital nutrient for various bodily functions, including the maintenance of healthy skin, blood vessels, bones, and cartilage. It also helps with wound healing and acts as an antioxidant.
                    <a href="#" className="read-more"> Read more...</a>
                </p>
                <hr />
                <div className="button-group">
                    <button className="fav-button">
                        <HeartIcon className="button-icon" /> Ajouter aux favoris
                    </button>
                      {/* Utilisez Link à la place de <a> pour naviguer */}
                      <Link to="/ajouter" className="cart-button">Ajouter au panier</Link>
                </div>
            </div>
        </div>
    );
}

export default Details;
