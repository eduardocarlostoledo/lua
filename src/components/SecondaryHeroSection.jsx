import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/SecondaryHeroSection.css";
import foto1 from "../images/1.jpg";
import foto2 from "../images/2.jpg";
import foto3 from "../images/3.jpg";
import foto4 from "../images/4.jpg";

const SecondaryHeroSection = () => {
  const { t } = useContext(AppContext);

  return (
    <section
      className="secondary-hero-section section section--highlight"
      aria-labelledby="secondary-hero-title"
    >
      <div className="secondary-hero-container container">
        <div className="secondary-hero-text animate-fade-up">
          <h2 id="secondary-hero-title" className="secondary-hero-title">
            {t("secondaryHero.title")}
          </h2>
          <p className="secondary-hero-description">
            {t("secondaryHero.description")}
          </p>
          <a href="#novedades" className="secondary-hero-button">
            {t("secondaryHero.button")}
          </a>
        </div>

        <div className="secondary-hero-images">
          <div className="image-grid">
            <div className="image-item">
              <img src={foto1} alt="" aria-hidden="true" className="grid-image" />
            </div>
            <div className="image-item">
              <img src={foto2} alt="" aria-hidden="true" className="grid-image" />
            </div>
            <div className="image-item">
              <img src={foto3} alt="" aria-hidden="true" className="grid-image" />
            </div>
            <div className="image-item">
              <img src={foto4} alt="" aria-hidden="true" className="grid-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHeroSection;
