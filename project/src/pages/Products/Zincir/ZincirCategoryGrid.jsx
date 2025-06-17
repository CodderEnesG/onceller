import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./renold_products.json";
import s from "./ZincirCategoryGrid.module.css";
import SocialButton from "../../../components/SocialButton/SocialButton";
import SocialButton2 from "../../../components/SocialButton/SocialButton2";
import SocialButton3 from "../../../components/SocialButton/SocialButton3";

const slugify = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const categoryImageOverrides = {
  kaplinler: 2,
  "ozel-disli-zincirler": 1,
};

const buildGridTree = (items) => {
  const tree = {};
  const slugMap = {};

  for (const item of items) {
    const trimmed = item?.categories?.slice(2);
    let current = tree;
    let currentSlugMap = slugMap;

    trimmed?.forEach((level, index) => {
      const slug = slugify(level);

      if (!current[level]) current[level] = {};
      current = current[level];

      if (!currentSlugMap._map) currentSlugMap._map = {};
      if (!currentSlugMap._map[slug]) {
        currentSlugMap._map[slug] = {
          _name: level,
          _map: {},
        };
      }

      currentSlugMap = currentSlugMap._map[slug];

      if (index === trimmed.length - 1) {
        current.__products = current.__products || [];
        current.__products.push(item);
      }
    });
  }

  return { tree, slugMap };
};

const findAnyProductImage = (node) => {
  if (!node) return null;

  if (node.__products && node.__products.length > 0) {
    const productsWithImages = node.__products.filter(
      (p) => p.prodImage && p.prodImage.trim() !== ""
    );

    if (productsWithImages.length > 0) {
      const randomProduct =
        productsWithImages[
          Math.floor(Math.random() * productsWithImages.length)
        ];
      return randomProduct.prodImage;
    }
  }

  for (const key in node) {
    if (key === "__products") continue;
    const image = findAnyProductImage(node[key]);
    if (image) return image;
  }

  return null;
};

const GridView = ({ node, path = [], navigate }) => {
  return (
    <div className={s.grid}>
      {Object.entries(node).map(([key, value]) => {
        if (key === "__products") return null;

        const fullPath = [...path, key];
        const isProductLevel = !!value.__products;
        const slug = slugify(key);

        let imageSrc = null;

        if (categoryImageOverrides.hasOwnProperty(slug)) {
          const overrideIndex = categoryImageOverrides[slug];
          if (
            value.__products &&
            value.__products[overrideIndex] &&
            value.__products[overrideIndex].prodImage
          ) {
            imageSrc = value.__products[overrideIndex].prodImage;
          }
        }

        if (!imageSrc) {
          imageSrc = findAnyProductImage(value);
        }

        return (
          <div
            key={key}
            className={s.card}
            onClick={() => {
              if (isProductLevel) {
                const product = value.__products?.[0];
                if (product?.from) {
                  const fromUrl = new URL(product.from);
                  const segments = fromUrl.pathname.split("/").filter(Boolean);
                  const lastSegment = segments[segments.length - 1];
                  navigate(`/products/zincir/${lastSegment}`);
                }
              } else {
                const slugPath = fullPath.map(slugify).join("|");
                navigate(
                  `/products/zincir/kategoriler?path=${encodeURIComponent(
                    slugPath
                  )}`
                );
              }
            }}
          >
            {imageSrc && (
              <div className={s.imageWrapper}>
                <img src={imageSrc} alt={key} className={s.cardImage} />
                <div className={s.titleOverlay}>
                  <div className={s.cardTitle}>{key.replace("/", "")}</div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ZincirCategoryGrid = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const pathParam = params.get("path") || "";

  const brochureKeyMap = {
    "konveyor-zincir-urunleri": "conveyor_chain",
    "tahrik-zinciri": "sprockets",
    "yaprak-zincir": "lifting_chain",
    "yüksek-performanslı-zincir-dişlileri": "sprockets",
  };

  const broshureLinks = {
    sprockets: "https://tr.renold.com/media/2385601/sprockets-leaflet.pdf",
    lifting_chain: "https://tr.renold.com/media/165401/lifting-chain-ren3-eng-10-13.pdf",
    conveyor_chain: "https://tr.renold.com/media/165392/conveyor-ren2-eng-07-14.pdf",
  };

  const pathSlugs = pathParam ? pathParam.split("|") : [];
  const { tree, slugMap } = buildGridTree(data);

  let currentNode = tree;
  let currentSlugMap = slugMap;

  try {
    for (const slugSegment of pathSlugs) {
      if (!currentSlugMap || !currentSlugMap._map) {
        currentNode = null;
        break;
      }

      const originalNode = currentSlugMap._map[slugSegment];
      if (!originalNode) {
        currentNode = null;
        break;
      }

      const originalKey = originalNode._name;
      if (!originalKey || !currentNode[originalKey]) {
        currentNode = null;
        break;
      }

      currentNode = currentNode[originalKey];
      currentSlugMap = originalNode;
    }
  } catch (e) {
    currentNode = tree;
  }

  if (!currentNode) currentNode = tree;

  // Broşür linki slug'a göre alınır
  const currentSlug = pathSlugs[pathSlugs.length - 1];
  const brochureKey = brochureKeyMap[currentSlug];
  const brochureUrl = brochureKey ? broshureLinks[brochureKey] : null;

  return (
    <div className={s.container}>
      <section className={s.intro_section}>
        <div className={s.intro_left}>
          <h1 className={s.title}>
            {pathSlugs.length > 0
              ? currentSlugMap._name?.replace(/\//g, "").trim() || "Kategoriler"
              : "Tüm Zincir Kategorileri"}
          </h1>
          <hr className={s.intro_line} />
          <p className={s.intro_subtitle}>
            Pazar lideri enerji iletim teknolojisini keşfedin.
          </p>
          <p className={s.intro_text}>
            Renold plc, yirmi ülkede çok çeşitli hassas mühendislik ürünleri
            üreten ve ticari faaliyetlere sahip olan uluslararası bir
            mühendislik grubudur.
            <br />
            Pazar lideri ürünlerimiz; çimento üretiminden çikolata üretimine,
            metro istasyonlarından elektrik santrallerine, yürüyen
            merdivenlerden ocaklara kadar çok çeşitli uygulamalarda aslında, bir
            şeyin kaldırılması, taşınması, döndürülmesi veya taşınması gereken
            her yerde görülebilir.
          </p>
        </div>

        <div className={s.intro_right}>
          <h3 className={s.follow_title}>Bizi takibe al!</h3>
          <div className={s.social_container}>
            <SocialButton />
            <SocialButton2 />
            <SocialButton3 />
          </div>
          {brochureUrl && (
            <a href={brochureUrl} target="_blank" rel="noopener noreferrer">
              <button className={s.button_download}>Broşürü İndir</button>
            </a>
          )}    
              {brochureUrl && (
       <span className={s.or_text}>veya</span>
          )}            

          <button className={s.button_contact}>İletişime geç</button>
        </div>
      </section>

      <GridView node={currentNode} path={pathSlugs} navigate={navigate} />
    </div>
  );
};


export default ZincirCategoryGrid;
