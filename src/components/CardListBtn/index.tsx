import React from 'react';
import './CardListBtn.css';
import axios from 'axios';


interface CardListBtnProps {
  addList: any;
}
const CardListBtn: React.FC<CardListBtnProps> = (props) => {
  return (
    <div className="cardlistbtn">
      <button onClick={() => props.addList()}>+ Add Another List</button>
    </div>
  );
}

export default CardListBtn;