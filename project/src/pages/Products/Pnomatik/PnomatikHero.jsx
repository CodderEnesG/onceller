import React from 'react'
    import s from "./PnomatikHero.module.css"

const PnomatikHero = () => {
  return (
      <section className={s.hero_section}>
        <div className={s.overlay}></div>
        <div className={s.hero_content}>
          <h1 className={s.title}>Pnomatik</h1>
          <p className={s.breadcrumb}>Ürünlerimiz / <span>Pnomatik</span></p>
        </div>
      </section>  )
}

export default PnomatikHero