

import { useTranslation } from 'react-i18next';

const ChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div
      className="choose-us-cont"
     // style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <img src="chus.png" alt="" />
      <div className="choose-main-cont">
        <div className="choose-cont1">
          <p>{t('why_choose_us_title')}</p>
          <h1>{t('why_choose_us_heading')}</h1>
          <p>
            {t('why_choose_us_description')}
          </p>
          <a href="#about">{t('learn_more')}</a>
        </div>

        <div className="choose-cont2">
          <div className="choose-list-cont1">
            <img src="choose1.svg" alt="" />
            <div>
              <h1>{t('transparent_pricing_title')}</h1>
              <p>
                {t('transparent_pricing_description')}
              </p>
            </div>
          </div>

          <div className="choose-list-cont2">
            <img src="choose3.png" alt="" />
            <div>
              <h1>{t('customer_focused_experience_title')}</h1>
              <p>
                {t('customer_focused_experience_description')}
              </p>
            </div>
          </div>

          <div className="choose-list-cont3">
            <img src="choose2.svg" alt="" />
            <div>
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
};

export default ChooseUs;
