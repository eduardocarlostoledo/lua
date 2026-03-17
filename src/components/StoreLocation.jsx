import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/StoreLocation.css";

const StoreLocation = () => {
  const { t } = useContext(AppContext);
  return (
    <section className="store-location" id="ubicacion">
      <header className="section-header">
        <h2>{t("location.title")}</h2>
      </header>
      <div className="location-grid">
        <div className="location-info">
          <p className="location-address">{t("location.address")}</p>
          <p className="location-hours">{t("location.hours")}</p>
          <p className="location-phone">{t("location.phone")}</p>
          <a
            className="btn btn--outline"
            href="https://www.google.com/maps/place/LUA+COLLECTION+CIRCUITO/data=!4m2!3m1!1s0x0:0xe6b8c8cebd66e792"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("location.map")}
          </a>
        </div>
        <div className="location-map">
          <iframe
            title="Mapa de la tienda LUA Collection"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1062682698383!2d-55.86668928440003!3d-27.329999782132907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945bb033dfac1501%3A0x4737d5167a9fde12!2sLUA%20COLLECTION%20CIRCUITO!5e0!3m2!1ses-419!2sus!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="location-tiktok">
        <h3 className="location-tiktok-title">{t("location.tiktokTitle")}</h3>
        <div className="location-tiktok-embed">
          <iframe
            title="TikTok - Moda Total Tienda"
            src="https://www.tiktok.com/embed/7510205671141362949"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
