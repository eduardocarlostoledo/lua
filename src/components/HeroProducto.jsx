import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroProducto.css";
import modeloPolleraAmarilla from "../images/modelos/pollera.png";
import dosModelos from "../images/modelos/modelos.png"; // Asegúrate de tener esta imagen en la carpeta correcta
import modeloSweter from "../images/modelos/sweter.png"; // Asegúrate de tener esta imagen en la carpeta correcta
import modeloblusa from "../images/modelos/remera.png"; // Asegúrate de tener esta imagen en la carpeta correcta

const HeroProducto = () => {
  return (
    <div>
      <div>
        <section className="hero-producto">
          <div className="hero-imagen">
            <img src={modeloPolleraAmarilla} alt="Modelo con pollera mostaza" />
          </div>

          <motion.div
            className="hero-contenido"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-titulo">Pollera Alisada Mostaza</h1>
            <p className="hero-descripcion">
              Elegancia y movimiento en una prenda versátil que resalta tu
              figura. Ideal para días de trabajo o salidas especiales. ¡Combiná
              estilo con actitud!
            </p>
            <button className="hero-boton">Comprar Ahora</button>
          </motion.div>
        </section>
      </div>

      <div>
        <section className="hero-producto">
          <div className="hero-imagen">
            <img src={dosModelos} alt="Modelo con pollera mostaza" />
          </div>

          <motion.div
            className="hero-contenido"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-titulo">Pollera Alisada Mostaza</h1>
            <p className="hero-descripcion">
              Elegancia y movimiento en una prenda versátil que resalta tu
              figura. Ideal para días de trabajo o salidas especiales. ¡Combiná
              estilo con actitud!
            </p>
            <button className="hero-boton">Comprar Ahora</button>
          </motion.div>
        </section>
      </div>

      <div>
        <section className="hero-producto">
          <div className="hero-imagen">
            <img src={modeloSweter} alt="Modelo con pollera mostaza" />
          </div>

          <motion.div
            className="hero-contenido"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-titulo">Pollera Alisada Mostaza</h1>
            <p className="hero-descripcion">
              Elegancia y movimiento en una prenda versátil que resalta tu
              figura. Ideal para días de trabajo o salidas especiales. ¡Combiná
              estilo con actitud!
            </p>
            <button className="hero-boton">Comprar Ahora</button>
          </motion.div>
        </section>
      </div>

      <div>
        <section className="hero-producto">
         <div className="hero-imagen">
            <img src={modeloblusa} alt="Modelo con pollera mostaza" />
          </div>

          <motion.div
            className="hero-contenido"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-titulo">Pollera Alisada Mostaza</h1>
            <p className="hero-descripcion">
              Elegancia y movimiento en una prenda versátil que resalta tu
              figura. Ideal para días de trabajo o salidas especiales. ¡Combiná
              estilo con actitud!
            </p>
            <button className="hero-boton">Comprar Ahora</button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HeroProducto;
