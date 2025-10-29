import React from "react";
import { FaFacebookF, FaTwitter, FaInfoCircle } from "react-icons/fa";
import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y nombre */}
        <div className="footer-logo">
          <span className="logo-text">
            Eco Friendly<span className="highlight"> Code</span>
          </span>
        </div>

        {/* Enlaces */}
        <div className="footer-links">
          <a href="/terminos" className="footer-link">Términos</a>
          <a href="#" className="footer-link">Privacidad</a>
          <a href="#" className="footer-link">Contacto</a>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <a href="#" className="footer-icon"><FaFacebookF /></a>
          <a href="#" className="footer-icon"><FaTwitter /></a>
          <a href="#" className="footer-icon"><FaInfoCircle /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;