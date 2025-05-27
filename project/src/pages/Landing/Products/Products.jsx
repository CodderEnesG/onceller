import React from "react";
import s from "./Products.module.css";
import ProductsImg from "../../../assets/products_landing.jpg";
import ArrowButton from "../../../assets/svg/chevron_button_white"

const Products = () => {
  return (
    <div className={s.main}>
      <div className={s.content}>
        <img className={s.image} src={ProductsImg} alt="" />
        <div className={s.right}>
          <div>
             <h1 className={s.title}>
              Önceller Hidrolik ile Hazır Kitlere Geçiş Yapın!
            </h1>
            <h4 className={s.subtitle}>
              Önceller Hidrolik ile her zaman bir adım öndesiniz.
            </h4>
          </div>
          <button className={s.button}>
            <span>Ürünleri Gör</span>
            <ArrowButton/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
