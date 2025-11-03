import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      {/* Seções com IDs correspondentes aos links do Header */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <Footer />
    </>
  );
};

export default App;
