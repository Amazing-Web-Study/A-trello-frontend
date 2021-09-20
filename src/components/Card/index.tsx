import React, {useEffect, useRef, useState} from 'react';
import "./Card.css";
import axios from 'axios';

interface CardProps {
    title: string | undefined;
    description: string | undefined;
    id: number;
    list_id: string;
    deleteCard: any;
    setSelectedCardItem: any;
    selectedCardItem: any;
    onAdd: any;
};

const Card: React.FC<CardProps> = (props) => {

    function onDragOver(e: any) {
        // var rect = e.currentTarget.getBoundingClientRect();
        // var x = e.clientX - rect.left;
        // var y = e.clientY - rect.top;
        e.preventDefault()
        // return false;
    }
    function onDrop(e:any, target_list_id: any) {
        const {list_id, id, title, description} = props.selectedCardItem
        props.onAdd(target_list_id, title, description)
        console.log(list_id, id)
        console.log(target_list_id)
        props.deleteCard(list_id, id)
        e.preventDefault()
    }

    return (
        <div className="card-wrapper"
             draggable='true'
             onDragStart={(e) => props.setSelectedCardItem({list_id: props.list_id, id: props.id, title: props.title, description: props.description})}
             onDragEnd={(e) => {
             }}
             onDragOver={(e) => onDragOver(e)}
             onDrop={(e:any) => onDrop(e, props.list_id)}
             data-id={props.id}
        >
            <div className="card">
                <div className="card-title">
                    {props.title}
                    <div className="card-title-wrapper">
                        <button>
                            @
                        </button>
                        <button onClick={() => {
                            props.deleteCard(props.list_id, props.id)
                        }}>
                            X
                        </button>
                    </div>
                </div>
                <div className="card-description">{props.description}</div>
            </div>
        </div>
    );
}

export default Card;