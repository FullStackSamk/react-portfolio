import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DataAnalyticsSection from "./components/DataAnalyticsSection";
import NewsletterSignup from "./components/NewsletterSignup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DataAnalyticsSection />
      <NewsletterSignup />
      <Footer />
      {/* Add additional components here */}
    </div>
  );
}

export default App;
