import React from "react";
import s from "./Footer.module.css";
import IconLogo from "../../assets/logo_icon.png";
import TextLogo from "../../assets/logo_text.png";
import SocialButton from "../SocialButton/SocialButton";
import SocialButton2 from "../SocialButton/SocialButton2";
import SocialButton3 from "../SocialButton/SocialButton3";
import ArrowButton from "../../assets/svg/chevron_button";
import LocationIcon from "../../assets/svg/location";
import MailIcon from "../../assets/svg/mail";

const Footer = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.footer_left}>
          <div className={s.logo_container}>
            <img src={IconLogo} alt="icon" className={s.logo_icon} />
            <img src={TextLogo} alt="text" className={s.logo_text} />
          </div>
          <div className={s.social_buttons}>
            <SocialButton />
            <SocialButton2 />
            <SocialButton3 />
          </div>
        </div>
        <div className={s.footer_column}>
          <div>
            <div className={s.column_title_container}>
              <h1 className={s.column_title}>Pratik bağlantılar</h1>
            </div>
            <div className={s.column_items}>
              <div className={s.column_item}>
                <ArrowButton />
                <span>Anasayfa</span>
              </div>
              <div className={s.column_item}>
                <ArrowButton />
                <span>Ürünlerimiz</span>
              </div>
              <div className={s.column_item}>
                <ArrowButton />
                <span>Galeri</span>
              </div>
            </div>
          </div>
          <div className={s.column_bottom_container}>
            <LocationIcon />
            <span>
              Aykosan San. Sit. 6’lı A blok No:23, <br />
              34490 İkitelli Osb/Başakşehir/İstanbul, Turkey
            </span>
          </div>
        </div>
                <div className={s.footer_column}>
          <div>
            <div className={s.column_title_container}>
              <h1 className={s.column_title}>Hizmetlerimiz    </h1>
            </div>
            <div className={s.column_items}>
              <div className={s.column_item}>
                <ArrowButton />
                <span>Hidrolik</span>
              </div>
              <div className={s.column_item}>
                <ArrowButton />
                <span>Pnömatik</span>
              </div>
              <div className={s.column_item}>
                <ArrowButton />
                <span>Zincir</span>
              </div>
            </div>
          </div>
          <div style={{minHeight:"3.5em"}} className={s.column_bottom_container}>
            <MailIcon />
            <span >
           info@oncellerhidrolik.com
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
