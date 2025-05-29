import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductsHero from "./ProductsHero/ProductsHero";
import ProductsContent from "./ProductsContent/ProductsContent";

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <ProductsContent />
      <Footer />
    </>
  );
};

export default Products;
