import React from 'react';
import { useHistory } from "react-router-dom";
import "./index.css";


interface HeaderProps {
    name: string
}

const Header: React.FC<HeaderProps> = (props) => {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('token')
        alert('로그아웃 되었습니다!')
        history.push('/login')

    }
    return (
        <div className="kanban-header">
            <div className={'kanban-header-left'}></div>
            <div className={'kanban-header-logo'}/>
            <div className={'kanban-header-right'}>
                <div className={'kanban-header-profile'}>
                    {props.name.charAt(0)}
                </div>
                <div className={'kanban-header-name'}>
                    {props.name} 님
                </div>
                <button className={'kanban-header-logout'} onClick={() => logout()}>
                    logout
                </button>
            </div>
        </div>
);
}

export default Header;