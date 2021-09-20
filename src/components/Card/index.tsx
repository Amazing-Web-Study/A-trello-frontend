import React, { useEffect, useRef, useState } from 'react';
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
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();

  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [])

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-title-wrapper">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={(e) => { console.log(e) }} />
          <button onClick={() => { props.deleteCard(props.list_id, props.id) }}>
            X
          </button>
        </div>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} onBlur={(e) => {
          console.log(e)
        }} />
        {/* <div className="card-description">{props.description}</div> */}
      </div>
    </div >
  );
}

export default Card;