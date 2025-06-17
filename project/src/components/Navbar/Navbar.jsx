import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Navbar.module.css";
import IconLogo from "../../assets/logo_big.png";
import LocationIcon from "../../assets/svg/location";
import MailIcon from "../../assets/svg/mail";
import SocialButton from "../SocialButton/SocialButton";
import SocialButton2 from "../SocialButton/SocialButton2";
import SocialButton3 from "../SocialButton/SocialButton3";
import ChevDown from "../../assets/svg/chev_down";
import Phone from "../../assets/svg/phone";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

import data from "../../pages/Products/Zincir/renold_products.json"; // doğru yolu ayarla

const slugify = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const getTopCategories = (items, limit = 9) => {
  const categoryCount = {};
  for (const item of items) {
    const cats = item?.categories?.slice(2); // senin yapına göre 3.kategoriden başlıyor
    if (cats && cats.length > 0) {
      const cat = cats[0];
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    }
  }

   return Object.keys(categoryCount).sort().slice(0, limit);
};

function Navbar({ isSidebarOpen, isScrolled, toggleSidebar }) {
  const [openMenu, setOpenMenu] = useState(null); 
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const topCategories = getTopCategories(data);

  const handleCategoryClick = (category) => {
    const trimmedCat = category.trim().replace(/\s*\/\s*$/, ""); 

    if (trimmedCat === "Yüksek Performanslı Zincir Diş…") {
      navigate("/products/zincir/sprockets");
    } else if (trimmedCat === "Yaprak Zincir") {
      navigate("/products/zincir/leaf-chain");
    } else {
      const slug = slugify(trimmedCat);
      navigate(`/products/zincir/kategoriler?path=${encodeURIComponent(slug)}`);
    }
    setOpenMenu(null);
  };

  return (
    <div className={s.main_container}>
      <div className={s.content}>
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
          <img src={IconLogo} alt="icon" className={s.logo_icon} />

          <ul className={s.menu}>
            <a href="/">Anasayfa</a>
            <Link to="about" smooth={true} duration={500} offset={-100}>
              Hakkımızda
            </Link>

            {/* Ürünlerimiz dropdown */}
<li className={s.dropdown}>

              Ürünlerimiz
              <ChevDown
                className={`${s.chevron} ${
                  openMenu === "products" ? s.open : ""
                }`}
              />
                <ul className={s.dropdown_menu}>
                  <a href="/products/hidrolik">Hidrolik</a>
                  <a href="/products/pnomatik">Pnömatik</a>

                  {/* Zincirler submenu */}
                  <li
                    className={s.dropdown_menu_item}
                    style={{ cursor: "default", position: "relative", listStyle: "none" }}
                  >
                    Zincirler
                    <ChevDown
                      className={s.chevron_submenu}
                      style={{ marginLeft: "0.3rem" }}
                    />
                    <ul className={s.dropdown_submenu}>
                      {topCategories.map((cat) => {
                        const cleanCat = cat.replace(/\s*\/\s*$/, "");
                        return (
                          <li
                            key={cleanCat}
                            className={s.dropdown_menu_item}
                            onClick={() => handleCategoryClick(cleanCat)}
                            style={{
                              cursor: "pointer",
                              listStyle: "none",
                              padding: "0.5rem 1rem",
                            }}
                          >
                            {cleanCat}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
            </li>

            <a href="/gallery">Galeri</a>
            <a href="/contact_us">Bize ulaş</a>

            {/* Kataloglarımız dropdown */}
            <li
              className={s.dropdown_catalog}
              onClick={() => toggleMenu("catalog")}
            >
              Kataloglarımız
              <ChevDown
                className={`${s.chevron} ${
                  openMenu === "catalog" ? s.open : ""
                }`}
              />
              {openMenu === "catalog" && (
                <ul style={{ left: "8px" }} className={s.dropdown_menu}>
                  <a>2024 Kataloğu</a>
                  <a>Teknik Bilgiler</a>
                </ul>
              )}
            </li>
          </ul>

          <div className={s.phone_container}>
            <Phone />
            <div className={s.phone_info_container}>
              <span className={s.phone_title}>Bizi ara!</span>
              <span className={s.phone_number}>0 (212) 549 50 57</span>
            </div>
          </div>

          {!isSidebarOpen && (
            <button
              style={{ color: isScrolled ? "var(--primary1)" : "#fff" }}
              className={s.sidebarToggle}
              onClick={toggleSidebar}
            >
              <FaBars size={20} />
            </button>
          )}
          {isSidebarOpen && (
            <button
              style={{ color: isScrolled ? "var(--primary1)" : "#fff" }}
              className={s.sidebarToggle}
              onClick={toggleSidebar}
            >
              <IoMdClose size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

 
export default Navbar;
