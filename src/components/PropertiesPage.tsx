import Products from "./Home/Products.tsx";
import { useTranslation } from "react-i18next";

const PropertiesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="vehicles">
      <div className="vh-cont">
        <img className="vh_bg1" src="/back_n.png" alt="" />
        <div className="vh-topic-cont">
          <h1>{t('properties_title_main')}</h1>
          <p>{t('properties_subtitle_main')}</p>
          <img src="/hr.svg" alt="" />
        </div>
        <div className="vh-main-cont">
          <div>
            <div className="vh-car-cont">
              <img src="/vh.png" alt="" />
              <img src="/vh2.png" alt="" />
              <img src="/vh3.png" alt="" />
              <img src="/vh4.png" alt="" />
            </div>
            <div className="vh-descrp-cont">
              <h1>{t('bete_properties')}</h1>
              <p>{t('properties_page_description')}</p>
              <ul>
                <li>
                  <b>{t('diverse_property_types')}</b> {t('diverse_property_types_desc')}
                </li>
                <li>
                  <b>{t('advanced_search_filters')}</b> {t('advanced_search_filters_desc')}
                </li>
                <li>
                  <b>{t('detailed_property_listings')}</b> {t('detailed_property_listings_desc')}
                </li>
              </ul>
              <a href="https://rental-user-management-frontend.vercel.app/login" target="_blank" rel="noopener noreferrer">
  {t('reserve_now_button')}
</a>

            </div>
          </div>
          <img className="bg-vh-img" src="/bg_vh_new.jpg" alt="" />
          <img className="bg-vh-img2" src="/bg_vh.jpg" alt="" />
        </div>
      </div>
      <Products />
    </div>
  );
};

export default PropertiesPage;
