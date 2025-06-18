import React, { useState , useEffect } from "react";
import s from "./Sidebar.module.css";
import { Link } from "react-scroll";
import SocialButton from "../SocialButton/SocialButton";
import SocialButton2 from "../SocialButton/SocialButton2";
import SocialButton3 from "../SocialButton/SocialButton3";
import Phone from "../../assets/svg/phone";
import ChevDown from "../../assets/svg/chev_down";
import LocationIcon from "../../assets/svg/location";
import MailIcon from "../../assets/svg/mail";
import { IoMdClose } from "react-icons/io";
import data from "../../pages/Products/Zincir/renold_products.json";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null); // "products", "catalog", null
  const navigate = useNavigate();
const [isChainSubmenuOpen, setIsChainSubmenuOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

    const location = useLocation();

useEffect(() => {
  setOpenMenu(null);        // tüm menüleri kapat
}, [location.pathname]);

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
    <div className={`${s.sidebar} ${isOpen ? s.open : s.closed}`}>
      <a onClick={toggleSidebar} href="/" className={s.menuItem}>
        Ana Sayfa
      </a>
      <Link
        smooth={true}
        duration={500}
        offset={-100}
        onClick={toggleSidebar}
        to="about"
        className={s.menuItem}
      >
        Hakkımızda
      </Link>
      <a onClick={toggleSidebar} href="/gallery" className={s.menuItem}>
        Galeri
      </a>

      <a onClick={toggleSidebar} href="/contact_us" className={s.menuItem}>
        Bize ulaş
      </a>
      <a className={s.dropdown} onClick={() => toggleMenu("catalog")}>
        Kataloglarımız
        <ChevDown
          className={`${s.chevron} ${openMenu === "catalog" ? s.open : ""}`}
        />
        {openMenu === "catalog" && (
          <ul className={s.dropdown_menu}>
            <a>2024 Kataloğu</a>
            <a>Teknik Bilgiler</a>
          </ul>
        )}
      </a>

      <a className={s.dropdown} onClick={() => toggleMenu("products")}>
        Ürünlerimiz
        <ChevDown
          className={`${s.chevron} ${openMenu === "products" ? s.open : ""}`}
        />
        <ul className={s.dropdown_menu}>
          <a href="/products/hidrolik">Hidrolik</a>
          <a href="/products/pnomatik">Pnömatik</a>

          {/* Zincirler submenu */}
          <li
            className={s.dropdown_menu_item}
            style={{
              cursor: "default",
              position: "relative",
              listStyle: "none",
            }}
          >
            <a style={{ padding: 0 }} href="/products/zincir">
              Zincirler
            </a>
         <ChevDown
  className={s.chevron_submenu}
  style={{ marginLeft: "0.3rem", cursor: "pointer" }}
  onClick={(e) => {
    e.stopPropagation();
    setIsChainSubmenuOpen((prev) => !prev);
  }}
/>

       {isChainSubmenuOpen && (
  <ul className={s.dropdown_submenu}>
    {topCategories.map((cat) => {
      const cleanCat = cat.replace(/\s*\/\s*$/, "");
      const handleClick = (e) => {
        e.stopPropagation();
        handleCategoryClick(cleanCat);
        toggleSidebar();
        setOpenMenu(null);
        setIsChainSubmenuOpen(false); // submenu kapansın
      };

      return (
        <li
          style={{ listStyle: "none" }}
          key={cleanCat}
          className={s.dropdown_menu_item}
        >
          <button
            onClick={handleClick}
            style={{
              cursor: "pointer",
              listStyle: "none",
              padding: "0.5rem 1rem",
              background: "none",
              border: "none",
              color: "white",
              textAlign: "left",
              width: "100%",
              fontSize: "13px",
            }}
          >
            {cleanCat}
          </button>
        </li>
      );
    })}
  </ul>
)}

          </li>
        </ul>
      </a>

      <div className={s.social_container}>
        <SocialButton width={"30px"} height={"30px"} />
        <SocialButton2 width={"30px"} height={"30px"} />
        <SocialButton3 width={"30px"} height={"30px"} />
      </div>

      <div className={s.phone_container}>
        <Phone />
        <span className={s.phone_title}>Bizi ara!</span>
        <span className={s.phone_number}>0 (212) 549 50 57</span>
      </div>
      <div className={s.location_container}>
        <LocationIcon style={{ marginBottom: "0.5rem" }} />
        <h4 className={s.location_info}>
          Aykosan San. Sit. 6’lı A blok No:23, 34490 İkitelli
          Osb/Başakşehir/İstanbul, Turkey
        </h4>
      </div>
      <div className={s.mail_container}>
        <MailIcon style={{ marginBottom: "0.5rem" }} />
        <h4 className={s.location_info}>info@oncellerhidrolik.com</h4>
      </div>

      {isOpen && (
        <button className={s.sidebarToggle} onClick={toggleSidebar}>
          <IoMdClose color="#fff" size={24} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
