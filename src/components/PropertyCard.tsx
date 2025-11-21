import React, { useState } from 'react';
import type { Property } from '../types/property';
import { useTranslation } from 'react-i18next';

interface PropertyCardProps {
  property: Property;
  allProperties?: Property[]; // For navigation between properties
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, allProperties = [] }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/default-property.jpg';
  };

  const openModal = () => {
    setIsModalOpen(true);
    setZoomLevel(1);
    // Find current property index for navigation
    if (allProperties.length > 0) {
      const index = allProperties.findIndex(p => p.id === property.id);
      setCurrentImageIndex(index);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
  };

  const nextImage = () => {
    if (allProperties.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % allProperties.length);
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (allProperties.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + allProperties.length) % allProperties.length);
      setZoomLevel(1);
    }
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const currentProperty = allProperties.length > 0 ? allProperties[currentImageIndex] : property;

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
        
        {/* Property Image with Hover Effects and View More Button */}
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
            <div>
              <i className="fa-solid fa-couch"></i>
              <p>{t(`furnishing_${property.furnishing.toLowerCase()}`)}</p>
            </div>
            
            {/* Area */}
            <div>
              <img src="area.png" alt="Area" onError={handleImageError} />
              <p>{t(property.area)}</p>
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
              {t('reserve_now')}
            </a>
          </div>
        </div>
      </div>

      {/* Full Photo Modal */}
      {isModalOpen && (
        <div className={`photo-modal ${isModalOpen ? 'active' : ''}`}>
          <div className="modal-content">
            {/* Navigation Arrows */}
            {allProperties.length > 1 && (
              <>
                <button className="modal-nav modal-prev" onClick={prevImage}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="modal-nav modal-next" onClick={nextImage}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </>
            )}

            {/* Header */}
            <div className="modal-header">
              <h2 className="modal-title">{t(currentProperty.name)}</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            {/* Image */}
            <img 
              className="modal-image"
              src={currentProperty.image} 
              alt={t(currentProperty.name)}
              style={{ transform: `scale(${zoomLevel})` }}
              onError={handleImageError}
            />

            {/* Zoom Controls */}
            <div className="zoom-controls">
              <button className="zoom-btn" onClick={zoomIn} title="Zoom In">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </button>
              <button className="zoom-btn" onClick={zoomOut} title="Zoom Out">
                <i className="fa-solid fa-magnifying-glass-minus"></i>
              </button>
              <button className="zoom-btn" onClick={resetZoom} title="Reset Zoom">
                <i className="fa-solid fa-rotate-left"></i>
              </button>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <div className="modal-details">
                <div className="modal-detail">
                  <i className="fa-solid fa-bed"></i>
                  <span>{t(currentProperty.bedrooms)}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-couch"></i>
                  <span>{t(`furnishing_${currentProperty.furnishing.toLowerCase()}`)}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-ruler-combined"></i>
                  <span>{t(currentProperty.area)}</span>
                </div>
                <div className="modal-detail">
                  <i className="fa-solid fa-tag"></i>
                  <span>{currentProperty.price}</span>
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="modal-action-btn" onClick={closeModal}>
                  <i className="fa-solid fa-xmark"></i>
                  Close
                </button>
                <a 
                  href="https://rental-user-management-frontend.vercel.app/login"
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