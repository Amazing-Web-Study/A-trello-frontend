import React from 'react';
import './CardListBtn.css';
import axios from 'axios';

const CardListBtn: React.FC = () => {

  async function onAdd() {
    axios.post('http://localhost:3030/list', {
      title: "List Add Test",
      cardList: []
    }).then((res: any) => {
      console.log(res);
    });
  }

  return (
    <div className="cardlistbtn">
      <button onClick={onAdd}>+ Add Another List</button>
    </div>
  );
}

export default CardListBtn;