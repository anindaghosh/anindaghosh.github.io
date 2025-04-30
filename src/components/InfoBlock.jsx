// src/components/InfoBlock.js
import React from 'react';

function InfoBlock({ icon, text }) {
  return (
    <div className="info-block">
      <span className="info-icon" role="img" aria-label="icon">{icon}</span>
      <p>{text}</p>
    </div>
  );
}

export default InfoBlock;
