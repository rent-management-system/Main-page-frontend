import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import Footer from "../Footer.tsx";
import PropertyCard from "../PropertyCard.tsx";
import { getTranslatedProperties } from "../../data/propertiesData.ts";
import type { Property } from "../../types/property.ts";
import { useTranslation } from "react-i18next";

interface TruckProps {
  clickState: boolean;
}

const Condominiums: React.FC<TruckProps> = (props) => {
  const { t, i18n } = useTranslation();
  const condominiumProperties = getTranslatedProperties(t, i18n.language).filter(
    (property: Property) => property.type === "condominium"
  );

  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-truck type"
    >
      <div className="cars-main">
        {condominiumProperties.map((property: Property) => (
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

export default Condominiums;
