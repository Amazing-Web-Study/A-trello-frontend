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
  setSelectedCardItem: any;
  selectedCardItem: any;
  addCard: any;
};

const Card: React.FC<CardProps> = (props) => {
  const [card_title, setTitle] = useState<any>();
  const [card_description, setDescription] = useState<any>();

  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
  }, [])

  function onDragOver(e: any) {
      // var rect = e.currentTarget.getBoundingClientRect();
      // var x = e.clientX - rect.left;
      // var y = e.clientY - rect.top;
    // return false;
      e.preventDefault()
  }
      
  function onDrop(e:any, target_list_id: any) {
      const {list_id, id, title, description} = props.selectedCardItem
      props.addCard(target_list_id, title, description)
      props.deleteCard(list_id, id)
      e.preventDefault()
  }
      
  return (
    <div
      className="card-wrapper"
      draggable='true'
      onDragStart={(e) => props.setSelectedCardItem({list_id: props.list_id, id: props.id, title: props.title, description: props.description})}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e:any) => onDrop(e, props.list_id)}
      data-id={props.id}
    >
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