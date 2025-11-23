import React, { useState } from 'react';
import type { Property } from '../types/property';
import { useTranslation } from 'react-i18next';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <h1>{t(property.name)}</h1>
          <div>
            <i className="fa-solid fa-tag"></i>
            <p>{t('available')}</p>
          </div>
        </div>
        
        {/* Property Image */}
        <div className="car-cont1">
          <img 
            className={`prod ${property.type}`} 
            src={property.image} 
            alt={t(property.name)}
            onError={handleImageError}
            loading="lazy"
          />
          <button className="view-more-btn" onClick={openModal}>
            <i className="fa-solid fa-expand"></i>
            {t('view_more')}
          </button>
        </div>
        
        {/* Property Details */}
        <div className="car-info-cont2">
          <div className="car-info">
            {/* Bedrooms */}
            <div>
              <i className="fa-solid fa-bed"></i>
              <p>{t(property.bedrooms)}</p>
            </div>
            
            {/* Furnishing */}
            {property.furnishing && (
              <div>
                <i className="fa-solid fa-couch"></i>
                <p>{t(property.furnishing)}</p>
              </div>
            )}
            
            {/* Area */}
            <div>
              <img 
                src={areaIconDataUrl} 
                alt="Area" 
                onError={handleAreaIconError}
              />
              <p>{t(property.area)}</p>
            </div>
          </div>
          
          {/* Price and Reserve Button */}
          <div className="buy">
            <span className="price-tag">{property.price}</span>
            <a 
              href="https://rental-user-management-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('reserve_now')}
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
              <h2 className="modal-title">{t(property.name)}</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            {/* Image */}
            <img 
              className="modal-image"
              src={property.image} 
              alt={t(property.name)}
              onError={handleModalImageError}
            />

            {/* Footer */}
            <div className="modal-footer">
              <div className="modal-details">
                <div className="modal-detail">
                  <i className="fa-solid fa-bed"></i>
                  <span>{t(property.bedrooms)}</span>
                </div>
                {property.furnishing && (
                <div className="modal-detail">
                  <i className="fa-solid fa-couch"></i>
                  <span>{t(property.furnishing)}</span>
                </div>
                )}
                <div className="modal-detail">
                  <i className="fa-solid fa-ruler-combined"></i>
                  <span>{t(property.area)}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-tag"></i>
                  <span>{property.price}</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="modal-action-btn" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                  {t('close')}
                </button>
                <a 
                  href="https://rental-user-management-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <i className="fa-solid fa-calendar-check"></i>
                  {t('reserve_now')}
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