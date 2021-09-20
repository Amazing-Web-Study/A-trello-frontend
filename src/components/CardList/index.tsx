import React, { useEffect, useState } from 'react';
import './index.css'
import Card from '../Card'
import axios from 'axios';

interface CardProps {
    title: string;
    description?: string;
}

interface CardListProps {
    _id: string;
    title: string;
    card: CardProps[];
    deleteCard: any;
    deleteList: any;
    addCard: any;
}

const CardList: React.FC<CardListProps> = (props) => {

    return (
        <div className="cardlist">
            <div className="cardlist-title">
                <div className="cardlist-title-text">{props.title}</div>
                <div className="cardlist-title-menu">
                    <div className="cardlist-title-menu-icon">+</div>
                    <div onClick={() => props.deleteList(props._id)}>x</div>
                </div>
            </div>
            <div className="cardlist-list">
                {
                    props.card?.map((e: any, i: any) => {
                        return (
                            <Card key={i} list_id={props._id} id={e._id} title={e.title} description={e.description} deleteCard={props.deleteCard} />
                        )
                    })
                }
            </div>

            <div className="cardlist-footer">
                <button onClick={() => props.addCard(props._id)}>+ Add A Card</button>
            </div>
        </div>
    );
}

export default CardList;