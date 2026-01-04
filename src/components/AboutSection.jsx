import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfoBlock from './InfoBlock';
import StructuredData from './StructuredData';

function AboutSection({ content, photo }) {
  return (
    <>
      <Helmet>
        <title>Aninda Ghosh | Full Stack Developer & Cloud Engineer</title>
        <meta
          name="description"
          content="Full Stack Developer and Cloud Engineer specializing in React, Node.js, AWS, Azure, and AI/ML. MS in Computer Engineering from NYU Tandon School of Engineering."
        />
        <meta property="og:title" content="Aninda Ghosh | Full Stack Developer & Cloud Engineer" />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in cloud architecture, AI/ML, and modern web development. Ex-Solutions Architect at AB InBev."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.anindaghosh.com/" />
        <meta property="og:image" content="https://www.anindaghosh.com/images/aninda.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aninda Ghosh | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Full Stack Developer specializing in cloud architecture, AI/ML, and secure backend systems."
        />
        <link rel="canonical" href="https://www.anindaghosh.com/" />
      </Helmet>
      <StructuredData />
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
    </>
  );
}

export default AboutSection;
