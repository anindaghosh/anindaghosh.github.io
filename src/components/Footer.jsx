// src/components/Footer.js
import React from 'react';

function Footer({ info }) {
  return (
    <footer className="portfolio-footer">
      <p>
        © {info.year} {info.name}
      </p>
    </footer>
  );
}

export default Footer;
