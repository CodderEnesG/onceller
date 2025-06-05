import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import HidrolikHero from "./HidrolikHero";
import Hidrolik from "./Hidrolik";
import ContactUs from "../../Landing/ContactUs/ContactUs";
import Sidebar from "../../../components/Sidebar/Sidebar";

const HidrolikMain = () => {
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
      <HidrolikHero />  
      <Hidrolik />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default HidrolikMain;
