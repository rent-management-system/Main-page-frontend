import React from "react";
import { useTranslation } from "react-i18next";

const Step = () => {
  const { t } = useTranslation();

  return (
    <div className="step">
      <div className="step-main-cont1">
        <p>{t("how_it_works")}</p>
        <img src="hr.svg" alt="divider" />
        <h1>{t("three_quick_steps")}</h1>
      </div>

      <div className="step-main-cont2">
        {/* Step 1 */}
        <div className="step1-cont" aria-labelledby="step1-title">
          {/* descriptive icon replaces image */}
          <div className="icon-wrap" aria-hidden="true">
            <i className="fa-solid fa-right-to-bracket fa-2x" title="Login"></i>
          </div>
          <h6 id="step1-title">{t("login_and_search")}</h6>
          <p>
            {t("login_and_search_p")}
          </p>
        </div>

        {/* Step 2 */}
        <div className="step2-cont" aria-labelledby="step2-title">
          <div className="icon-wrap" aria-hidden="true">
            <i
              className="fa-solid fa-phone fa-2x"
              title="Contact Owner / Apply"
            ></i>
          </div>
          <h6 id="step2-title">{t("contact_owner_and_apply")}</h6>
          <p>
            {t("contact_owner_and_apply_p")}
          </p>
        </div>

        {/* Step 3 */}
        <div className="step3-cont" aria-labelledby="step3-title">
          <div className="icon-wrap" aria-hidden="true">
            <i
              className="fa-solid fa-house-chimney-crack fa-2x"
              title="Move In"
            ></i>
          </div>
          <h6 id="step3-title">{t("move_in_and_settle")}</h6>
          <p>
            {t("move_in_and_settle_p")}
          </p>
        </div>
      </div>

      <div>
       

        
      </div>
    </div>
  );
};

export default Step;
