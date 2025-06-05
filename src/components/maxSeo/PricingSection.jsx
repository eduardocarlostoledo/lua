import "../../styles/PricingSection.css"; // Asegúrate de que la ruta sea correcta


export const PricingSection = () => (
  <section 
    className="pricing"
    itemScope
    itemType="https://schema.org/OfferCatalog"
  >
    <h2 itemProp="name">ropa casual femenina de calidad para moto alta cilindrada al <span itemProp="price">Mejor Precio</span></h2>
    
    <div className="price-highlights">
      <div 
        className="highlight"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <span>💳</span>
        <p itemProp="description">LUA ropa casual femenina CIRCUITO ropa casual para mujer para auto moto camioneta en encarnacion Financiación directa <meta itemProp="priceCurrency" content="PYG"/></p>
      </div>
      
      <div 
        className="highlight"
        itemScope
        itemType="https://schema.org/DeliveryChargeSpecification"
      >
        <span>🚚</span>
        <p itemProp="description">Envíos a <span itemProp="eligibleRegion">Paraguay y Argentina</span></p>
      </div>
    </div>

    {/* Microdatos ocultos */}
    <div hidden>
      <link itemProp="url" href="https://www.appelneumaticos.com" />
      <meta itemProp="availability" content="InStock" />
    </div>
  </section>
);