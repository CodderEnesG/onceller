import React from "react";
import s from "./Gallery.module.css";

import Gal1 from "../../../assets/landing_gal1.png";
import Gal2 from "../../../assets/landing_gal2.png";
import Gal3 from "../../../assets/landing_gal3.png";

const Gallery = () => {
  return (
    <section className={s.gallery_section}>
      <div className={s.gallery_header}>
        <div className={s.gallery_text}>
          <p className={s.gallery_label}>Galeri</p>
          <h2 className={s.gallery_title}>
            Çalışma Ortamımızı ve Ürünlerimizi <br /> Yakından Keşfedin
          </h2>
          <p className={s.gallery_description}>
            Çalışma alanlarımızı, kullandığımız ileri teknoloji ekipmanlarımızı ve ürün çeşitlerimizi daha detaylı görmek için galerimizi ziyaret edebilirsiniz. İşinizi kolaylaştıracak çözümlerimizi daha yakından tanıyın, bizimle çalışmanın ayrıcalığını hissedin.
          </p>
        </div>
        <button className={s.gallery_button}>Tümünü Gör</button>
      </div>

      <div className={s.gallery_images}>
        <img src={Gal1} alt="Galeri 1" />
        <img src={Gal2} alt="Galeri 2" />
        <img src={Gal3} alt="Galeri 3" />
      </div>
    </section>
  );
};

export default Gallery;
