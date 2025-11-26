import Step from "./Step.tsx";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="about" id="about">
      <div className="about-topic-cont">
        <div className="about-topic">
          <h1>{t("about_us")}</h1>
          <img src="hr.svg" alt="" />
        </div>
      </div>
      <div className="abt-main">
        <img src="about.svg" alt="" />

        <div className="abt-descrp">
          <h1>{t("find_your_next_home")}</h1>
          <p>
            {t("about_paragraph")}
          </p>
          <div className="unique-cont">
            <div className="icons-cont">
              <i className="fa-solid fa-car-side"></i>
              <div>
                <h4>3+</h4>
                <p>{t("property_types")}</p>
              </div>
            </div>
            <div className="icons-cont">
              <i className="fa-solid fa-warehouse"></i>
              <div>
                 <h4>10+</h4>
                <p>{t("active_listings")}</p>
              </div>
            </div>
            <div className="icons-cont">
          
              <div>
                 <h4>7+</h4>
                <p>{t("happy_clients")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Step />
    </div>
  );
};

export default AboutSection;
