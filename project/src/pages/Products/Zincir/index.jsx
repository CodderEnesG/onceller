import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import ZincirkHero from "./ZincirHero";
import Zincir from "./Zincir";
import ContactUs from "../../Landing/ContactUs/ContactUs";

const PnomatikMain = () => {
  return (
    <>
      <Navbar />
      <ZincirkHero />  
      <Zincir />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default PnomatikMain;
