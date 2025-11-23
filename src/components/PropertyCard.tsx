import React, { useState } from 'react';
import type { Property } from '../types/property';
import { useTranslation } from 'react-i18next';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Safe translation with fallbacks
  const safeTranslate = (key: string, fallback: string = '') => {
    const translation = t(key);
    return translation === key ? fallback : translation;
  };

  // Get display name with fallback
  const getDisplayName = () => {
    const translated = safeTranslate(property.name);
    if (translated) return translated;
    
    // Fallback to readable names based on the key
    const fallbacks: { [key: string]: string } = {
      'apartment_sunrise_name': 'Sunrise Apartment (2-Bed)',
      'apartment_city_studio_name': 'City View Studio',
      'apartment_green_flat_name': 'Green Valley Flat',
      'apartment_lakeside_name': 'Lakeside Apartment',
      'apartment_highrise_penthouse_name': 'Highrise Penthouse',
      'apartment_suburban_loft_name': 'Suburban Loft',
      'apartment_urban_core_name': 'Urban Core Apartment',
      'apartment_modern_studio_name': 'Modern Studio',
      'condominium_riverside_name': 'Riverside Condominium',
      'condominium_parkside_name': 'Parkside Condominium',
      'condominium_skyline_name': 'Skyline Condominium',
      'condominium_garden_view_name': 'Garden View Condominium',
      'condominium_luxury_suite_name': 'Luxury Suite Condominium',
      'condominium_urban_loft_name': 'Urban Loft Condominium',
      'condominium_modern_city_name': 'Modern City Condominium',
      'condominium_elegant_unit_name': 'Elegant Unit Condominium',
      'house_garden_family_name': 'Garden Family House',
      'house_suburban_family_name': 'Suburban Family House',
      'house_luxury_villa_name': 'Luxury Villa',
      'house_cozy_cottage_name': 'Cozy Cottage',
      'house_modern_townhouse_name': 'Modern Townhouse',
      'house_rural_farmhouse_name': 'Rural Farmhouse',
      'house_beachfront_property_name': 'Beachfront Property',
      'house_historic_home_name': 'Historic Home'
    };
    
    return fallbacks[property.name] || property.name.replace(/_/g, ' ');
  };

  // Get display bedrooms with fallback
  const getDisplayBedrooms = () => {
    const translated = safeTranslate(property.bedrooms);
    if (translated && translated !== property.bedrooms) return translated;
    
    const fallbacks: { [key: string]: string } = {
      'bedrooms_studio': 'Studio',
      'bedrooms_1': '1 Bedroom',
      'bedrooms_2': '2 Bedrooms',
      'bedrooms_3': '3 Bedrooms',
      'bedrooms_4': '4 Bedrooms',
      'bedrooms_5': '5 Bedrooms'
    };
    
    return fallbacks[property.bedrooms] || property.bedrooms.replace('bedrooms_', '').replace('_', ' ') + ' Bedrooms';
  };

  // Get display area with fallback
  const getDisplayArea = () => {
    const translated = safeTranslate(property.area);
    if (translated && translated !== property.area) return translated;
    
    return property.area.replace('area_', '').replace('_sqm', ' m²').replace('_', ' ');
  };

  // Get display furnishing with fallback
  const getDisplayFurnishing = () => {
    const key = `furnishing_${property.furnishing.toLowerCase()}`;
    const translated = safeTranslate(key);
    if (translated && translated !== key) return translated;
    
    return property.furnishing;
  };

  // Error handlers
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    
    // Create a nice placeholder using data URL
    const placeholderSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#f5f7fa"/>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5f7fa"/>
          <stop offset="100%" stop-color="#c3cfe2"/>
        </linearGradient>
        <rect width="400" height="300" fill="url(#grad)"/>
        <path d="M150 150 L150 230 L250 230 L250 150 Z" fill="#8193b2"/>
        <path d="M140 150 L200 100 L260 150 Z" fill="#5a6c8c"/>
        <rect x="185" y="180" width="30" height="50" fill="#4a5a7a"/>
        <text x="200" y="270" text-anchor="middle" font-family="Arial" font-size="16" fill="#666" font-weight="bold">
          Property Image
        </text>
      </svg>
    `;
    target.src = `data:image/svg+xml;base64,${btoa(placeholderSVG)}`;
  };

  const handleAreaIconError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const areaIconSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#666">
        <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="7" y="7" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1"/>
      </svg>
    `;
    target.src = `data:image/svg+xml;base64,${btoa(areaIconSVG)}`;
  };

  const handleModalImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    
    const placeholderSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
        <rect width="600" height="400" fill="#f5f7fa"/>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5f7fa"/>
          <stop offset="100%" stop-color="#c3cfe2"/>
        </linearGradient>
        <rect width="600" height="400" fill="url(#grad)"/>
        <path d="M200 150 L200 280 L400 280 L400 150 Z" fill="#8193b2"/>
        <path d="M180 150 L300 80 L420 150 Z" fill="#5a6c8c"/>
        <rect x="270" y="200" width="60" height="80" fill="#4a5a7a"/>
        <text x="300" y="350" text-anchor="middle" font-family="Arial" font-size="20" fill="#666" font-weight="bold">
          Property Image Not Available
        </text>
      </svg>
    `;
    target.src = `data:image/svg+xml;base64,${btoa(placeholderSVG)}`;
  };

  // Inline area icon to avoid missing public asset requests
  const areaIconSVGInline = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#666">
        <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="7" y="7" width="10" height="10" fill="none" stroke="currentColor" stroke-width="1"/>
      </svg>
  `;
  const areaIconDataUrl = `data:image/svg+xml;base64,${btoa(areaIconSVGInline)}`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="cars-cont" key={property.id}>
        {/* Property Header with Name and Availability */}
        <div className="car-info-cont1">
          <h1>{getDisplayName()}</h1>
          <div>
            <i className="fa-solid fa-tag"></i>
            <p>{safeTranslate('available', 'Available')}</p>
          </div>
        </div>
        
        {/* Property Image */}
        <div className="car-cont1">
          <img 
            className={`prod ${property.type}`} 
            src={property.image} 
            alt={getDisplayName()}
            onError={handleImageError}
            loading="lazy"
          />
          <button className="view-more-btn" onClick={openModal}>
            <i className="fa-solid fa-expand"></i>
            {safeTranslate('view_more', 'View More')}
          </button>
        </div>
        
        {/* Property Details */}
        <div className="car-info-cont2">
          <div className="car-info">
            {/* Bedrooms */}
            <div>
              <i className="fa-solid fa-bed"></i>
              <p>{getDisplayBedrooms()}</p>
            </div>
            
            {/* Furnishing */}
            <div>
              <i className="fa-solid fa-couch"></i>
              <p>{getDisplayFurnishing()}</p>
            </div>
            
            {/* Area */}
            <div>
              <img 
                src={areaIconDataUrl} 
                alt="Area" 
                onError={handleAreaIconError}
              />
              <p>{getDisplayArea()}</p>
            </div>
          </div>
          
          {/* Price and Reserve Button */}
          <div className="buy">
            <span className="price-tag">{property.price}</span>
            <a 
              href="https://rental-user-management-frontend.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {safeTranslate('reserve_now', 'Reserve Now')}
            </a>
          </div>
        </div>
      </div>

      {/* Full Photo Modal */}
      {isModalOpen && (
        <div className={`photo-modal ${isModalOpen ? 'active' : ''}`}>
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h2 className="modal-title">{getDisplayName()}</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            {/* Image */}
            <img 
              className="modal-image"
              src={property.image} 
              alt={getDisplayName()}
              onError={handleModalImageError}
            />

            {/* Footer */}
            <div className="modal-footer">
              <div className="modal-details">
                <div className="modal-detail">
                  <i className="fa-solid fa-bed"></i>
                  <span>{getDisplayBedrooms()}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-couch"></i>
                  <span>{getDisplayFurnishing()}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-ruler-combined"></i>
                  <span>{getDisplayArea()}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-tag"></i>
                  <span>{property.price}</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="modal-action-btn" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                  {safeTranslate('close', 'Close')}
                </button>
                <a 
                  href="https://rental-user-management-frontend.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fa-solid fa-calendar-check"></i>
                  {safeTranslate('reserve_now', 'Reserve Now')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;