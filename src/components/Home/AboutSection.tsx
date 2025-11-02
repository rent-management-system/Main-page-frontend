import Step from "./Step.tsx";

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="about-topic-cont">
        <div className="about-topic">
          <h1>About Us</h1>
          <img src="hr.svg" alt="" />
        </div>
      </div>
      <div className="abt-main">
        <img src="about.svg" alt="" />

        <div className="abt-descrp">
          <h1>Find your next home with ease and confidence</h1>
          <p>
            The Rental Management System transforms how landlords and tenants connect.
            Designed for Ethiopia’s rental market, it replaces costly broker services
            with a simple, secure, and affordable digital platform. Landlords can list
            properties through a pay-per-post model, while tenants enjoy a no-fee search
            experience with detailed listings, maps, and multilingual support in
            English, Amharic, and Afaan Oromo. Our platform ensures transparency,
            accessibility, and a smooth rental process for everyone — bringing
            convenience and trust to modern property management.
          </p>
          <div className="unique-cont">
            <div className="icons-cont">
              <i className="fa-solid fa-car-side"></i>
              <div>
                <h4>3+</h4>
                <p>Property Types</p>
              </div>
            </div>
            <div className="icons-cont">
              <i className="fa-solid fa-warehouse"></i>
              <div>
                 <h4>50+</h4>
                <p>Active Listings</p>
              </div>
            </div>
            <div className="icons-cont">
          
              <div>
                 <h4>100+</h4>
                <p>Happy Clients</p>
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
