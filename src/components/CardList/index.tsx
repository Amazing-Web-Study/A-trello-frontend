import React, { useEffect, useState} from 'react';
import './index.css'
import axios from 'axios';

interface CardProps {
    title: string;
    description?: string;
}

interface CardListProps {
    title: string;
    card: CardProps[];
}

const CardList: React.FC<CardListProps> = (props) => {
    return (
        <div className="cardlist">
            <div className="cardlist-title">
                <div className="cardlist-title-text">{props.title}</div>
                <div className="cardlist-title-menu">+</div>
            </div>
            {
                props.card?.map((e, i) => {
                    return (
                        <div className="card" key={i}>
                            {e.title}
                            {e.description}
                        </div>
                    )
                })
            }
            <div className="cardlist-footer">
                <button>+ Add A Card</button>
            </div>
        </div>
    );
}

export default CardList;