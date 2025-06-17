import React from 'react'
import s from "./SocialButton.module.css"
 import { FaWhatsapp } from "react-icons/fa";
 const SocialButton = ({height , width}) => {
  return (
    <div style={{ width: width, height: height }} className={`${s.button} ${s.altGreen}`}>
<FaWhatsapp size={20} color='#fff'/>
    </div>
  )
}

export default SocialButton