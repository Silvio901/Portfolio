import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Fundo com estrelas */}
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>

      {/* Logo / Título */}
      <h1 className={styles.logo}>Portfólio</h1>

      {/* Navegação */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h2>“Um desenvolvedor, uma galáxia de ideias.”</h2>
        <p>Transformando código em experiências digitais, unindo design e tecnologia no universo da web.</p>
        <a href="#projects" className={styles.cta}>✨ Ver Projetos</a>
      </section>
    </header>
  );
};

export default Header;
