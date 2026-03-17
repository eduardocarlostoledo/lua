import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/NewDrops.css";

const NewDrops = () => {
  const { t } = useContext(AppContext);

  // Prioritize products marcados como "newDrop" y completar hasta 6 productos
  const featured = [
    ...products.filter((p) => p.newDrop),
    ...products.filter((p) => !p.newDrop),
  ].slice(0, 8);

  return (
    <section className="newdrops section section--highlight" id="novedades">
      <div className="container">
        <header className="section-header animate-fade-up">
          <h2>{t("drops.title")}</h2>
          <p className="section-subtitle">{t("hero.tagline")}</p>
        </header>
        <div className="card-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="urgency">{t("drops.urgency")}</p>
      </div>
    </section>
  );
};

export default NewDrops;
