import React, { useEffect, lazy, Suspense } from "react"; // Import lazy and Suspense
import { MyProvider } from "./context/MyContext.tsx";
import Header from "./components/Home/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";

import "./style.scss";

// Lazy load components
const Home = lazy(() => import("./components/Home.tsx"));
const Contact = lazy(() => import("./components/Contact.tsx"));
const PropertiesPage = lazy(() => import("./components/PropertiesPage.tsx"));
const Chatbot = lazy(() => import("./components/Chatbot"));

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
          <Header />
          <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/vehicles" element={<PropertiesPage />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            <Chatbot />
          </Suspense>
        </div>
      </MyProvider>
    </StyledEngineProvider>
  );
}

export default App;