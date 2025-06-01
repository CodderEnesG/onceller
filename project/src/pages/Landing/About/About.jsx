import React from "react";
import s from "./About.module.css";
import DataIcon from "../../../assets/svg/data";
import Logo from "../../../assets/logo_about.png";
import LogoIcon from "../../../assets/logo_icon_about.png"; // yolunu sen ayarlarsın
import AboutBg from "../../../assets/about_bg.jpg";
import Tools from "../../../assets/svg/tools";

const AboutSection = () => {
  const aboutText = `
Firmamız, 10 yılı aşkın süredir hidrolik, pnömatik ve makine zincirleri alanında kaliteli ve güvenilir hizmet sunmaktadır. Kurulduğumuz günden bu yana, müşterilerimize sadece ürün değil; aynı zamanda çözüm, destek ve güven sunmayı ilke edindik.

Sadakat ve doğruluk, iş anlayışımızın temelini oluşturur. Müşterilerimizle kurduğumuz uzun soluklu ilişkiler, karşılıklı güven ve memnuniyet esasına dayanır. Her projeye titizlikle yaklaşır; ihtiyaçlara özel, ekonomik ve sürdürülebilir çözümler sunarız.

Tecrübeli ekibimizle birlikte, teknolojiyi yakından takip ederek sektörün gelişen ihtiyaçlarına uygun hizmet üretmeye devam ediyoruz. Kalite standartlarımızdan ödün vermeden, her zaman daha iyisini hedefliyoruz.
`;
  const missionText =
    "Hidrolik, pnömatik ve zincir sistemlerinde; yüksek kaliteli, güvenilir ve verimli çözümler sunarak müşterilerimizin iş süreçlerini iyileştirmek, üretim kapasitelerini artırmak ve sektörde kalıcı değerler üretmek.";

  const visionText =
    "Miras edindiğimiz güvenilirlik, sadakat, devamlılık ve saygınlığı bir marka olarak sürdürmek.";
  return (
    <div id="about" className={s.about}>
      <div className={s.container}>
        <div className={s.upper_container}>
          <div className={s.upper_item}>
            <Tools style={{ marginRight: "2.5rem" }} />
            Hızlı ve Etkin Üretim
          </div>
          <div className={s.upper_item}>Kalite Odaklı Üretim </div>
          <div className={s.upper_box}>
            <div className={s.upper_box_overlay}></div>
            <div className={s.upper_box_content}>
              <h2 className={s.upper_box_title}>
                Üretiminizi Bir Üst Seviyeye Taşıyın!
              </h2>
              <p className={s.upper_box_subtitle}>
                Hidrolik, pnömatik ve zincirli transfer sistemlerimizle
                kesintisiz verim ve maksimum performans garantisi.
              </p>
              <h3 className={s.upper_box_cta}>İletişime geç!</h3>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "2rem",
          }}
        >
          <div className={s.left}>
            <img src={AboutBg} alt="about" className={s.image} />
            <div className={s.experienceBox}>
              <DataIcon className={s.icon} />
              <div>
                <h2>10 +</h2>
                <p>Yıl Tecrübe</p>
              </div>
            </div>
          </div>
          <div className={s.right}>
            <h3 className={s.titleRed}>Hakkımızda</h3>
            {aboutText.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <h4 className={s.titleRed}>Misyonumuz</h4>
            <p>{missionText}</p>
            <h4 className={s.titleRed}>Vizyonumuz</h4>
            <p>{visionText}</p>
            <div className={s.bottom}>
              <div>
                <img src={LogoIcon} alt="logo" className={s.logo} />

                <img src={Logo} alt="logo" className={s.logo} />
              </div>

              <button className={s.catalogButton}>
                Kataloglarımız <span className={s.chevron}>▼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
