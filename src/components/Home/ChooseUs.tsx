import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ChooseUs = memo(() => {
  const { t } = useTranslation();
  
  return (
    <div className="choose-us-cont">
      <img 
        src="chus.png" 
        alt="Why Choose Us Background" 
        loading="lazy"
        className="choose-us-bg-img"
      />
      <div className="choose-main-cont">
        <div className="choose-cont1">
          <p className="choose-subtitle">{t('why_choose_us_title')}</p>
          <h1 className="choose-title">{t('why_choose_us_heading')}</h1>
          <p className="choose-description">
            {t('why_choose_us_description')}
          </p>
          <a href="#about" className="choose-learn-more">{t('learn_more')}</a>
        </div>

        <div className="choose-cont2">
          <div className="choose-list-cont1 choose-feature-card">
            <img 
              src="choose1.svg" 
              alt="Transparent Pricing" 
              loading="lazy"
              width="60"
              height="60"
            />
            <div className="choose-feature-content">
              <h1>{t('transparent_pricing_title')}</h1>
              <p>
                {t('transparent_pricing_description')}
              </p>
            </div>
          </div>

          <div className="choose-list-cont2 choose-feature-card">
            <img 
              src="client3.svg" 
              alt="Customer Focused Experience" 
              loading="lazy"
              width="60"
              height="60"
            />
            <div className="choose-feature-content">
              <h1>{t('customer_focused_experience_title')}</h1>
              <p>
                {t('customer_focused_experience_description')}
              </p>
            </div>
          </div>

          <div className="choose-list-cont3 choose-feature-card">
            <img 
              src="client2.svg" 
              alt="Verified Listings" 
              loading="lazy"
              width="60"
              height="60"
            />
            <div className="choose-feature-content">
              <h1>{t('verified_listings_title')}</h1>
              <p>
                {t('verified_listings_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ChooseUs.displayName = 'ChooseUs';

export default ChooseUs;
