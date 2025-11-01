import FrontPage from "./Home/FrontPage.tsx";
import Products from "./Home/Products.tsx";
import Testimonial from "./Home/Testimonial.tsx";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <FrontPage />
      <Products />
      <Testimonial />
    </div>
  );
};

export default Home;
