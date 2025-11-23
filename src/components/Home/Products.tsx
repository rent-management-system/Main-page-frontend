import { useState, useContext } from "react";
import AllProperties from "./AllProperties.tsx";
import Apartments from "./Apartments.tsx";
import Houses from "./Houses.tsx";
import Condominiums from "./Condominiums.tsx";
import Reserve from "./Reserve.tsx";
import { MyContext } from "../../context/MyContext.tsx";
import { useTranslation } from 'react-i18next';
import { getRandomFeaturedProperties, getTranslatedProperties } from "../../data/propertiesData.ts";
import PropertyCard from "../PropertyCard.tsx";

interface ClickedTabsState {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
}

const Products = () => {
  const { t, i18n } = useTranslation();
  const {} = useContext(MyContext) as any;
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

  const featuredProperties = getTranslatedProperties(t, i18n.language);
  const randomFeaturedProperties = getRandomFeaturedProperties().map(p => featuredProperties.find(fp => fp.id === p.id)!);

  return (
    <div className="products" id="product">
      <img className="back2" src="back_n2.png" alt="" />
      <div className="prod-cont">
        <div className="cars-child1">
          <div className="cars1-topic">
            <h1>{t('featured_listings_title')}</h1>
            <img src="hr.svg" alt="" />
            <p>
              {t('featured_listings_description')}
            </p>
          </div>

          <div className="cars1-main">
            {randomFeaturedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        <div className="cars-child2">
          <div className="cars2-topic">
            <h1>{t('properties_title')}</h1>
            <img src="hr.svg" alt="" />
            <p>
              {t('properties_description')}
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
                <p>{t('all_properties')}</p>
              </div>
              <div
                onClick={() => {
                  handleClick("B");
                }}
                className={`tab-btns ${clickedTabs.B ? "tab-clicked" : ""}`}
              >
                <p>{t('apartments')}</p>
              </div>
              <div
                onClick={() => {
                  handleClick("C");
                }}
                className={`tab-btns ${clickedTabs.C ? "tab-clicked" : ""}`}
              >
                <p>{t('condominiums')}</p>
              </div>
              <div
                onClick={() => {
                  handleClick("D");
                }}
                className={`tab-btns ${clickedTabs.D ? "tab-clicked" : ""}`}
              >
                <p>{t('private_houses')}</p>
              </div>
            </div>
            {clickedTabs.A && <AllProperties clickState={true} />}
            {clickedTabs.B && <Apartments clickState={true} />}
            {clickedTabs.C && <Condominiums clickState={true} />}
            {clickedTabs.D && <Houses clickState={true} />}
            <Reserve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;