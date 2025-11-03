import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import Footer from "../Footer.tsx";
import PropertyCard from "../PropertyCard.tsx"; // Import the new PropertyCard component
import { propertiesData } from "../../data/propertiesData.ts"; // Import the consolidated data
import type { Property } from "../../types/property.ts"; // Import the Property interface

interface VanProps {
  clickState: boolean;
}

const Houses: React.FC<VanProps> = (props) => {
  const houseProperties = propertiesData.filter(
    (property: Property) => property.type === "house"
  );

  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-van type" // This class name might need to be updated to reflect "house"
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
