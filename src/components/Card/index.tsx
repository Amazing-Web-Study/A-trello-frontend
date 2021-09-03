import React from 'react';
import "./Card.css";

interface CardProps {
  title: string | undefined;
  description: string | undefined;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title">
          {title}
          <div className="card-title-wrapper">
            <button>
              @
            </button>
          </div>
        </div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
}

export default Card;