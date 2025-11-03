import React from 'react';
import type { Property } from '../types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="cars-cont" key={property.id}>
      <div className="car-info-cont1">
        <h1>{property.name}</h1>
        <div>
          {/* Replaced car-centric icon/text with property-relevant ones */}
          <i className="fa-solid fa-tag"></i> {/* Generic tag icon for "Available" or "For Rent" */}
          <p>Available</p>
        </div>
      </div>
      <img className={`prod ${property.type}`} src={property.image} alt={property.name} />
      <div className="car-info-cont2">
        <div className="car-info">
          {/* Replaced gas pump icon with bed icon for bedrooms */}
          <i className="fa-solid fa-bed"></i>
          <p>{property.bedrooms}</p>
          {/* Removed manual/auto image as it's car-centric */}
          <i className="fa-solid fa-couch"></i> {/* Icon for furnishing */}
          <p>{property.furnishing}</p>
          <img src="area.png" alt="Area" /> {/* Area icon seems fine */}
          <p>{property.area}</p>
        </div>
        <div className="buy">
          <a href="#rental"></a>
          <p>{property.price}</p>
          <p>Reserve</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
