import React from 'react';
import s from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={s.main}>
      <div className={s.overlay}>
        <div className={s.content}>
          <h1 className={s.title}>
            Hidrolik, Pnömatik ve Makine<br />
            Zincirlerinde <span style={{ color: "#fff" }}>Güvenilir Çözüm Ortağınız</span>
          </h1>
          <p className={s.subtitle}>
            Uzun yıllara dayanan tecrübemizle; sanayi, otomasyon ve makine sistemleriniz için güvenilir,
            kaliteli ve hızlı çözümler sunuyoruz. İhtiyacınıza özel mühendislik desteği ve ürün tedarikiyle
            her zaman yanınızdayız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
