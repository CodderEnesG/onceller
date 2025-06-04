import React from "react";
import s from "./ContactUs.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Whatsap from "../../../assets/svg/whatsap";
import PhoneIcon from "../../../assets/svg/phone_white";
import MailIcon from "../../../assets/svg/mail";

const ContactUs = () => {
  return (
    <div className={s.main}>
      <div className={s.form_container}>
        <h2 className={s.form_title}>İletişime Geçin</h2>
        <form className={s.form}>
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            className={s.form_input}
          />
          <input type="email" placeholder="Email" className={s.form_input} />
          <input type="text" placeholder="Konu" className={s.form_input} />
          <textarea
            placeholder="Mesajınız"
            className={s.form_textarea}
          ></textarea>
          <button type="submit" className={s.form_button}>
            Mesaj Gönder
          </button>
        </form>
        <div className={s.contact_options_container}>
        <div className={s.contact_options}>
          <p className={s.form_note}>Veya direkt iletişime geçin</p>
          <div className={s.contact_options_right}>
            <div className={s.contact_icon}>
              <Whatsap style={{ width: "2.5rem", height: "2.5rem" }} />
            </div>
            <div className={s.cta}>
              <a href="tel:02125495057" className={s.callButton}>
                <PhoneIcon className={s.phoneIcon} />
                <span style={{ fontSize: "1rem" }}>
                  Bizi Ara! <br />0 (212) 549 50 57
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className={s.contact_options}>
          <div className={s.contact_mail}>
            <MailIcon />
            <span>bilal@oncellerhidrolik.com</span>
          </div>
          <div className={s.contact_mail}>
            <MailIcon />
            <span>abdurrahman@oncellerhidrolik.com</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
