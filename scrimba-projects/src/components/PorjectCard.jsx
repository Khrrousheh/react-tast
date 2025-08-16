import React from 'react';
import './ProjectCard.css';

const Card = ({ header, footer, children }) => {
  return (
    <div className="card-container">
      {/* Header */}
      <div className="card-header">
        {header}
      </div>

      {/* Scrollable content area */}
      <div className="card-content">
        {children}
      </div>

      {/* Footer */}
      <div className="card-footer">
        {footer}
      </div>
    </div>
  );
};

export default Card;
