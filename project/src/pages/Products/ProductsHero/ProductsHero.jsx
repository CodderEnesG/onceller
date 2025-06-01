import React from 'react'
    import s from "../Products.module.css"

const ProductsHero = () => {
  return (
      <section className={s.hero_section}>
        <div className={s.overlay}></div>
        <div className={s.hero_content}>
          <h1 className={s.title}>Ürünlerimiz</h1>
          <p className={s.breadcrumb}><a href="/products">Ürünlerimiz</a> / <span>Ürünlerimiz</span></p>
        </div>
      </section>  )
}

export default ProductsHero