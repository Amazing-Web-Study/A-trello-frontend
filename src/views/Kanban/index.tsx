import React, { useEffect, useState } from 'react';
import "./Kanban.css";
import Header from "../../components/Header";
import Board from "../../components/Board";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Kanban: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>('')
  useEffect(() => {
    const checkToken = async() => {
      await axios.post('http://localhost:3030/user/token/', {
          token: localStorage.getItem('token')
      }).then((res: any) => {
          console.log(res);
          setName(res.data.name)
      }).catch((err: any) => {
          alert('로그인이 필요합니다.')
          history.push('/login')
      });
    }
    checkToken()
  }, [])

  return (
    <div className="kanban">
        <Header name={name}/>
      <div className="kanban-content">
          <Board/>
      </div>
    </div>
  );
}

export default Kanban;