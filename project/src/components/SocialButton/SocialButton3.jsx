import React from 'react'
import s from "./SocialButton.module.css"
import Linkedin from "../../assets/svg/linkedin"
const SocialButton = ({height , width}) => {
  return (
    <div style={{ width: width, height: height }}  className={s.button}>
<Linkedin/>
    </div>
  )
}

export default SocialButton