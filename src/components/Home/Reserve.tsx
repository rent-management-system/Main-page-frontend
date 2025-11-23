import { useMyContext } from "../../context/MyContext.tsx";
import { useTranslation } from "react-i18next";

const Reserve = () => {
  const { handleCancel, handleReserve, isButtonClicked, selectedProperty } = useMyContext();
  const { t } = useTranslation();

  if (!selectedProperty) {
    return null; // Or render a loading state, or an error message
  }

  const { name, price, type, image } = selectedProperty;

  return (
    <div
      style={{ display: isButtonClicked ? "flex" : "none" }}
      className="lease-cont"
    >
      <div className="lease">
        <div className="lease-child1">
          <h1>{t('complete_reservation')}</h1>
        </div>
        <div className="lease-child2">
          <div>
            <i className="fa-solid fa-circle-info"></i>
            <p className="upon_msg">
              {t('upon_completing_reservation')}
            </p>
          </div>

          <p>
            {t('confirmation_email_message')}
          </p>
        </div>
        <div className="lease-child3">
          <div className="res-info-cont">
            <p>{t('property_information')}</p>
            <div className="info-div1">
              <img className="category" src="/property_type.png" alt="" />
              <div className="info-div2">
                <p>{t('property_category')}</p>
                <h6 className="catagory-p p-info">{type}</h6>
              </div>
            </div>
          </div>
          <div className="res-car">
            <div>
              <p>
                <b>{t('property_label')}</b> {name}
              </p>
              <p>{price}</p>
            </div>

            <img src={image} alt="" />
          </div>
        </div>
        <div className="lease-child4">
          <button onClick={handleCancel} className="lease-btn btn btn-dark">
            {t('cancel')}
          </button>
          <a href="https://rental-user-management-frontend.vercel.app/">
            <button
              onClick={handleReserve}
              className="lease-btn btn btn-primary"
            >
              <p>{t('reserve')}</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
