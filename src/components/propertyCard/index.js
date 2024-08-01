// src/components/propertyCard/index.js
import React, { Component } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './index.css';

class PropertyCard extends Component {
  static contextType = CartContext;

  handleBookNow = () => {
    const { addToCart } = this.context;
    const { title, description, price, image, location, bedrooms, amenities } = this.props;

    console.log('Book Now clicked');
    if (addToCart) {
      addToCart({
        title,
        description,
        price,
        image,
        location,
        bedrooms,
        amenities,
      });
    } else {
      console.error('addToCart is not available in context.');
    }
  };

  render() {
    const { title, description, price, image, location, bedrooms, amenities } = this.props;

    return (
      <div className="property-card">
        <img src={image} alt={title} className="property-image" />
        <div className="property-details">
          <h2 className="property-title">{title}</h2>
          <p className="property-description">{description}</p>
          <p className="property-location">Location: {location}</p>
          <p className="property-bedrooms">Bedrooms: {bedrooms}</p>
          <p className="property-price">Price: ${price}</p>
          <p className="property-amenities">Amenities: {amenities.join(', ')}</p>
          <button onClick={this.handleBookNow} className="book-now-button">Book Now</button>
        </div>
      </div>
    );
  }
}

export default PropertyCard;
