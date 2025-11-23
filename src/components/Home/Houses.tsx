import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import Footer from "../Footer.tsx";
import PropertyCard from "../PropertyCard.tsx";
import { getTranslatedProperties } from "../../data/propertiesData.ts";
import type { Property } from "../../types/property.ts";
import { useTranslation } from "react-i18next";

interface VanProps {
  clickState: boolean;
}

const Houses: React.FC<VanProps> = (props) => {
  const { t, i18n } = useTranslation();
  const houseProperties = getTranslatedProperties(t, i18n.language).filter(
    (property: Property) => property.type === "house"
  );

  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-van type"
    >
      <div className="cars-main">
        {houseProperties.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <Footer />
    </div>
  );
};

export default Houses;
