import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = ({ hardSkills, softSkills }) => {
  const [activeTab, setActiveTab] = useState('hard');
  const [visible, setVisible] = useState(false);
  const [switching, setSwitching] = useState(false);

  // Fade-in inicial
  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  // Efeito visual ao trocar de aba
  const handleTabSwitch = (tab) => {
    if (activeTab !== tab) {
      setSwitching(true);
      setTimeout(() => {
        setActiveTab(tab);
        setSwitching(false);
      }, 300); // tempo do flash
    }
  };

  const skillsToShow = activeTab === 'hard' ? hardSkills : softSkills;

  return (
    <section className={`skills-section ${visible ? 'fade-in' : ''}`}>
      <div className="stars"></div>

      <h2>Minhas Skills</h2>

      <div className="tabs">
        <button
          className={activeTab === 'hard' ? 'active' : ''}
          onClick={() => handleTabSwitch('hard')}
        >
          Hard Skills
        </button>
        <button
          className={activeTab === 'soft' ? 'active' : ''}
          onClick={() => handleTabSwitch('soft')}
        >
          Soft Skills
        </button>
      </div>

      <div className={`skills-slider ${switching ? 'flash' : ''}`}>
        {skillsToShow.map((skill, index) => (
          <div
            key={index}
            className={`skill-card fade-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
