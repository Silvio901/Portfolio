import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="stars-footer"></div>

      <div className="social-icons">
        <a
          href="https://github.com/Silvio901"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/silvio_developer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/silvio-junior-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="footer-text">© 2025 Meu Portfólio. Todos os direitos reservados.</p>
      <p className="footer-dev">
        Desenvolvido por <span className="dev-name">Silvio Junior</span> 🚀
      </p>
    </footer>
  );
};

export default Footer;
