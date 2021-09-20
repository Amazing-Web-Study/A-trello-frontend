import React, { useEffect, useState } from 'react';
import './index.css'
import Card from '../Card'
import axios from 'axios';
import { setSyntheticTrailingComments } from 'typescript';

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
    updateCard: any;
    updateList: any;
    selectedCardItem: any;
    setSelectedCardItem: any;
}

const CardList: React.FC<CardListProps> = (props) => {
    const [list_title, setTitle] = useState<any>();

    useEffect(() => {
        setTitle(props.title);
    }, [])

    return (
        <div className="cardlist">
            <div className="cardlist-title">
                <input type="text" value={list_title || ''} onChange={(e) => setTitle(e.target.value)} onBlur={(e) => {
                    e.preventDefault();
                    props.updateList(props._id, list_title);
                }} />
                {/* <div className="cardlist-title-text">{props.title}</div> */}
                <div className="cardlist-title-menu">
                    <div className="cardlist-title-menu-icon">+</div>
                    <div style={{ cursor: "pointer" }} onClick={() => props.deleteList(props._id)}>x</div>
                </div>
            </div>
            <div className="cardlist-list">
                {
                    props.card?.map((e: any, i: any) => {
                        return (
                            <Card key={i} list_id={props._id} id={e._id} title={e.title} description={e.description} deleteCard={props.deleteCard} updateCard={props.updateCard} setSelectedCardItem={props.setSelectedCardItem} selectedCardItem={props.selectedCardItem}/>
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