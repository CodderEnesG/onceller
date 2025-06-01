import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import GalleryHero from "./GalleryHero/";
 import GalleryContent from "./GalleryContent/";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GalleryContent />  
      <Footer />
    </>
  );
};

export default Gallery;
