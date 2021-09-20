import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import './index.css'
import TextInput from "../../components/TextInput";
import axios from "axios";

const Register: React.FC = () => {
    const history = useHistory();
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[name, setName] = useState()

    const addUser = async() => {
        await axios.post('http://localhost:3030/user', {
            id: email,
            password,
            name
        }).then((res: any) => {
            console.log(res);
            alert('회원가입이 완료 되었습니다!')
            history.push('/login')
        });
    }

    return (
        <div className={'inner-section'}>
            <img
                alt="Trello"
                className="trello-main-logo"
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
            />
            <div className={'section-wrapper'}>
                <div className={'signup-form'}>
                    <h1 className={'signup-h1'}>
                        Sign up for your account
                    </h1>
                    <TextInput placeholder={"Enter email"} style={{marginBottom: '20px'}} onChange={setEmail}/>
                    <TextInput placeholder={"Enter password"} style={{marginBottom: '20px'}} onChange={setPassword}/>
                    <TextInput placeholder={"Enter full name"} style={{marginBottom: '20px'}} onChange={setName}/>
                    <Button disabled={false} text={"Continue"} onclick={addUser}/>
                    <hr/>

                    <span className={'bottom-form-link'}>
                    <a href={'/login'}>Already have an account? Log In</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;