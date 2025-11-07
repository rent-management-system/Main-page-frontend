import { useContext } from "react";
import { useMyContext } from "../../context/MyContext.tsx";

const Reserve = () => {
  const { handleCancel, handleReserve, isButtonClicked, selectedProperty } = useMyContext();

  if (!selectedProperty) {
    return null; // Or render a loading state, or an error message
  }

  const { name, price, type, image } = selectedProperty;

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
            property and next steps to finalize your purchase.
          </p>
        </div>
        <div className="lease-child3">
          <div className="res-info-cont">
            <p>Property Information</p>
            <div className="info-div1">
              <img className="category" src="/property_type.png" alt="" />
              <div className="info-div2">
                <p>Property Category</p>
                <h6 className="catagory-p p-info">{type}</h6>
              </div>
            </div>
          </div>
          <div className="res-car">
            <div>
              <p>
                <b>PROPERTY:</b> {name}
              </p>
              <p>{price}</p>
            </div>

            <img src={image} alt="" />
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
