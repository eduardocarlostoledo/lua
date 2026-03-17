import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import heroImage from "../images/baner.jpg";
import "../styles/HeroSection.css";

const WHATSAPP_NUMBER = "595984366660";

const HeroSection = () => {
  const { t } = useContext(AppContext);
  const message = encodeURIComponent(t("product.message", { name: "LUA COLLECTION" }));
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${message}`;

  return (
    <section className="hero section" id="inicio">
      <div className="hero__overlay" />
      <img src={heroImage} alt="LUA Collection" className="hero__bg" loading="lazy" />
      <div className="hero__content animate-fade-up">
        <h1 className="hero__title">{t("hero.title")}</h1>
        <p className="hero__subtitle">{t("hero.subtitle")}</p>
        <p className="hero__tagline">{t("hero.tagline")}</p>
        <div className="hero__actions">
          <a href="#novedades" className="btn btn--primary">
            {t("hero.cta")}
          </a>
          <a href={whatsappUrl} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
            {t("hero.whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
