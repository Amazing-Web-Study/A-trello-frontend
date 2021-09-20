import React from 'react';
import './index.css'

interface TextInputProps {
    onChange?: any
    placeholder?: string
    style?: any
}

const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <input type={"text"}
               className={'text-input'}
               onChange={e => props.onChange(e.target.value)}
               placeholder={props.placeholder}
               style={props.style}/>
    );
}

export default TextInput;