import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import Services from "./Services/Services";
import Products from "./Products/Products";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Brands from "./Brands/Brands";
import Sidebar from "../../components/Sidebar/Sidebar";

const Landing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Navbar
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <HeroSection />
      <About />
      <Brands />
      <Services />
      <Products />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Landing;
