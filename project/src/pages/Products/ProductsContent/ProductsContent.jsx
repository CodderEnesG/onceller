import React from "react";
import s from "../Products.module.css";
import Hidrolik from "../../../assets/hidrolik.jpg";
import Pnomatik from "../../../assets/pnomatik.jpg";
import Zincir from "../../../assets/zincir.png";

const ProductsContent = () => {
  return (
       <section className={s.main} >
        <div className={s.products_grid}>
        <a href="/products/hidrolik" className={s.product_card}>
          <div className={s.card_header}>Hidrolik</div>
          <img src={Hidrolik} alt="Hidrolik" className={s.card_image} />
        </a>

        <a href="/products/pnomatik"  className={s.product_card}>
          <div className={s.card_header}>Pnömatik</div>
          <img src={Pnomatik} alt="Pnömatik" className={s.card_image} />
        </a>

        <a href="/products/zincir"  className={s.product_card}>
          <div className={s.card_header}>Zincir</div>
          <img src={Zincir} alt="Zincir" className={s.card_image} />
        </a>
        </div>

           <p className={s.info_text}>
        Ürün gruplarına tıkladıktan sonra diğer ürün çeşitlerini görebilirsiniz
      </p>
      </section>

   
   );
};

export default ProductsContent;
