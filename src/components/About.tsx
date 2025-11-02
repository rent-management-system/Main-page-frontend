import Header from "./Home/Header.tsx";
import Footer from "./Footer.tsx";
import Step from "./Home/Step.tsx";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about-topic-cont">
        <img src="about.png" alt="" />
        <img src="business.png" alt="" />
        <div>
          <h1>About Us</h1>
          <p>
            <b>Welcome to bate</b>, where inbatetion drives our passion for
            redefining the future of mobility. At <b>bate</b> , we blend{" "}
            <b>cutting-edge technology</b> to excellence to deliver a driving
            experience that transcends expectations.
          </p>
        </div>
      </div>
      <div className="abt-main">
        <img src="about.svg" alt="" />

        <div className="abt-descrp">
          <h1>You start the engine and your adventure begins</h1>
          <p>
            bate cars redefine the driving experience with advanced electric
            propulsion, ensuring eco-friendly performance. Their sleek,
            aerodynamic design not only enhances fuel efficiency but also
            captivates with a modern aesthetic. The future unfolds with bate's
            smart connectivity suite, seamlessly weaving navigation,
            entertainment, and interaction. Elevate your drive with bate, where
            inbatetion meets style for an unparalleled automotive journey.
          </p>
          <div className="unique-cont">
            <div className="icons-cont">
              <i className="fa-solid fa-car-side"></i>
              <div>
                <h4>20+</h4>
                <p>Property Types</p>
              </div>
            </div>
            <div className="icons-cont">
              <i className="fa-solid fa-warehouse"></i>
              <div>
                <h4>45+</h4>
                <p>Maintenance</p>
              </div>
            </div>
            <div className="icons-cont">
              <img src="repair.svg" alt="" />
              <div>
                <h4>95+</h4>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Step />
      <Footer />
    </div>
  );
};

export default About;
