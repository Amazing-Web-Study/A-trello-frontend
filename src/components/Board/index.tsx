import React, { useEffect, useState } from 'react';
import "./index.css";
import CardList from '../../components/CardList/'
import CardListBtn from '../../components/CardListBtn/'
import axios from "axios";


const Board: React.FC = () => {
    const [cardList, setCardList] = useState<any>()

    useEffect(() => {
        fetchList()
    }, []);


    const addList = async() => {
        await axios.post('http://localhost:3030/list', {
          title: "List Add",
          cardList: []
        }).then(async(res: any) => {
          console.log(res);
          await fetchList()
        });
      }
    
    const addCard = async(list_id: string) => {
        await axios.post(`http://localhost:3030/list/${list_id}/card`, {
            title: "Added Card",
            description: "Added Card by Button"
        }).then(async (res: any) => {
            console.log(res.data);
            await fetchList()
        });
    }

    const deleteList = async(list_id: string) => {
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
                        <CardList key={i} _id={e._id} title={e.title} card={e.cardList} deleteCard={deleteCard} deleteList={deleteList} addCard={addCard}/>
                    )
                })
            }
            <CardListBtn addList={addList}/>
        </div>
    );
}

export default Board;