// src/components/Links.js
import React from 'react';

function Links({ links }) {
  return (
    <section className="links-section">
      {links.map((link, index) => (
        <div key={index} className="link-item">
          <span>{link.name} </span>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.handle || link.email}
          </a>
        </div>
      ))}
    </section>
  );
}

export default Links;
