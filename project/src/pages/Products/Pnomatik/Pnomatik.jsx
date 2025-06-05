import React, { useEffect ,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import s from "./Pnomatik.module.css";
import data from "./pnomatik_data.json";
 import ChevDown from "../../../assets/svg/chev_down_grey";
import ChevButton from "../../../assets/svg/chevron_button_white";
import SocialButton from "../../../components/SocialButton/SocialButton";
import SocialButton2 from "../../../components/SocialButton/SocialButton2";
import SocialButton3 from "../../../components/SocialButton/SocialButton3";
import NoImage from "../../../assets/no_image.png";

const extractSlugFromURL = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 1] || parts[parts.length - 2];
};

const extractNameFromURL = (url) => {
  const slug = extractSlugFromURL(url);
  const namePart = slug.split("-u")[0];
  const withSpaces = namePart.replace(/-/g, " ");
  const capitalized = withSpaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return capitalized;
};



const buildCategoryTree = (items) => {
  const tree = {};
  for (const item of items) {
    const trimmedCategories = item.categories.slice(2);

    let current = tree;
    for (const level of trimmedCategories) {
      current[level] = current[level] || {};
      current = current[level];
    }

    if (!current.__products) current.__products = [];
    current.__products.push(item);
  }
  return tree;
};

const CategoryMenu = ({
  tree,
  onSelectProduct,
  path = [],
  level = 0,
  productSlug,
  navigate,
}) => {
  const [open, setOpen] = React.useState({});

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };



  return (
    <ul className={s.category_list}>
      {Object.entries(tree).map(([key, val]) => {
        if (key === "__products") return null;
        return (
          <li key={key}>
            <div
              className={s.category_item}
              onClick={() => toggle(key)}
              style={{ marginLeft: `${level * 15}px` }}
            >
              <span style={{ fontFamily: "Teko , sans-serif" }}>{key}</span>
              <ChevDown />
            </div>
            {open[key] && (
              <>
                <CategoryMenu
                  tree={val}
                  path={[...path, key]}
                  onSelectProduct={onSelectProduct}
                  level={level + 1}
                  productSlug={productSlug}
                  navigate={navigate}
                />
                {val.__products?.map((product, i) => {
                  const slug = extractSlugFromURL(product.from);
                  const isSelected = slug === productSlug;
                  return (
                    <div
                      key={i}
                      className={`${s.product_item} ${
                        isSelected ? s.selected : ""
                      }`}
                      onClick={() => {
                        navigate(`/products/pnomatik/${slug}`);
                        onSelectProduct(product);
                      }}
                      style={{ marginLeft: `${(level + 1) * 15}px` }}
                    >
                      {extractNameFromURL(product.from)}
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

const Pnomatik = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // ürün değişince tekrar yükleniyor durumuna geç
  }, [productSlug]);

  const allProducts = data;
  const selectedProduct = allProducts.find(
    (product) =>
      extractSlugFromURL(product.from).toLowerCase().trim() ===
      productSlug?.toLowerCase().trim()
  );

  const categoryTree = buildCategoryTree(data);

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.sidebar}>
          <h2 className={s.title}>Pnomatik Ürünleri</h2>
          <CategoryMenu
            tree={categoryTree}
            onSelectProduct={() => {}}
            productSlug={productSlug}
            navigate={navigate}
          />

          <div className={s.upper_box}>
            <div className={s.upper_box_overlay}></div>
            <div className={s.upper_box_content}>
              <h2 className={s.upper_box_title}>
                Üretiminizi Bir Üst Seviyeye Taşıyın!
              </h2>
              <p className={s.upper_box_subtitle}>
                Hidrolik, pnömatik ve zincirli transfer sistemlerimizle
                kesintisiz verim ve maksimum performans garantisi.
              </p>
              <div className={s.upper_box_cta}>
                <span>İletişime geç!</span>
                <ChevButton />
              </div>
            </div>
          </div>
          <div className={s.social}>
            <h4>Bizi takibe al!</h4>
            <div className={s.icons}>
              <SocialButton />
              <SocialButton2 />
              <SocialButton3 />
            </div>
          </div>
        </div>

        {/* Orta Resim */}
     <div className={s.image_container}>
          {selectedProduct ? (
            <>
              {loading && (
                <div className={s.loadingOverlay}>
                  <div className={s.spinner}></div>
                  <p>Yükleniyor...</p>
                </div>
              )}
              <img
                src={selectedProduct.imageSrc || NoImage}
                onLoad={() => setLoading(false)}
                onError={(e) => {
                  e.currentTarget.src = NoImage;
                  setLoading(false);
                }}
                alt="Ürün"
                style={{ display: loading ? "none" : "block" }}
              />
            </>
          ) : (
            <p>Lütfen bir ürün seçin.</p>
          )}
        </div>

        {/* Sağ Tablo */}
        <div className={s.table_container}>
          {selectedProduct && (
            <table>
              <thead>
                <tr>
                  <th>KOD</th>
                  <th>AÇIKLAMA</th>
                </tr>
              </thead>
              <tbody>
                {selectedProduct.tableData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
           <div className={s.upper_box_responsive}>
            <div className={s.upper_box_overlay}></div>
            <div className={s.upper_box_content}>
              <h2 className={s.upper_box_title}>
                Üretiminizi Bir Üst Seviyeye Taşıyın!
              </h2>
              <p className={s.upper_box_subtitle}>
                Hidrolik, pnömatik ve zincirli transfer sistemlerimizle
                kesintisiz verim ve maksimum performans garantisi.
              </p>
              <div className={s.upper_box_cta}>
                <span>İletişime geç!</span>
                <ChevButton />
              </div>
            </div>
          </div>
          <div className={s.social_responsive}>
            <h4>Bizi takibe al!</h4>
            <div className={s.icons}>
              <SocialButton />
              <SocialButton2 />
              <SocialButton3 />
            </div>
          </div>
      </div>
     
    </div>
  );
};

export default Pnomatik;
