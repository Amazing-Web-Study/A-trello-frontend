import React, { useEffect, useState } from 'react';
import "./index.css";
import CardList from '../../components/CardList/'
import CardListBtn from '../../components/CardListBtn/'
import axios from "axios";


const Board: React.FC = () => {
    const [selectedCardItem, setSelectedCardItem] = useState<any>()
    const [cardList, setCardList] = useState<any>()

    useEffect(() => {
        fetchList()
    }, []);

    const addList = async () => {
        axios.post('http://localhost:3030/list', {
            title: "List Add",
            cardList: []
        }).then(async (res: any) => {
            console.log(res);
            await fetchList()
        });
    }

    const updateList = async (list_id: string, list_title: string) => {
        await axios.put(`http://localhost:3030/list/${list_id}`, {
            title: `${list_title}`
        }).then(async (res: any) => {
            console.log(res.data);
            await fetchList();
        });
    }

    const addCard = async (list_id: string, title?: string, description?: string) => {
        await axios.post(`http://localhost:3030/list/${list_id}/card`, {
            title: title ?? "Added Card",
            description: description ?? "Added Card by Button"
        }).then(async (res: any) => {
            console.log(res.data);
            await fetchList()
        });
    }

    const updateCard = async (list_id: string, id: string, card_title: string, card_description: string) => {
        await axios.put(`http://localhost:3030/list/${list_id}/${id}`, {
            title: `${card_title}`,
            description: `${card_description}`
        }).then(async (res: any) => {
            console.log(res.data);
            await (fetchList());
        });
    }

    const deleteList = async (list_id: string) => {
        await axios.delete(`http://localhost:3030/list/${list_id}`).then(async (res: any) => {
            console.log(res.data);
            await fetchList()
        });
    }

    const deleteCard = async (list_id: string, id: string) => {
        await axios.delete(`http://localhost:3030/list/${list_id}/${id}`).then(async (res: any) => {
            console.log(res.data);
            await fetchList()
        });
    }
    const fetchList = async() => {
        await axios.get('http://localhost:3030/list').then((res: any) => {
            setCardList(res.data)
        })
    }

    return (
        <div className="board">
            {
                cardList?.map((e: any, i: any) => {
                    return (
                        <CardList key={i} _id={e._id} title={e.title} card={e.cardList} deleteCard={deleteCard} deleteList={deleteList} addCard={addCard} updateCard={updateCard} updateList={updateList} setSelectedCardItem={setSelectedCardItem} selectedCardItem={selectedCardItem}/>
                    )
                })
            }
            <CardListBtn addList={addList} />
        </div>
    );
}

export default Board;