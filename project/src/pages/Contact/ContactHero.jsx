import React from 'react'
    import s from "./Contact.module.css"

const ContactHero = () => {
  return (
      <section className={s.hero_section}>
        <div className={s.overlay}></div>
        <div className={s.hero_content}>
          <h1 className={s.title}>Bize Ulaş</h1>
          <p className={s.breadcrumb}><a href="/">Ana sayfa</a> / <span>Bize Ulaş</span></p>
        </div>
      </section>  )
}

export default ContactHero