import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureCarousel from "./components/FeatureCarousel";
import NewsletterSignup from "./components/NewsletterSignup";
import Footer from "./components/Footer";
import SAM from "./pages/SAM";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";

import "./App.css"; // for transition styles

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const location = useLocation();

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <FeatureCarousel />
                    <NewsletterSignup />
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/training" element={<Training />} />
              <Route path="/sam" element={<SAM />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}

export default App;
