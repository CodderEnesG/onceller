import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactHero from "./ContactHero";
 import ContactContent from "./ContactContent";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactContent />  
      <Footer />
    </>
  );
};

export default Contact;
