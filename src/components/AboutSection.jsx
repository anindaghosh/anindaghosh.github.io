import React from 'react';
import InfoBlock from './InfoBlock';

function AboutSection({ content, photo }) {
  return (
    <section className="about-section">
      <div className="about-header">
        {photo && (
          <div className="profile-photo-container">
            <img
              src={photo}
              alt="Professional headshot"
              className="profile-photo"
            />
          </div>
        )}
        <div className="about-content">
          {content.map((item, index) => (
            <InfoBlock key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
