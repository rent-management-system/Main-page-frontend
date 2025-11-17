import React, { useEffect, lazy, Suspense, useState } from "react"; // Import lazy and Suspense
import { MyProvider } from "./context/MyContext.tsx";
import Header from "./components/Home/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import SkeletonSplash from "./components/SkeletonSplash";

import "./style.scss";

// Lazy load components
const Home = lazy(() => import("./components/Home.tsx"));
const Contact = lazy(() => import("./components/Contact.tsx"));
const PropertiesPage = lazy(() => import("./components/PropertiesPage.tsx"));
const Chatbot = lazy(() => import("./components/Chatbot"));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
    });
    // Add a 'loading' class to body while splash is visible to prevent style flashes
    document.body.classList.add("loading");
    const t = setTimeout(() => {
      setShowSplash(false);
      document.body.classList.remove("loading");
    }, 2000); // minimum 3s splash
    return () => clearTimeout(t);
  }, []);
  if (showSplash) {
    return <SkeletonSplash />;
  }

  return (
    <StyledEngineProvider injectFirst>
      <MyProvider>
        <div id="bd">
          <Suspense fallback={null}> {/* avoid re-showing big splash after initial load */}
            <Header />
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