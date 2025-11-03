import ChooseUs from "./ChooseUs.tsx";
import Testimonial from "./Testimonial.tsx";
import BasicAccordion from "./Faq.tsx";

import Footer from "../Footer.tsx";

interface Property {
  id: string;
  type: 'apartment' | 'condominium' | 'house';
  name: string;
  image: string;
  price: string;
  furnishing: 'Furnished' | 'Unfurnished';
  bedrooms: string;
  area: string;
}

const allPropertiesData: Property[] = [
  // Apartments (originally SUVs)
  {
    id: "apartment-1",
    type: "apartment",
    name: "Mahindra Scorpio",
    image: "suv1.png",
    price: "61,500$",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "4.5ft / 100km",
  },
  {
    id: "apartment-2",
    type: "apartment",
    name: "Jeep Wrangler",
    image: "suv7.png",
    price: "13,440$",
    furnishing: "Unfurnished",
    bedrooms: "1 Bedroom",
    area: "5.5ft / 100km",
  },
  {
    id: "apartment-3",
    type: "apartment",
    name: "Mercedes-Benz",
    image: "suv6.png",
    price: "50,100$",
    furnishing: "Furnished",
    bedrooms: "2 Bedrooms",
    area: "7.5ft / 100km",
  },
  {
    id: "apartment-4",
    type: "apartment",
    name: "Mahindra Thar",
    image: "suv4.png",
    price: "15,466$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "1.5ft / 100km",
  },
  {
    id: "apartment-5",
    type: "apartment",
    name: "Honda Elevate",
    image: "suv5.png",
    price: "105,500$",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "6.5ft / 100km",
  },
  {
    id: "apartment-6",
    type: "apartment",
    name: "Tata Harrier",
    image: "suv2.png",
    price: "33,500$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "9.5ft / 100km",
  },
  {
    id: "apartment-7",
    type: "apartment",
    name: "Maruti Suzuki Grand",
    image: "suv3.png",
    price: "12,620$",
    furnishing: "Furnished",
    bedrooms: "2 Bedrooms",
    area: "3.5ft / 100km",
  },
  {
    id: "apartment-8",
    type: "apartment",
    name: "Mahindra Scorpio",
    image: "suv8.png",
    price: "13,090$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "2.5ft / 100km",
  },

  // Condominiums (originally Trucks)
  {
    id: "condominium-1",
    type: "condominium",
    name: "Toyota Tacoma",
    image: "truck1.png",
    price: "75,500$",
    furnishing: "Furnished",
    bedrooms: "2 Bedrooms",
    area: "4.5ft / 100km",
  },
  {
    id: "condominium-2",
    type: "condominium",
    name: "Ford Maverick XLT",
    image: "truck7.png",
    price: "25,500$",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "9.5ft / 100km",
  },
  {
    id: "condominium-3",
    type: "condominium",
    name: "RAM 1500 Rebel",
    image: "truck2.png",
    price: "65,500$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "7.5ft / 100km",
  },
  {
    id: "condominium-4",
    type: "condominium",
    name: "Ford F-150 XLT",
    image: "truck4.png",
    price: "46,500$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "3.5ft / 100km",
  },
  {
    id: "condominium-5",
    type: "condominium",
    name: "Nissan Frontier SV",
    image: "truck5.png",
    price: "30,150$",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "8.5ft / 100km",
  },
  {
    id: "condominium-6",
    type: "condominium",
    name: "Toyota Tundra Hybrid",
    image: "truck6.png",
    price: "23,700$",
    furnishing: "Furnished",
    bedrooms: "2 Bedrooms",
    area: "4ft / 100km",
  },
  {
    id: "condominium-7",
    type: "condominium",
    name: "RAM 1500 Rebel",
    image: "truck3.png",
    price: "59,300$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "2ft / 100km",
  },
  {
    id: "condominium-8",
    type: "condominium",
    name: "Hyundai Santa Cruz",
    image: "truck8.png",
    price: "$28,150",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "7ft / 100km",
  },

  // Houses (originally Vans)
  {
    id: "house-1",
    type: "house",
    name: "Mercedes-Benz",
    image: "van1.png",
    price: "$43,200$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "4.5ft / 100km",
  },
  {
    id: "house-2",
    type: "house",
    name: "Toyota Sienna",
    image: "van7.png",
    price: "46, 959$",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "5ft / 100km",
  },
  {
    id: "house-3",
    type: "house",
    name: "Honda Odyssey",
    image: "van6.png",
    price: "35,500$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "7.8ft / 100km",
  },
  {
    id: "house-4",
    type: "house",
    name: "Honda Odyssey",
    image: "van4.png",
    price: "40,901$",
    furnishing: "Furnished",
    bedrooms: "2 Bedrooms",
    area: "3.5ft / 100km",
  },
  {
    id: "house-5",
    type: "house",
    name: "Kia Carnival",
    image: "van5.png",
    price: "$33,200",
    furnishing: "Unfurnished",
    bedrooms: "1 Bedroom",
    area: "4.5ft / 100km",
  },
  {
    id: "house-6",
    type: "house",
    name: "Mercedes-Benz",
    image: "van2.png",
    price: "45,500$",
    furnishing: "Furnished",
    bedrooms: "1 Bedroom",
    area: "4.5ft / 100km",
  },
  {
    id: "house-7",
    type: "house",
    name: "Chrysler Pacifica",
    image: "van3.png",
    price: "55,660$",
    furnishing: "Furnished",
    bedrooms: "2 Bedrooms",
    area: "4.5ft / 100km",
  },
  {
    id: "house-8",
    type: "house",
    name: "Ford Transit",
    image: "van8.png",
    price: "$46,415",
    furnishing: "Unfurnished",
    bedrooms: "2 Bedrooms",
    area: "4.5ft / 100km",
  },
];

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
        {allPropertiesData.map((property) => (
          <div className="cars-cont" key={property.id}>
            <div className="car-info-cont1">
              <h1>{property.name}</h1>
              <div>
                <img src="rent.png" alt="" />
                <p>Free Supercharging</p> {/* This might need to be updated to a property-relevant feature */}
              </div>
            </div>
            <img className={`prod ${property.type}`} src={property.image} alt={property.name} />
            <div className="car-info-cont2">
              <div className="car-info">
                <i className="fa-solid fa-gas-pump"></i> {/* This icon might need to be changed */}
                <p>{property.furnishing}</p>
                <img src={property.bedrooms.includes("1") ? "manual2.png" : "auto.png"} alt="" /> {/* This logic might need to be changed */}
                <p>{property.bedrooms}</p>
                <img src="area.png" alt="" />
                <p>{property.area}</p>
              </div>
              <div className="buy">
                <a href="#rental"></a>
                <p>{property.price}</p>
                <p>Reserve</p>
              </div>
            </div>
          </div>
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