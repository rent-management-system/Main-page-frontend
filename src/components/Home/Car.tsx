//import Book from "./Book.tsx";
import Client from "./Clients.tsx";
import Step from "./Step.tsx";
import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import MobileApp from "./MobileApp.tsx";
import Footer from "../Footer.tsx";

interface CarProps {
  clickState: boolean;
}

const Property: React.FC<CarProps> = (props) => {
  
  return (
    <div
      className="type-car type"
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Jaguar F-TYPE</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod1" src="prod1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>2.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>$74,150</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ferrari F430</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod6" src="prod6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>5.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>$141,845</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod3" src="prod3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>$74,990</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Hyundai Elite</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod4" src="prod4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>8ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>$30,690</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S75</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod5" src="prod5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>6.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>£55,880</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model X</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod2" src="prod2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>$79,990</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S75</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod7" src="prod7.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>135,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model P90</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod8" src="prod8.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>8.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>$79,990</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
      </div>
      
      <Client />
      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Property;
