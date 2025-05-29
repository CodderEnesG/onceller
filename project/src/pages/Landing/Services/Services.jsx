import React from "react";
import s from "./Services.module.css";
import Hidrolik from "../../../assets/hidrolik.jpg"
import Pnomatik from "../../../assets/pnomatik.jpg"
import Zincir from "../../../assets/zincir.png"
import PhoneIcon from "../../../assets/svg/phone_white"
import ArrowButton from "../../../assets/svg/chevron_button"
 const services_items = [
  {
    title: "Hidrolik",
    image: Hidrolik, 
    link: "/hidrolik",
  },
  {
    title: "Pnömatik",
    image: Pnomatik,  
    link: "/pnomatik",
  },
  {
    title: "Zincir",
    image: Zincir,  
    link: "/zincir",
  },
];

const Services = () => {
  return (
    <section className={s.services}>
      <div className={s.topText}>
        <h4 className={s.subTitle}>Faaliyet Alanlarımız</h4>
        <h2 className={s.mainTitle}>Sunduğumuz Hizmetler</h2>
        <p className={s.description}>
          Pnömatik, hidrolik ve zincir sistemlerinde tasarımdan montajına, bakımından yedek parça tedariğine kadar eksiksiz çözümler sunuyoruz.
        </p>
      </div>

      <div className={s.cards}>
        {services_items.map((service, index) => (
          <div className={s.card} key={index}>
            <img src={service.image} alt={service.title} className={s.image} />
            <h3 className={s.cardTitle}>{service.title}</h3>
            <a href={service.link} className={s.moreLink}>
              Daha fazla <span className={s.icon}><ArrowButton/></span>
            </a>
          </div>
        ))}
      </div>

      <div className={s.cta}>
        <h3 className={s.endustry_text}>Endüstriyel Çözümler İçin Arayın!</h3>
        <a href="tel:02125495057" className={s.callButton}>
          <span className={s.phoneIcon}><PhoneIcon/></span>
          <span style={{fontSize:"1rem"}}>Bizi Ara! <br />0 (212) 549 50 57</span> 
        </a>
      </div>
    </section>
  );
};

export default Services;
