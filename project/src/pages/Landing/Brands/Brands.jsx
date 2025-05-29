import React from 'react'
import s from "./Brands.module.css"
import BrandsImage from "../../../assets/brands.png"
const Brands = () => {
  return (
    <div className={s.main}>
        <div className={s.content}>
            <img src={BrandsImage} alt="BrandsImage" />
        </div>

    </div>
  )
}

export default Brands