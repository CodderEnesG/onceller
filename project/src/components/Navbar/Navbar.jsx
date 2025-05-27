import React, { useState } from "react";
import s from "./Navbar.module.css";
import IconLogo from "../../assets/logo_icon.png";
import TextLogo from "../../assets/logo_text.png";
import LocationIcon from "../../assets/svg/location";
import MailIcon from "../../assets/svg/mail";
import SocialButton from "../SocialButton/SocialButton";
import SocialButton2 from "../SocialButton/SocialButton2";
import SocialButton3 from "../SocialButton/SocialButton3";
import { FaChevronDown } from "react-icons/fa6";
import ChevDown from "../../assets/svg/chev_down";
import Phone from "../../assets/svg/phone";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // "products", "catalog", null

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={s.main_container}>
      <div className={s.content}>
        {/* ÜST */}
        <div className={s.content_up}>
          <div className={s.location_container}>
            <LocationIcon style={{ marginRight: "1.5rem" }} />
            <h4 className={s.location_info}>
              Aykosan San. Sit. 6’lı A blok No:23,
              <br /> 34490 İkitelli Osb/Başakşehir/İstanbul, Turkey
            </h4>
          </div>
          <div className={s.mail_container}>
            <MailIcon style={{ marginRight: "1.5rem" }} />
            <h4 className={s.location_info}>info@oncellerhidrolik.com</h4>
          </div>
          <div className={s.social_container}>
            <SocialButton />
            <SocialButton2 />
            <SocialButton3 />
          </div>
        </div>

        {/* ALT */}
        <div className={s.content_down}>
          <div className={s.logo_container}>
            <img src={IconLogo} alt="icon" className={s.logo_icon} />
            <img src={TextLogo} alt="text" className={s.logo_text} />
          </div>

          <ul className={s.menu}>
            <li>Anasayfa</li>
            <li>Hakkımızda</li>

            <li className={s.dropdown} onClick={() => toggleMenu("products")}>
              Ürünlerimiz
              <ChevDown
                className={`${s.chevron} ${
                  openMenu === "products" ? s.open : ""
                }`}
              />
              {openMenu === "products" && (
                <ul className={s.dropdown_menu}>
                  <li>Hidrolik Silindirler</li>
                  <li>Pompa Sistemleri</li>
                  <li>Yedek Parçalar</li>
                </ul>
              )}
            </li>

            <li>Galeri</li>
            <li>Bize ulaş</li>
            <li className={s.dropdown_catalog} onClick={() => toggleMenu("catalog")}>
              Kataloglarımız
              <ChevDown
                className={`${s.chevron} ${
                  openMenu === "catalog" ? s.open : ""
                }`}
              />
              {openMenu === "catalog" && (
                <ul className={s.dropdown_menu}>
                  <li>2024 Kataloğu</li>
                  <li>Teknik Bilgiler</li>
                </ul>
              )}
            </li>
          </ul>

          <div className={s.phone_container}>
            <Phone/>
            <div  className={s.phone_info_container}>  <span className={s.phone_title}>Bizi ara!</span>
            <span className={s.phone_number}>0 (212) 549 50 57</span></div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
