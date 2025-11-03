//import Book from "./Book.tsx";
// import Client from "./Clients.tsx";
// import Step from "./Step.tsx";
import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import MobileApp from "./MobileApp.tsx";
import Footer from "../Footer.tsx";

interface TruckProps {
  clickState: boolean;
}

const Condominiums: React.FC<TruckProps> = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-truck type"
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Toyota Tacoma</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck1" src="con-6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>75,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ford Maverick XLT</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck7" src="con-5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>9.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>25,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>RAM 1500 Rebel</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck2" src="con-4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>7.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>65,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ford F-150 XLT</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck4" src="con-3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>46,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Nissan Frontier SV</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod  truck5" src="con-2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>8.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#rental"></a>
              <p>30,150$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Toyota Tundra Hybrid</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck6" src="con-1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>4ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>23,700$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>RAM 1500 Rebel</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck3" src="con-2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Furnished</p>
              <img src="manual2.png" alt="" />
              <p>1 Bedroom</p>
              <img src="area.png" alt="" />
              <p>2ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>59,300$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Hyundai Santa Cruz</h1>
            <div>
              <img src="rent.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod truck8" src="con-3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Unfurnished</p>
              <img src="auto.png" alt="" />
              <p>2 Bedrooms</p>
              <img src="area.png" alt="" />
              <p>7ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#rental"></a>
              <p>$28,150</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <Client />
      <Step /> */}
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Condominiums;
