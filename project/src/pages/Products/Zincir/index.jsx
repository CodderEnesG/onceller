import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import ZincirkHero from "./ZincirHero";
import Zincir from "./Zincir";
import ContactUs from "../../Landing/ContactUs/ContactUs";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ZincirCategoryGrid from "./ZincirCategoryGrid";
import { Outlet } from "react-router-dom";

const ZincirMain = () => {
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
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />{" "}
      <ZincirkHero />
      <Outlet />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ZincirMain;
