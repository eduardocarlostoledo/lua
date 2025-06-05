import { motion } from "framer-motion";
import "../../src/styles/BrandsSection.css";

// Importar logos de las marcas
import bridgestoneLogo from "../images/logos/dress-2-svgrepo-com.svg";
import dunlopLogo from "../images/logos/dress-svgrepo-com.svg";
import firestoneLogo from "../images/logos/hanger-svgrepo-com.svg";
import durableLogo from "../images/logos/ladies-shirt-svgrepo-com.svg";
import michelinLogo from "../images/logos/ladies-vest-svgrepo-com.svg";
import pirelliLogo from "../images/logos/pants-svgrepo-com.svg";
import xbriLogo from "../images/logos/shirt-with-bow-svgrepo-com.svg";

const BrandsSection = () => {
  // Lista de marcas con logos importados
  const brands = [
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO vestidos",
      logo: bridgestoneLogo,
    },
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO short pollera",
      logo: dunlopLogo,
    },
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO vestimenta mujer casual ",
      logo: firestoneLogo,
    },
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO camisas",
      logo: durableLogo,
    },
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO tops",
      logo: michelinLogo,
    },
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO pantalones",
      logo: pirelliLogo,
    },
    {
      name: "mayorista de ropa femenina en encarnacion Lua Collection CIRCUITO buzos",
      logo: xbriLogo,
    },
  ];

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre cada hijo
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="brands-section" id="marcas">
      <div className="container-marcas">
          <h2>Tu Estilo Casual, ¡Siempre con LUA COLLECTION CIRCUITO!</h2>
          
          
        <p className="brands-description">
    Descubre la ropa casual más linda y cómoda para mujer: pantalones, blusas, remeras, vestidos y más, con la calidad y los precios que te encantarán. ¡Siempre de la mano de los mejores fabricantes!        </p>

        <motion.div
          className="brands-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animación solo una vez
        >
          {brands.map((brand, index) => (
            <motion.div
              className="brand-card"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Efecto hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                loading="lazy"
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
              />
              {/* <p className="brand-name">{brand.name}</p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
