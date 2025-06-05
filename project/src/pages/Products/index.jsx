import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductsHero from "./ProductsHero/ProductsHero";
import ProductsContent from "./ProductsContent/ProductsContent";
import Sidebar from "../../components/Sidebar/Sidebar";

const Products = () => {
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
      <ProductsHero />
      <ProductsContent />
      <Footer />
    </>
  );
};

export default Products;
