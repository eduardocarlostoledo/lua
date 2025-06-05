import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../src/styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | LUA COLLECTION CIRCUITO</title>
        <meta
          name="description"
          content="Conoce nuestra historia y compromiso con la venta de ropa casual femenina en Encarnación, Paraguay. Más de 25 años de experiencia nos respaldan."
        />
      </Helmet>

      <section
        id="acerca-de"
        className="about-section"
        itemScope
        itemType="http://schema.org/Organization"
      >
        <div className="about-container">
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            itemProp="name"
          >
            LUA COLLECTION CIRCUITO
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            itemProp="description"
          >
            En <strong>LUA COLLECTION</strong>, somos referentes en la venta y
            distribución de ropa para mujer de alta calidad. Desde nuestros inicios,
            nos comprometimos a brindar a nuestr@s <strong>client@s</strong> de todo <strong>Paraguay y Argentina</strong> productos de calidad, seleccionados especialmente para que tu estilo sea único y auténtico a un precio competitivo.
          </motion.p>

          <motion.ul
            className="about-stats"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <li className="stat-item">🚗 +100,000 ventas concretadas</li>
            <li className="stat-item">🏆 25 años de experiencia</li>
            <li className="stat-item">🌎 Cobertura nacional e internacional</li>
          </motion.ul>

          <motion.p
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Conocé más visitando nuestro local en el circuito de Encarnación o escribinos para recibir asesoramiento personalizado.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
