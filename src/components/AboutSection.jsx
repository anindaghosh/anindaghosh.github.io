// src/components/AboutSection.js
import React from 'react';
import InfoBlock from './InfoBlock';

function AboutSection({ content }) {
  return (
    <section className="about-section">
      {content.map((item, index) => (
        <InfoBlock key={index} icon={item.icon} text={item.text} />
      ))}
    </section>
  );
}

export default AboutSection;
