//import Client from "./Clients.tsx";
// import Step from "./Step.tsx";
import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
// import MobileApp from "./MobileApp.tsx";
import Footer from "../Footer.tsx";

interface SuvProps {
  clickState: boolean;
}

const Apartments: React.FC<SuvProps> = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-suv type"
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mahindra Scorpio</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv1" src="bate-1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>61,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Jeep Wrangler</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv7 suv" src="Apa" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>5.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>13,440$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mercedes-Benz</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv6" src="con-1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>7.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>50,100$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mahindra Thar</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv4" src="bate-2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>1.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>15,466$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Honda Elevate</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv5" src="con-1.png" alt="" />
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
              <p>105,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tata Harrier</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv2" src="bate-3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>9.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>33,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Maruti Suzuki Grand</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv3" src="con-1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>12,620$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mahindra Scorpio</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv8" src="bate-4.png" alt="" />
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
              <p>13,090$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <Client /> */}
      {/* <Step /> */}
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      {/* <MobileApp /> */}
      <Footer />
    </div>
  );
};

export default Apartments;
