import React from "react";

const Step = () => {
  return (
    <div className="step">
      <div className="step-main-cont1">
        <p>How It Works</p>
        <img src="hr.svg" alt="divider" />
        <h1>Three Quick and Easy Steps</h1>
      </div>

      <div className="step-main-cont2">
        {/* Step 1 */}
        <div className="step1-cont" aria-labelledby="step1-title">
          {/* descriptive icon replaces image */}
          <div className="icon-wrap" aria-hidden="true">
            <i className="fa-solid fa-right-to-bracket fa-2x" title="Login"></i>
          </div>
          <h6 id="step1-title">Log in & Search</h6>
          <p>
            Create an account or sign in, then search homes using filters like
            location, price and amenities. Browse high-resolution photos and map
            views to quickly shortlist properties that match your needs.
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
          <h6 id="step2-title">Contact Owner & Apply</h6>
          <p>
            Message or call the owner directly from the listing. Submit
            applications, upload required documents, and track your application
            status — all within the platform for a secure and transparent process.
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
          <h6 id="step3-title">Move In & Settle</h6>
          <p>
            Finalize agreements, arrange move-in details, and settle into your
            new home. Use the platform to report issues, leave reviews, and
            manage your tenancy going forward.
          </p>
        </div>
      </div>

      <div>
       

        
      </div>
    </div>
  );
};

export default Step;
