import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import Footer from "../Footer.tsx";
import PropertyCard from "../PropertyCard.tsx";
import { getRandomAllProperties, getTranslatedProperties } from "../../data/propertiesData.ts";
import type { Property } from "../../types/property.ts";
import { useTranslation } from "react-i18next";

interface AllPropertiesProps {
  clickState: boolean;
}

const AllProperties: React.FC<AllPropertiesProps> = (props) => {
  const { t, i18n } = useTranslation();
  const randomProperties = getRandomAllProperties();
  const translatedProperties = getTranslatedProperties(t, i18n.language);

  const propertiesToRender = randomProperties.map(p => translatedProperties.find(tp => tp.id === p.id)!);


  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-property type"
    >
      <div className="cars-main">
        {propertiesToRender.map((property: Property) => (
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

export default AllProperties;