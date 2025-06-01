import React from 'react'
    import s from "./Gallery.module.css"

const GalleryHero = () => {
  return (
      <section className={s.hero_section}>
        <div className={s.overlay}></div>
        <div className={s.hero_content}>
          <h1 className={s.title}>Galeri</h1>
          <p className={s.breadcrumb}><a href="/">Ana sayfa</a> / <span>Galeri</span></p>
        </div>
      </section>  )
}

export default GalleryHero