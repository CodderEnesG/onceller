import React , {useState} from "react";
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

const Sidebar = ({ isOpen, toggleSidebar ,  }) => {
    const [openMenu, setOpenMenu] = useState(null); // "products", "catalog", null
  
    const toggleMenu = (menu) => {
      setOpenMenu(openMenu === menu ? null : menu);
    };
  return (
    <div className={`${s.sidebar} ${isOpen ? s.open : s.closed}`}>
      <a onClick={toggleSidebar} href="/" className={s.menuItem}>
        Ana Sayfa
      </a>
      <Link   smooth={true}
              duration={500}
              offset={-100}  onClick={toggleSidebar} to="about" className={s.menuItem}>
        Hakkımızda
      </Link>
      <a onClick={toggleSidebar} href="/gallery" className={s.menuItem}>
        Galeri
      </a>
  

      <a onClick={toggleSidebar} href="/contact_us" className={s.menuItem}>
        Bize ulaş
      </a>
           <a
              className={s.dropdown}
              onClick={() => toggleMenu("catalog")}
            >
              Kataloglarımız
              <ChevDown
                className={`${s.chevron} ${
                  openMenu === "catalog" ? s.open : ""
                }`}
              />
              {openMenu === "catalog" && (
                <ul  className={s.dropdown_menu}>
                  <a>2024 Kataloğu</a>
                  <a>Teknik Bilgiler</a>
                </ul>
              )}
            </a>

                <a className={s.dropdown} onClick={() => toggleMenu("products")}>
              Ürünlerimiz
              <ChevDown
                className={`${s.chevron} ${
                  openMenu === "products" ? s.open : ""
                }`}
              />
              {openMenu === "products" && (
                <ul className={s.dropdown_menu}>
                  <a href="/products/hidrolik">Hidrolik</a>
                  <a href="/products/pnomatik">Pnömatik</a>
                  <a href="/products/zincir">Zincirler</a>
                </ul>
              )}
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
              Aykosan San. Sit. 6’lı A blok No:23,
              34490 İkitelli Osb/Başakşehir/İstanbul, Turkey
            </h4>
          </div>
          <div className={s.mail_container}>
            <MailIcon style={{ marginBottom: "0.5rem" }} />
            <h4 className={s.location_info}>info@oncellerhidrolik.com</h4>
          </div>

                    {isOpen && (
                      <button
                         className={s.sidebarToggle}
                        onClick={toggleSidebar}
                      >
                        <IoMdClose color="#fff" size={24} />
                      </button>
                    )}
    </div>
  );
};

export default Sidebar;