import React, { useEffect, useRef, useState } from 'react';
import "./Card.css";
import axios from 'axios';
import { title } from 'process';

interface CardProps {
  title: string | undefined;
  description: string | undefined;
  id: string;
  list_id: string;
  deleteCard: any;
  updateCard: any;
};

const Card: React.FC<CardProps> = (props) => {
  const [card_title, setTitle] = useState<any>();
  const [card_description, setDescription] = useState<any>();

  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [])

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title-wrapper">
          <input type="text" value={card_title || ''} onChange={(e) => setTitle(e.target.value)} onBlur={(e) => {
            e.preventDefault()
            props.updateCard(props.list_id, props.id, card_title, card_description)

          }} />
          <button onClick={() => { props.deleteCard(props.list_id, props.id) }}>
            X
          </button>
        </div>
        <input type="text" value={card_description || ''} onChange={(e) => setDescription(e.target.value)} onBlur={(e) => {
          e.preventDefault()
          props.updateCard(props.list_id, props.id, card_title, card_description)
        }} />
        {/* <div className="card-description">{props.description}</div> */}
      </div>
    </div >
  );
}

export default Card;