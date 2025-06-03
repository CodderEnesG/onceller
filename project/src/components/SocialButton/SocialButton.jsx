import React from "react";
import s from "./SocialButton.module.css";
import Instagram from "../../assets/svg/instagram";
const SocialButton = ({width , height}) => {
  return (
    <div style={{ width: width, height: height }} className={s.button}>
      <Instagram />
    </div>
  );
};

export default SocialButton;
