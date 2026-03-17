import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/SecondaryHeroSection.css";
import foto5 from "../images/5.jpg";
import foto6 from "../images/6.jpg";
import foto7 from "../images/7.jpg";
import foto8 from "../images/8.jpg";

const SecondaryHeroSectionAlt = () => {
  const { t } = useContext(AppContext);

  return (
    <section className="secondary-hero-section secondary-hero-section--alt section">
      <div className="secondary-hero-container container">
        <div className="secondary-hero-images">
          <div className="image-grid">
            <div className="image-item">
              <img src={foto5} alt="LUA Collection look 1" className="grid-image" />
            </div>
            <div className="image-item">
              <img src={foto6} alt="LUA Collection look 2" className="grid-image" />
            </div>
            <div className="image-item">
              <img src={foto7} alt="LUA Collection look 3" className="grid-image" />
            </div>
            <div className="image-item">
              <img src={foto8} alt="LUA Collection look 4" className="grid-image" />
            </div>
          </div>
        </div>

        <div className="secondary-hero-text animate-fade-up">
          <h2 className="secondary-hero-title">{t("secondaryHeroAlt.title")}</h2>
          <p className="secondary-hero-description">
            {t("secondaryHeroAlt.description")}
          </p>
          <a href="#novedades" className="secondary-hero-button">
            {t("secondaryHeroAlt.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondaryHeroSectionAlt;
