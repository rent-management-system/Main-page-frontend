import { useTranslation } from 'react-i18next';

const Testimonial = () => {
  const { t } = useTranslation();
  return (
    <div id="testimonials" className="testimonial">
      <div className="testim-child1">
        <h1>{t('testimonial_title')}</h1>
        <img src="hr.svg" className="hr" alt="Decorative line" />
        <p>
          {t('testimonial_description')}
        </p>
      </div>
      <div className="testim-child2">
        <div className="testim-cont">
          <div className="testim-descr-cont">
            <i
              className="fa-solid fa-quote-right"
              style={{ color: "#ffffff" }}
            ></i>

            <p>
              {t('testimonial_1_text')}
            </p>
          </div>
          <div className="photo-cont">
            <div>
              <img src="Henok_photo.png" className="photo" alt="Henok Tesfaye" />
            </div>

            <div>
              <p className="name">{t('testimonial_1_name')}</p>
              <p className="profess">{t('testimonial_1_profession')}</p>
              <img src="stars2.svg" alt="Rating stars" />
            </div>
          </div>
        </div>
        <div className="testim-cont">
          <div className="testim-descr-cont">
            <i
              className="fa-solid fa-quote-right"
              style={{ color: "#ffffff" }}
            ></i>
            <p>
              {t('testimonial_2_text')}
            </p>
          </div>
          <div className="photo-cont">
            <div>
              <img className="photo2" src="Damgamwi Teferi.png"alt="Dagmawi Teferi" />
            </div>

            <div>
              <p className="name">{t('testimonial_2_name')}</p>
              <p className="profess">{t('testimonial_2_profession')}</p>
              <img src="stars.svg" alt="Rating stars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

