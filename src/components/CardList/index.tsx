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
    selectedCardItem: any;
    setSelectedCardItem: any;
}

const CardList: React.FC<CardListProps> = (props) => {

    async function onAdd(list_id: any, title?:string, description?:string) {
        await axios.post(`http://localhost:3030/list/${list_id}/card`, {
            title: title ?? "Added Card",
            description: description ?? "Added Card by Button"
        }).then((res: any) => {
            console.log(res.data);
        });
    }

    const DeleteList = async() => {
        console.log("id: ", props._id);
        await axios.delete(`http://localhost:3030/list/${props._id}`).then((res: any) => {
            console.log(res.data);
        });
        window.location.reload();
    }

    return (
        <div className="cardlist">
            <div className="cardlist-title">
                <div className="cardlist-title-text">{props.title}</div>
                <div className="cardlist-title-menu">
                    <div className="cardlist-title-menu-icon">+</div>
                    <div onClick={() => DeleteList()}>x</div>
                </div>
            </div>
            <div className="cardlist-list">
                {
                    props.card?.map((e: any, i: any) => {
                        return (
                            <Card key={i} list_id={props._id} id={e._id} title={e.title} description={e.description} onAdd={onAdd} deleteCard={props.deleteCard} setSelectedCardItem={props.setSelectedCardItem} selectedCardItem={props.selectedCardItem}/>
                        )
                    })
                }
            </div>

            <div className="cardlist-footer">
                <button onClick={() => onAdd(props._id)}>+ Add A Card</button>
            </div>
        </div>
    );
}

export default CardList;