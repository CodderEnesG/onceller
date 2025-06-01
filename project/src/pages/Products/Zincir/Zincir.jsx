import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import data from "./renold_products.json";
import s from "./Zincir.module.css";
import ChevDown from "../../../assets/svg/chev_down_grey";

const extractSlug = (url) => {
  if (!url || typeof url !== "string") return "";
  const cleanUrl = url.split("#")[0]; // Hash (#nogo vs) kısmını at
  const parts = cleanUrl.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
};

const buildCategoryTree = (items) => {
  const tree = {};
  for (const item of items) {
    const trimmed = item.categories?.slice(1); // Ana sayfayı atla
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

const CategoryMenu = ({ tree, navigate, currentSlug, level = 0 }) => {
  const [open, setOpen] = React.useState({});

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ul className={s.menu}>
      {Object.entries(tree).map(([key, value]) => {
        if (key === "__products") return null;
        return (
          <li key={key}>
            <div
              className={s.category_item}
              style={{ marginLeft: `${level * 20}px` }}
              onClick={() => toggle(key)}
            >
                   <span style={{ fontFamily: "Teko , sans-serif" }}>{key}</span>
              <ChevDown />
            </div>
            {open[key] && (
              <>
                <CategoryMenu
                  tree={value}
                  navigate={navigate}
                  currentSlug={currentSlug}
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
                      style={{ marginLeft: `${(level + 1) * 20}px` }}
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

  return (
    <div className={s.container}>
              <div className={s.content2}>
        
      <aside className={s.sidebar}>
        <h2 className={s.title}>Zincir Ürünleri</h2>
        <CategoryMenu tree={tree} navigate={navigate} currentSlug={slug} />
      </aside>

      <main className={s.content}>
        <img src={selectedProduct.prodImage} alt="asdlkfjlsk" />
        {selectedProduct ? (
          <div className={s.contentInner}>
            {parse(
              selectedProduct.htmlContent.replace(
                /src="(.*?)"/g,
                (match, src) => {
                  if (src.startsWith("/")) {
                    return `src="https://tr.renold.com${src}"`;
                  }
                  return `src="${src}"`;
                }
              )
            )}
          </div>
        ) : (
          <p className={s.empty}>Lütfen bir ürün seçin.</p>
        )}
      </main>
    </div>    </div>

  );
};

export default Zincir;
