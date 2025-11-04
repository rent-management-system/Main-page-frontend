import FrontPage from "./Home/FrontPage.tsx";
import AboutSection from "./Home/AboutSection.tsx";
import Products from "./Home/Products.tsx";
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
      <AboutSection />
      <Products />
    </div>
  );
};

export default Home;
