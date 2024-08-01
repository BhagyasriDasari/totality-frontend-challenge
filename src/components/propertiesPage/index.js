import React, { Component } from 'react';
import PropertyCard from '../propertyCard';
import CartButton from '../cartButton';
import './index.css';
import propertiesData from '../../data/properties.json';
import withNavigate from '../withNavigate';

class PropertiesPage extends Component {
  state = {
    properties: [],
    visibleCount: 10
  };

  componentDidMount() {
    this.setState({ properties: propertiesData.properties });
  }

  loadMore = () => {
    this.setState(prevState => ({
      visibleCount: prevState.visibleCount + 10
    }));
  };

  handleLogout = () => {
    this.props.navigate('/');
  };

  render() {
    const { properties, visibleCount } = this.state;
    const visibleProperties = properties.slice(0, visibleCount);

    return (
      <div className="properties-page">
        <button onClick={this.handleLogout} className="logout-button">Logout</button>
        <CartButton /> {/* Add CartButton here */}
        <div className="properties-grid">
          {visibleProperties.map(property => (
            <PropertyCard
              key={property.id}
              title={property.title}
              description={property.description}
              price={property.price}
              image={property.image}
              location={property.location}
              bedrooms={property.bedrooms}
              amenities={property.amenities}
            />
          ))}
        </div>
        {visibleProperties.length < properties.length && (
          <button onClick={this.loadMore} className="load-more-button">Load More</button>
        )}
      </div>
    );
  }
}

export default withNavigate(PropertiesPage);
