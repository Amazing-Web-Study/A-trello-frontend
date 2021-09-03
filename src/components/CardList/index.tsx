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
}

const CardList: React.FC<CardListProps> = (props) => {

    async function onAdd() {
        console.log("id: ", props._id);
        await axios.post(`http://localhost:3030/list/${props._id}/card`, {
            title: "Added Card",
            description: "Added Card by Button"
        }).then((res: any) => {
            console.log(res.data);
        });
    }

    return (
        <div className="cardlist">
            <div className="cardlist-title">
                <div className="cardlist-title-text">{props.title}</div>
                <div className="cardlist-title-menu">+</div>
            </div>
            {
                props.card?.map((e: any, i: any) => {
                    return (
                        <Card key={i} title={e.title} description={e.description} />
                    )
                })
            }
            <div className="cardlist-footer">
                <button onClick={onAdd}>+ Add A Card</button>
            </div>
        </div>
    );
}

export default CardList;