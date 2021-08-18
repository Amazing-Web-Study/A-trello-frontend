import React from 'react';
import "./index.css";


const Header: React.FC = () => {
    return (
        <div className="kanban-header">
            <div className={'kanban-header-left'}></div>
            <div className={'kanban-header-logo'}/>
            <div className={'kanban-header-right'}>
                <div className={'kanban-header-profile'}>
                    F
                </div>
            </div>
        </div>
);
}

export default Header;