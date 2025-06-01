import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import HidrolikHero from "./HidrolikHero";
import Hidrolik from "./Hidrolik";
import ContactUs from "../../Landing/ContactUs/ContactUs";

const Products = () => {
  return (
    <>
      <Navbar />
      <HidrolikHero />  
      <Hidrolik />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default Products;
