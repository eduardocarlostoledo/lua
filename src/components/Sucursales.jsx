import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../../src/styles/Sucursales.css";

const Sucursales = () => {
  return (
    <>
      <Helmet>
        <title>Ubicación de LUA ropa casual femenina | Encarnación Paraguay</title>
        <meta
          name="description"
          content="Visitá LUA ropa casual femenina CIRCUITO en Encarnación. A solo 300 metros de la aduana internacional. Envíos a todo Paraguay y Argentina."
        />
        <link rel="canonical" href="https://appelneumaticos.com/#sucursales" />
      </Helmet>

      <section className="sucursales-section" id="sucursales">
        <div className="container-sucursales">
          <span className="badge">Ubicación estratégica</span>
          <h2>¿Dónde Estamos?</h2>

          <motion.div
            className="google-map"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <iframe
              title="Ubicación de LUA ropa casual femenina en Encarnación"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d885.8912351549054!2d-55.851786724189196!3d-27.35806680361256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIxJzI5LjAiUyA1NcKwNTEnMDIuMSJX!5e0!3m2!1ses!2sar!4v1742416736106!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div
            className="address-sucursales"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Visitanos o contactanos</h3>

            <div className="social-links">
              <a
                href="https://wa.me/595975123030"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
              >
                🟢 WhatsApp
              </a>
              <a
                href="https://www.instagram.com/appel_neumaticos_showroom/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                📸 Instagram
              </a>
              <a
                href="https://maps.app.goo.gl/dN9obMRMWov6Euvu5"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon maps"
              >
                📍 Google Maps
              </a>
            </div>

            <address>
              <p>📍 J4RX+PQ9 Encarnación, Paraguay</p>
              <p>Rotonda Ruta Internacional - 300mt de la aduana internacional</p>
              <p>🚚 Envíos a todo Paraguay y Argentina</p>
            </address>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sucursales;
