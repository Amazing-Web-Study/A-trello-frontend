import React from 'react';
import "./Kanban.css";
import Header from "../../components/Header";
import Board from "../../components/Board";


const Kanban: React.FC = () => {
  return (
    <div className="kanban">
        <Header/>
      <div className="kanban-content">
          <Board/>
      </div>
    </div>
  );
}

export default Kanban;