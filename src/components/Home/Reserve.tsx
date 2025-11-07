import { useState, useContext } from "react";
import { MyContext } from "../../context/MyContext.tsx";

const Reserve = () => {
  const [className, setClassName] = useState("");
  const [price, setPrice] = useState("");
  const { handleCancel, handleReserve, isButtonClicked } = useContext(MyContext) as any;
  const [category, setCategory] = useState("");
  const [car, setCar] = useState("");
  const [pickupLoc, setPickupLoc] = useState("");
  const [dropoffLoc, setDropoffLoc] = useState("");
  const [dateOfPickup, setDateOfPickup] = useState("");
  const [dateOfDropoff, setDateOfDropoff] = useState("");

  return (
    <div
      style={{ display: isButtonClicked ? "flex" : "none" }}
      className="lease-cont"
    >
      <div className="lease">
        <div className="lease-child1">
          <h1>COMPLETE RESERVATION</h1>
        </div>
        <div className="lease-child2">
          <div>
            <i className="fa-solid fa-circle-info"></i>
            <p className="upon_msg">
              Upon completing this reservation, you will receive:{" "}
            </p>
          </div>

          <p>
            A confirmation email with detailed information about your selected
            car model and next steps to finalize your purchase.
          </p>
        </div>
        <div className="lease-child3">
          <div className="res-info-cont">
            <p>Property Information</p>
            <div className="info-div1">
              <img className="category" src="property_type.png" alt="" />
              <div className="info-div2">
                <p>Property Category</p>
                <h6 className="catagory-p p-info">{category}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-location-dot"></i>
              <div className="info-div2">
                <p>Pick Up Location</p>
                <h6 className="pickL-p p-info">{pickupLoc}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-location-dot"></i>
              <div className="info-div2">
                <p>Drop Off Location</p>{" "}
                <h6 className="dropL-p p-info">{dropoffLoc}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-calendar-days"></i>
              <div className="info-div2">
                <p>Pick Up Date</p>
                <h6 className="pickD-p p-info">{dateOfPickup}</h6>
              </div>
            </div>

            <div className="info-div1">
              <i className="fa-solid fa-calendar-days"></i>
              <div className="info-div2">
                <p>Drop Off Date</p>
                <h6 className="dropD-p p-info">{dateOfDropoff}</h6>
              </div>
            </div>
          </div>
          <div className="res-car">
            <div>
              <p>
                <b>CAR:</b> {car}
              </p>
              <p>{price}</p>
            </div>

            <img src={`${className}.png`} alt="" />
          </div>
        </div>
        <div className="lease-child4">
          <button onClick={handleCancel} className="lease-btn btn btn-dark">
            Cancel
          </button>
          <a href="https://rental-user-management-frontend.vercel.app/login">
            <button
              onClick={handleReserve}
              className="lease-btn btn btn-primary"
            >
              <p>Reserve</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reserve;