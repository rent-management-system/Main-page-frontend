// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FrontPage = () => {
  const { t } = useTranslation();
  return (
    <div className="front">
    
      <div className="front-child1">
        <h1>
          {t('your_ai_rent_management_system')}
          <span className="bate"> {t('bate_exclamation')}</span>
        </h1>
        <button className="order">
          <a href="https://rental-user-management-frontend-sigma.vercel.app/">{t('sign_up')}</a>{" "}
          
        </button>
        <button className="view">
          <a href="/#product">{t('view_properties')}</a>
        </button>
      </div>
      

       <div className="front-child2">
        <img className="car car1" src="hero-imag.png" alt="" />
        <img className="car car2" src="hero-imag2.png" alt="" />
      </div>
    </div>
  );
};

export default FrontPage;