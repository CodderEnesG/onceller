import React, { useState } from "react";
import s from "../Gallery.module.css";
import Img from "../../../assets/about_box.png";
import Img2 from "../../../assets/hidrolik.jpg";
import Icon from "../../../assets/svg/buyutec"
const images = [
  Img, Img2, Img, Img2, Img, Img2, Img
];

const GalleryContent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className={s.main}>
      <div className={s.gallery_grid}>
        <h2 className={s.section_title}>Galeri</h2>
        <h1 className={s.grid_title}>İş Ortamımızı ve Ürünlerimizi Yakından Keşfedin</h1>
        <span className={s.description}>
          Çalışma alanlarımızı, kullandığımız ileri teknoloji ekipmanlarımızı ve ürün çeşitlerimizi daha detaylı görmek için galerimizi ziyaret edebilirsiniz. 
          İşinizi kolaylaştıracak çözümlerimizi daha yakından tanıyın, bizimle çalışmanın ayrıcalığını hissedin.
        </span>
<div className={s.images}>
  {images.map((img, index) => (
    <div key={index} className={s.image_wrapper}>
      <img
        src={img}
        alt={`Galeri ${index + 1}`}
        className={s.image}
        onClick={() => openModal(index)}
      />
      {index === 0 && (
        <div className={s.zoom_icon} onClick={() => openModal(index)}>
          <Icon/>
        </div>
      )}
    </div>
  ))}
</div>


      </div>

      {selectedImage && (
        <div className={s.modal}>
          <span className={s.close} onClick={closeModal}>&times;</span>
          <button className={s.left} onClick={showPrev}>&#10094;</button>
          <img src={selectedImage} className={s.modal_image} alt="Büyük Görsel" />
          <button className={s.right} onClick={showNext}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default GalleryContent;
