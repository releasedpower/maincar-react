import React from 'react';
import '../assets/styles/SimpleCard.scss';

const SimpleCard = ({ title, count, description }) => {
  return (
    <div
      className="simple-card"
    >
      <div className="simple-card-content">
        <div className="simple-card-title">{title}</div>
        <div className="simple-card-count">{count}</div>
        <div className="simple-card-description">{description}</div>
      </div>
    </div>
  );
};

export default SimpleCard;
