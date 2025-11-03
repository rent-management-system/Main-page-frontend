import { useState, useContext } from "react";
import Apartments from "./Apartments.tsx";
import Houses from "./Houses.tsx";
import Condominiums from "./Condominiums.tsx";
import Reserve from "./Reserve.tsx";
import { MyContext } from "../../context/MyContext.tsx";

interface ClickedItemsState {
  A: boolean;
  B: boolean;
  C: boolean;
}

interface ClickedTabsState {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
}

const Products = () => {
  const {} = useContext(MyContext) as any;
  const [clickedItems, setClickedItems] = useState<ClickedItemsState>({
    A: false,
    B: false,
    C: false,
  });
  const [clickedTabs, setClickedTabs] = useState<ClickedTabsState>({
    A: true,
    B: false,
    C: false,
    D: false,
  });

  const handleClick = (tab: keyof ClickedTabsState) => {
    setClickedTabs((prevValue) => {
      if (tab === "A") {
        return { ...prevValue, A: true, B: false, C: false, D: false };
      } else if (tab === "B") {
        return { ...prevValue, A: false, B: true, C: false, D: false };
      } else if (tab === "C") {
        return { ...prevValue, A: false, B: false, C: true, D: false };
      } else if (tab === "D") {
        return { ...prevValue, A: false, B: false, C: false, D: true };
      }
      return prevValue;
    });
  };

  const clickHandler = (item: keyof ClickedItemsState) => {
    setClickedItems((prevClickedItems) => ({
      ...prevClickedItems,
      [item]: !prevClickedItems[item],
    }));

    setTimeout(() => {
      setClickedItems((prevClickedItems) => ({
        ...prevClickedItems,
        [item]: false,
      }));
    }, 300);
  };

  return (
    <div className="products" id="product">
      <img className="back2" src="back_n2.png" alt="" />
      <div className="prod-cont">
        <div className="cars-child1">
          <div className="cars1-topic">
            <h1>FEATURED LISTINGS</h1>
            <img src="hr.svg" alt="" />
            <p>
              Handpicked properties — apartments, condominiums, and private houses selected for quality and value.
            </p>
          </div>

          <div className="cars1-main">
            <div className="cars1-main-child">
              <div className="car-cont1">
                <img className="f1-car" src="Pasted image.png" alt="" />
              </div>
              <div className="car-cont2">
                <h1>Sunrise Apartment (2-Bed)</h1>
                <hr />
                <div className="car-info-cont">
                  <p>2 Bed · 1 Bath · Balcony</p>
                  <p>$420 / month</p>
                </div>
                <ul>
                  <li>Location: Addis Ababa, Bole</li>
                  <li>Area: 120 m²</li>
                  <li>Available: Immediate</li>
                  <li>Listing ID: APT-SUN-402</li>
                </ul>
                <button
                  onClick={() => {
                    clickHandler("A");
                  }}
                  className={`feature-btn ${clickedItems.A ? "clicked" : ""}`}
                >
                  <a href="#rental">VIEW LISTING</a>
                </button>
              </div>
            </div>

            <div className="cars2-main-child">
              <div className="car-cont1">
                <img className="f2-car" src="Pasted image (3).png" alt="" />
              </div>
              <div className="car-cont2">
                <h1>Riverside Condominium — Unit 5B</h1>
                <hr />
                <div className="car-info-cont">
                  <p>3 Bed · 2 Bath · Secure Complex</p>
                  <p>$750 / month</p>
                </div>
                <ul>
                  <li>Location: Addis Ababa, Kazanchis</li>
                  <li>Area: 140 m²</li>
                  <li>Available: From July 2025</li>
                  <li>Listing ID: CON-RIV-5B</li>
                </ul>
                <button
                  onClick={() => {
                    clickHandler("B");
                  }}
                  className={`feature-btn ${clickedItems.B ? "clicked" : ""}`}
                >
                  <a href="#rental">VIEW LISTING</a>
                </button>
              </div>
            </div>

            <div className="cars3-main-child">
              <div className="car-cont1">
                <img className="f3-car" src="Pasted image (4).png" alt="" />
              </div>
              <div className="car-cont2">
                <h1>Garden Private House — Family Home</h1>
                <hr />
                <div className="car-info-cont">
                  <p>4 Bed · 3 Bath · Private Garden</p>
                  <p>$1,200 / month</p>
                </div>
                <ul>
                  <li>Location: Adama, Residential Area</li>
                  <li>Area: 250 m²</li>
                  <li>Available: Negotiable</li>
                  <li>Listing ID: HSE-GRD-01</li>
                </ul>
                <button
                  onClick={() => {
                    clickHandler("C");
                  }}
                  className={`feature-btn ${clickedItems.C ? "clicked" : ""}`}
                >
                  <a href="#rental">VIEW LISTING</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cars-child2">
          <div className="cars2-topic">
            <h1>PROPERTIES</h1>
            <img src="hr.svg" alt="" />
            <p>
              Browse by type: Apartments, Condominiums, and Private Houses — tailored for Ethiopia's rental market.
            </p>
          </div>
          <div className="cars2-main">
            <div className="tab-btns-cont">
              <div
                onClick={() => {
                  handleClick("A");
                }}
                className={`tab-btns ${clickedTabs.A ? "tab-clicked" : ""}`}
              >
                <p>All Properties</p>
              </div>
              <div
                onClick={() => {
                  handleClick("B");
                }}
                className={`tab-btns ${clickedTabs.B ? "tab-clicked" : ""}`}
              >
                <p>Apartments</p>
              </div>
              <div
                onClick={() => {
                  handleClick("C");
                }}
                className={`tab-btns ${clickedTabs.C ? "tab-clicked" : ""}`}
              >
                <p>Condominiums</p>
              </div>
              <div
                onClick={() => {
                  handleClick("D");
                }}
                className={`tab-btns ${clickedTabs.D ? "tab-clicked" : ""}`}
              >
                <p>Private Houses</p>
              </div>
            </div>
            <Apartments clickState={clickedTabs.A || clickedTabs.B} />
            <Condominiums clickState={clickedTabs.A || clickedTabs.C} />
            <Houses clickState={clickedTabs.A || clickedTabs.D} />
            <Reserve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
