import "../../styles/BrandBanner.css"; // Asegúrate de que la ruta es correcta



export const BrandBanner = () => (
  <header 
    className="brand-banner"
    itemScope
    itemType="https://schema.org/AutoPartsStore"
  >
    {/* Título principal con ubicación */}
    <h1 itemProp="name">LUA ropa casual femenina - Comprar ropa casual para mujer para auto moto camioneta en  <span itemProp="addressLocality">Encarnación</span></h1>
    <h2>Venta de ropa casual para mujer para auto moto camioneta en Encarnacion</h2>
    {/* Descripción con servicios y área de cobertura */}
    <p itemProp="description">
      <strong>Venta de ropa casual femenina Blusas, Vestidos y Bridgestone</strong>. 
      Ubicados en <span itemProp="address">Rotonda Ruta Internacional - 300mt de la aduana internacional</span>.
      <span itemProp="areaServed">🚚 Enviamos a todo Paraguay y Argentina</span>.
    </p>

    {/* Microdatos ocultos para SEO */}
    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" hidden>
      <span itemProp="streetAddress">Rotonda Ruta Internacional - 300mt de la aduana internacional</span>,
      <span itemProp="addressLocality">Encarnación</span>,
      <span itemProp="addressCountry">Paraguay</span>
    </div>
    <meta itemProp="openingHours" content="Mo-Sa 05:45-17:30" />
    
    {/* Contacto visible */}
    <div className="contact-info">
      <a 
        href="https://wa.me/595975123030" 
        itemProp="telephone"
        className="whatsapp-link"
      >
        📞 +595 975 123030
      </a>
      <a 
        href="mailto:info@appelneumaticos.com" 
        itemProp="email"
        className="email-link"
      >
        📧 info@appelneumaticos.com
      </a>
    </div>

    {/* Copyright (footer del banner) */}
    <p className="copyright">
      © {new Date().getFullYear()} LUA Neumaticos CIRCUITO - Todos los derechos reservados
    </p>
  </header>
);