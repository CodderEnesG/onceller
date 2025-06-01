import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import PnomatikHero from "./PnomatikHero";
import Pnomatik from "./Pnomatik";
import ContactUs from "../../Landing/ContactUs/ContactUs";

const PnomatikMain = () => {
  return (
    <>
      <Navbar />
      <PnomatikHero />  
      <Pnomatik />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default PnomatikMain;
