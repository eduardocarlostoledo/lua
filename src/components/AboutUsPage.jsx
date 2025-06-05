import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/AutosCubiertas.css";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Quiénes Somos | LUA ropa casual femenina CIRCUITO</title>
        <meta
          name="description"
          content="Conocé la historia y valores de LUA ropa casual femenina CIRCUITO en Encarnación, Paraguay. Comprometidos con la calidad y el servicio."
        />
      </Helmet>

      <span className="badge">Alta Tecnología en ropa casual para mujer</span>
      <section className="autos-ropa casual para mujer">
        <h1>Quiénes Somos</h1>
        <p>
          <strong>LUA ropa casual femenina CIRCUITO</strong> es una empresa familiar ubicada
          en Encarnación, Paraguay, dedicada a la venta de ropa casual femenina de las
          principales marcas como Blusas, Vestidos y Bridgestone. Estamos situados
          a 300 metros de la aduana internacional, facilitando el acceso a nuestros
          clientes locales y extranjeros.
        </p>

        <h2>Nuestra Misión</h2>
        <p>
          Brindar productos y servicios de alta calidad que garanticen la seguridad
          y satisfacción de nuestros clientes, ofreciendo asesoramiento
          personalizado y soluciones a medida.
        </p>

        <h2>Nuestros Valores</h2>
        <ul>
          <li><strong>Compromiso:</strong> Con la calidad y la satisfacción del cliente.</li>
          <li><strong>Integridad:</strong> Actuamos con honestidad y transparencia.</li>
          <li><strong>Innovación:</strong> Buscamos constantemente mejorar nuestros servicios.</li>
          <li><strong>Responsabilidad:</strong> Con nuestros clientes y la comunidad.</li>
        </ul>

        <p>
          Con años de experiencia en el rubro, nos hemos consolidado como una opción
          confiable para quienes buscan ropa casual femenina y servicios de gomería en la región.{" "}
          <strong>¡Te invitamos a conocernos y ser parte de nuestra comunidad!</strong>
        </p>
      </section>
    </>
  );
};


export default AboutUsPage;
