import React from 'react';
import "./Kanban.css";


const Kanban: React.FC = () => {
  return (
    <div className="kanban">
      <div className="kanban-header">AWS</div>
      <div className="kanban-content">
        <div className="list">
          Work
          <div className="card">card</div>
          <div className="card">card</div>
          <div className="card">card</div>
          <div className="card">card</div>
          <div className="card">card</div>
        </div>
        <div className="list">Work</div>
        <div className="list">
          Work
          <div className="card-test">card</div>
          <div className="card-test">card</div>
          <div className="card-test">card</div>
        </div>
        <div className="list">Work</div>
        <div className="list">Work</div>
        <div className="list">Work</div>
        <div className="list">Work</div>
        <div className="list">Work</div>
        <div className="list">Work</div>
      </div>
    </div>
  );
}

export default Kanban;