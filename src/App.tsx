import Home from "./components/Home.tsx";
import Properties from "./components/Properties.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import { MyProvider } from "./context/MyContext.tsx";
import Header from "./components/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./style.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
    });
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <MyProvider>
        <div id="bd">
          <HeaderV2 />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vehicles" element={<Properties />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </MyProvider>
    </StyledEngineProvider>
  );
}

export default App;