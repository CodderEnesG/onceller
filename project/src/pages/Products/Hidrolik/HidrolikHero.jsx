import React from 'react'
    import s from "./HidrolikHero.module.css"

const HidrolikHero = () => {
  return (
      <section className={s.hero_section}>
        <div className={s.overlay}></div>
        <div className={s.hero_content}>
          <h1 className={s.title}>Hidrolik</h1>
          <p className={s.breadcrumb}>Ürünlerimiz / <span>Hidrolik</span></p>
        </div>
      </section>  )
}

export default HidrolikHero