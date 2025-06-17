import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import data from "./renold_products.json";
import s from "./Zincir.module.css";
import ChevDown from "../../../assets/svg/chev_down_grey";

const extractSlug = (url) => {
  if (!url || typeof url !== "string") return "";
  const cleanUrl = url.split("#")[0];
  const parts = cleanUrl.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
};

const buildCategoryTree = (items) => {
  const tree = {};
  for (const item of items) {
    const trimmed = item.categories?.slice(2);
    let current = tree;
    for (const level of trimmed) {
      current[level] = current[level] || {};
      current = current[level];
    }
    current.__products = current.__products || [];
    current.__products.push(item);
  }
  return tree;
};

// Seçili ürünün kategori yolunu bulur (array of kategori isimleri)
const findCategoryPathForSlug = (tree, slug) => {
  let path = [];

  const helper = (node, currentPath) => {
    // Ürünleri kontrol et
    if (node.__products) {
      for (const prod of node.__products) {
        if (extractSlug(prod.from) === slug) {
          path = [...currentPath];
          return true;
        }
      }
    }
    // Alt kategorilerde ara
    for (const key of Object.keys(node)) {
      if (key === "__products") continue;
      if (helper(node[key], [...currentPath, key])) return true;
    }
    return false;
  };

  helper(tree, []);
  return path;
};

const CategoryMenu = ({
  tree,
  navigate,
  currentSlug,
  openPath = [],
  level = 0,
}) => {
  // openPath: kategori yolundaki isimler (örneğin ["Konveyor Zincir Urunleri /", "Standart Konveyör Zinciri"])
  // Bu yol üzerindeki kategoriler açık olacak.

  const [open, setOpen] = useState({});

  // Sayfa ilk açıldığında openPath'deki kategorileri open yap
  useEffect(() => {
    const newOpen = {};
    openPath.forEach((key, idx) => {
      // İlk 1, 2, 3. vs keyler açılır
      // Burada üst kategoriler açık olacak
      // Anahtarları path olarak birleştirip tutabiliriz ya da sadece tek anahtar da olur, basit olsun:
      newOpen[key] = true;
    });
    setOpen(newOpen);
  }, [openPath]);

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ul className={s.menu}>
      {Object.entries(tree).map(([key, value]) => {
        if (key === "__products") return null;
        const isOpen = open[key] || false;

        return (
          <li key={key}>
            <div
              className={s.category_item}
              style={{ marginLeft: `${level * 20}px`, cursor: "pointer" }}
              onClick={() => toggle(key)}
            >
              <span style={{ fontFamily: "Teko, sans-serif" }}>
                {key.replace("/", "")}
              </span>
              <ChevDown
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
              />
            </div>
            {isOpen && (
              <>
                <CategoryMenu
                  tree={value}
                  navigate={navigate}
                  currentSlug={currentSlug}
                  openPath={openPath.slice(level + 1)}
                  level={level + 1}
                />
                {value.__products?.map((product, i) => {
                  const slug = extractSlug(product.from);
                  if (!slug) return null;

                  return (
                    <div
                      key={i}
                      className={`${s.product_item} ${
                        currentSlug === slug ? s.selected : ""
                      }`}
                      style={{
                        marginLeft: `${(level + 1) * 20}px`,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/products/zincir/${slug}`)}
                    >
                      {product.categories?.[product.categories.length - 1]}
                    </div>
                  );
                })}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const Zincir = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const selectedProduct = data.find((item) => extractSlug(item.from) === slug);
  const tree = buildCategoryTree(data);

  // Seçili ürünün kategorisini bul
  const selectedCategoryPath = slug ? findCategoryPathForSlug(tree, slug) : [];

  return (
    <div className={s.container}>
      <div className={s.content2}>
        <aside className={s.sidebar}>
          <h2 className={s.title}>Zincir Ürünleri</h2>
          <CategoryMenu
            tree={tree}
            navigate={navigate}
            currentSlug={slug}
            openPath={selectedCategoryPath}
          />
        </aside>

        <main className={s.content}>
          {selectedProduct && (
            <img
              className={s.prod_image}
              src={selectedProduct?.prodImage}
              alt=""
            />
          )}
          {selectedProduct ? (
            <div className={s.contentInner}>
              {parse(
                selectedProduct.htmlContent
                  .replace(/src="(.*?)"/g, (match, src) => {
                    if (src.startsWith("/")) {
                      return `src="https://tr.renold.com${src}"`;
                    }
                    return `src="${src}"`;
                  })
                  .replace(/<ul class="breadcrumbs">[\s\S]*?<\/ul>/, "")
              )}
       {selectedProduct?.from === "https://tr.renold.com/ueruenler/sprockets/" && (
  <a
    href="https://tr.renold.com/media/2385601/sprockets-leaflet.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className={s.button_download}>Broşürü İndir</button>
  </a>
)}
       {selectedProduct?.from === "https://tr.renold.com/ueruenler/leaf-chain/" && (
  <a
    href="https://tr.renold.com/media/165401/lifting-chain-ren3-eng-10-13.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className={s.button_download}>Broşürü İndir</button>
  </a>
)}

          
             </div>
         ) : (
            <p className={s.empty}>Lütfen bir ürün seçin.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Zincir;
