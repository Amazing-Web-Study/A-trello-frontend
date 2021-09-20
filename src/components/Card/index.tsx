import React, { useEffect } from 'react';
import "./Card.css";
import axios from 'axios';

interface CardProps {
  title: string | undefined;
  description: string | undefined;
  id: string;
  list_id: string;
  deleteCard: any;
};

const Card: React.FC<CardProps> = (props) => {
  
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title">
          {props.title}
          <div className="card-title-wrapper">
            <button>
              @
            </button>
            <button onClick={() => {props.deleteCard(props.list_id, props.id)}}>
              X
            </button>
          </div>
        </div>
        <div className="card-description">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;