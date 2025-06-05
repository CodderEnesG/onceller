import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import PnomatikHero from "./PnomatikHero";
import Pnomatik from "./Pnomatik";
import ContactUs from "../../Landing/ContactUs/ContactUs";
import Sidebar from "../../../components/Sidebar/Sidebar";

const PnomatikMain = () => {
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
      <PnomatikHero />  
      <Pnomatik />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default PnomatikMain;
