import React, { useEffect, useState } from 'react';
import "./index.css";
import CardList from '../../components/CardList/'
import CardListBtn from '../../components/CardListBtn/'
import axios from "axios";


const Board: React.FC = () => {
    const [data, setData] = useState([
        {
            id: 1,
            title: "To-Do",
            card: [{
                title: 'test',
                description: 'test1'
            }, {
                title: 'test2',
                description: 'test12'
            }, {
                title: 'test3',
                description: 'test13'
            }
            ]
        },
        {
            id: 2,
            title: "Working",
            card: [{
                title: 'test',
                description: 'test1'
            }, {
                title: 'test2',
                description: 'test12'
            }, {
                title: 'test3',
                description: 'test13'
            }
            ]
        },
        {
            id: 3,
            title: "Done",
            card: [{
                title: 'test',
                description: 'test1'
            }, {
                title: 'test2',
                description: 'test12'
            }, {
                title: 'test3',
                description: 'test13'
            }
            ]
        }
    ]);

    const [cardList, setCardList] = useState<any>()

    useEffect(() => {
        async function fetchList() {
            axios.get('http://localhost:3030/list').then((res: any) => {
                setCardList(res.data)
            })
        }

        fetchList()
    }, []);

    return (
        <div className="board">
            {
                cardList?.map((e: any, i: any) => {
                    // console.log(e._id)
                    return (
                        <CardList key={i} _id={e._id} title={e.title} card={e.cardList} />
                    )
                })
            }
            <CardListBtn />
        </div>
    );
}

export default Board;