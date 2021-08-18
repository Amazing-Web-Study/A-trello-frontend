import React from 'react';
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
}

export default Card;