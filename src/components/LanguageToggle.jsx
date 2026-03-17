import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/LanguageToggle.css";

const LanguageToggle = () => {
  const { lang, setLang } = useContext(AppContext);

  return (
    <div className="language-toggle" aria-label="Cambiar idioma">
      <button
        type="button"
        className={lang === "es" ? "active" : ""}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        className={lang === "pt" ? "active" : ""}
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageToggle;
