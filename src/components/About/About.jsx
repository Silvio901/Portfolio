import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="about-content">
        <h2 className="star-title"> SOBRE MIM</h2>

        <div className="about-section">
          <h3>💡 O que me move</h3>
          <p>
            A curiosidade em entender como as coisas funcionam, a busca constante por inovação
            e o desejo de criar experiências digitais que realmente façam diferença. Estou sempre
            aprendendo e aprimorando minhas habilidades para entregar o melhor em cada projeto.
          </p>
        </div>

        <div className="about-section">
          <h3>🚀 O que eu faço</h3>
          <p>
            Desenvolvo websites modernos, responsivos e otimizados, unindo design intuitivo e
            performance técnica. Trabalho com Python, JavaScript, React, HTML, CSS e outras
            tecnologias, explorando também conceitos de DevOps e Engenharia de Software para
            entregar soluções completas — do planejamento ao deploy.
          </p>
        </div>

        <div className="about-section">
          <h3>🎯 Meu objetivo</h3>
          <p>
            Construir projetos que inspirem, resolvam problemas reais e gerem impacto positivo.
            Tenho como foco a experiência do usuário, a eficiência e a qualidade do código.
          </p>
        </div>

        <div className="about-section">
          <h3>🤝 Vamos conversar?</h3>
          <p>
            Se quiser conhecer mais sobre meu trabalho, trocar ideias ou colaborar em algum projeto,
            será um prazer conversar com você!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
