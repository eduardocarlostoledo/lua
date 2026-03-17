import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/HowToBuy.css";

const HowToBuy = () => {
  const { t } = useContext(AppContext);
  const steps = t("howToBuy.steps");

  return (
    <section className="how-to-buy section" id="como-comprar">
      <div className="container">
        <header className="section-header animate-fade-up">
          <h2>{t("howToBuy.title")}</h2>
        </header>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
