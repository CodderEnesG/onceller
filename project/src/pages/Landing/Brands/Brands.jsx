import React from 'react';
import s from "./Brands.module.css";
import BrandsImage from "../../../assets/brands.png";
import BrandsImageSm from "../../../assets/brands1.png";
import BrandsImageSm2 from "../../../assets/brands2.png";
import BrandsImageSm3 from "../../../assets/brands3.png";

const Brands = () => {
  return (
    <div className={s.main}>
      <div className={s.content}>
        <img src={BrandsImage} alt="Brands" className={s.desktopImage} />
        <div className={s.mobileImages}>
          <img src={BrandsImageSm} alt="Brands1" />
          <img src={BrandsImageSm2} alt="Brands2" />
          <img src={BrandsImageSm3} alt="Brands3" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
