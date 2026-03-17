import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/ProductCard.css";

const WHATSAPP_NUMBER = "595984366660";

const ProductCard = ({ product }) => {
  const { t } = useContext(AppContext);
  const message = t("product.message", { name: product.name });
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className="product-card">
      {product.newDrop && <span className="badge">{t("drops.badge")}</span>}
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <div className="product-meta">
          <span className="product-price">{product.price}</span>
          <a
            className="btn btn--whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
