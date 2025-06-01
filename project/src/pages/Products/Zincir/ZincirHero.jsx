import React from 'react'
    import s from "./ZincirHero.module.css"

const PnomatikHero = () => {
  return (
      <section className={s.hero_section}>
        <div className={s.overlay}></div>
        <div className={s.hero_content}>
          <h1 className={s.title}>Zincir</h1>
          <p className={s.breadcrumb}>Ürünlerimiz / <span>Zincir</span></p>
        </div>
      </section>  )
}

export default PnomatikHero