import React from 'react';
import type { Property } from '../types/property';
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="cars-cont" key={property.id}>
      <div className="car-info-cont1">
        <h1>{t(property.name)}</h1> {/* Apply t() */}
        <div>
          <i className="fa-solid fa-tag"></i>
          <p>Available</p> {/* This could also be a translation key if needed */}
        </div>
      </div>
      <img className={`prod ${property.type}`} src={property.image} alt={t(property.name)} /> {/* Apply t() to alt text */}
      <div className="car-info-cont2">
        <div className="car-info">
          <i className="fa-solid fa-bed"></i>
          <p>{t(property.bedrooms)}</p> {/* Apply t() */}
          <i className="fa-solid fa-couch"></i>
          <p>{t(`furnishing_${property.furnishing.toLowerCase()}`)}</p> {/* Apply t() */}
          <img src="area.png" alt="Area" />
          <p>{t(property.area)}</p> {/* Apply t() */}
        </div>
        <div className="buy">
          <a href="#rental"></a>
          <p>{property.price}</p>
          <a href="https://rental-user-management-frontend.vercel.app/login"><p>Reserve</p></a> {/* This could also be a translation key if needed */}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
