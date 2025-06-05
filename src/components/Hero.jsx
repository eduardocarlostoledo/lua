import "../../src/styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container-hero">
        <div className="hero-text">
          <h1>Ropa Casual Femenina en Encarnación Paraguay</h1>
          <p className="subtitle">Venta • Mayor y Menor •  Envíos a todo Paraguay</p>
          <div className="cta-container">
            <a href="#productos" className="cta primary">🛞 Ver Productos</a>
            <a href="#ubicacion" className="cta secondary">📍 Cómo Llegar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
