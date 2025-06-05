import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GalleryHero from "./GalleryHero/";
 import GalleryContent from "./GalleryContent/";
import Sidebar from "../../components/Sidebar/Sidebar";

const Gallery = () => {
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
      <GalleryHero />
      <GalleryContent />  
      <Footer />
    </>
  );
};

export default Gallery;
