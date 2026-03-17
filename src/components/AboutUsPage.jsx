import React, { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import SecondaryHeroSection from "./SecondaryHeroSection";
import StoreLocation from "./StoreLocation";
import { AppContext } from "../context/AppContext";
import "../styles/AboutUs.css";

const AboutUsPage = () => {
  const { t } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("about.title")} | LUA Collection</title>
        <meta name="description" content={t("about.description")} />
      </Helmet>

      <SecondaryHeroSection />

      <section className="about-section">
        <div className="about-container">
          <h1 className="about-title">{t("about.title")}</h1>
          <p className="about-text">{t("about.description")}</p>

          <ul className="about-stats">
            {t("about.stats").map((item, idx) => (
              <li key={idx} className="stat-item">
                {item}
              </li>
            ))}
          </ul>

          <p className="about-cta">{t("about.cta")}</p>
        </div>
      </section>

      <StoreLocation />
    </>
  );
};

export default AboutUsPage;
