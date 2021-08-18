import React, {useState} from 'react';
import "./index.css";
import CardList from '../../components/CardList/'


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
    return (
        <div className="board">
            {
            data.map((e, i) => {
                return (
                <CardList key={i} title={e.title} card={e.card} />
                )
            })
            }
        </div>
    );
}

export default Board;