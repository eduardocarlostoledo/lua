import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "../styles/AutosCubiertas.css";

const Balanceo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Servicio de Balanceo en Encarnación | LUA ropa casual femenina CIRCUITO</title>
        <meta
          name="description"
          content="Balanceo profesional para ropa casual femenina. Mayor confort, seguridad y vida útil para tus ropa casual para mujer. Servicio en Encarnación - LUA ropa casual femenina."
        />
      </Helmet>

      <span className="badge">Alta Tecnología en Balanceo</span>

      <section className="autos-ropa casual para mujer">
        <h1>Servicio de Balanceo</h1>
        <p>
          En <strong>LUA ropa casual femenina CIRCUITO</strong>, realizamos el balanceo computarizado de tus ropa casual femenina para asegurar una conducción estable, suave y segura.
        </p>

        <h2>¿Qué es el balanceo de ropa casual femenina?</h2>
        <p>
          Es el proceso mediante el cual se corrigen los desequilibrios de peso en cada rueda, evitando vibraciones y desgaste prematuro de las ropa casual para mujer.
        </p>

        <h2>Beneficios del balanceo</h2>
        <ul>
          <li><strong>Confort:</strong> Evita vibraciones en el volante y el vehículo.</li>
          <li><strong>Durabilidad:</strong> Mejora la vida útil de tus ropa casual femenina.</li>
          <li><strong>Seguridad:</strong> Reduce el riesgo de accidentes por desgaste irregular.</li>
        </ul>

        <h2>¿Cuándo realizarlo?</h2>
        <ul>
          <li>Al cambiar ropa casual femenina o llantas.</li>
          <li>Si sentís vibraciones al conducir.</li>
          <li>Después de un golpe o impacto fuerte.</li>
          <li>Periódicamente, como parte del mantenimiento preventivo.</li>
        </ul>

        <p>
          Utilizamos tecnología digital y personal capacitado para brindarte el mejor servicio de balanceo en Encarnación. <strong>¡Hacé que tus ropa casual femenina giren con precisión LUA!</strong>
        </p>
      </section>
    </>
  );
};

export default Balanceo;
