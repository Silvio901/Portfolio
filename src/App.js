import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const hardSkills = ['React', 'JavaScript', 'Python', 'HTML', 'CSS', 'Node.js'];
const softSkills = ['Comunicação', 'Trabalho em equipe', 'Adaptabilidade', 'Criatividade', 'Proatividade'];

function App() {
  return (
    <div className="app">
      <section id='about'><Header /></section>
      <About />
      <section id='skills'><Skills hardSkills={hardSkills} softSkills={softSkills} /></section>
      <Projects />
      <section id='contact'><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;