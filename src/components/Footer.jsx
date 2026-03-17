import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Footer.css";

const WHATSAPP_NUMBER = "595984366660";
const AGENCY_NAME = "Toledo Consultora";
const AGENCY_URL = "https://toledoconsultora.com";

const Footer = () => {
  const { t } = useContext(AppContext);
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;

  const links = t("footer.links");
  const contact = t("footer.contact");

  return (
    <footer className="footer">
      <div className="footer__inner container animate-fade-up">
        <div className="footer__brand">
          <h2 className="footer__title">{t("footer.title")}</h2>
          <p className="footer__rights">{t("footer.rights", { year: currentYear })}</p>
          <p className="footer__credit">
            {t("footer.designedBy")} <a
              href={AGENCY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__credit-link"
            >
              {AGENCY_NAME}
            </a>
          </p>
        </div>

        <div className="footer__links">
          <p className="footer__section-title">Links</p>
          <ul className="footer__nav">
            {links.map((link, idx) => (
              <li key={idx}>
                {link.href.startsWith("/") ? (
                  <Link to={link.href} className="footer__link">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <p className="footer__section-title">{contact.heading}</p>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/luacollection_circuito/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@modatotaltienda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-icon"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-icon"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" />
              </svg>
            </a>
          </div>

          <a
            className="footer__whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">📱</span> {contact.whatsappCall}
          </a>
          <p className="footer__text">
            <span aria-hidden="true">📍</span> {contact.address}
          </p>
          <p className="footer__text">
            <span aria-hidden="true">⏰</span> {contact.hours}
          </p>
          <p className="footer__text">
            <span aria-hidden="true">📞</span> {contact.phone}
          </p>
        </div>

        <button
          type="button"
          className="footer__back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Subir al inicio"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
