import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";
import Footer from "../Footer.tsx";
import PropertyCard from "../PropertyCard.tsx"; // Import the new PropertyCard component
import { propertiesData } from "../../data/propertiesData.ts"; // Import the consolidated data
import type { Property } from "../../types/property.ts"; // Import the Property interface

interface AllPropertiesProps {
  clickState: boolean;
}

const AllProperties: React.FC<AllPropertiesProps> = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-property type"
    >
      <div className="cars-main">
        {propertiesData.slice(0, 12).map((property: Property) => ( // Added .slice(0, 12) here
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