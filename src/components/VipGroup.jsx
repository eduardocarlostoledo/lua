import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/VipGroup.css";

const WHATSAPP_NUMBER = "595984366660";

const VipGroup = () => {
  const { t } = useContext(AppContext);
  const message = t("vip.message");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="vip section" id="vip">
      <div className="container">
        <div className="vip__content animate-fade-up">
          <h2>{t("vip.title")}</h2>
          <p className="vip__desc">{t("vip.desc")}</p>
          <a
            className="btn btn--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("vip.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VipGroup;
