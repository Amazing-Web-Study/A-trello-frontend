import React from 'react';
import './index.css'

interface ButtonProps {
    disabled: boolean
    onclick?: any
    text: string
    style?: any
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div>
            <button className={'blue-button'} disabled={props.disabled} onClick={() => {props.onclick()}} style={props.style}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;