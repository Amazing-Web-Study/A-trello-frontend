import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Example: React.FC = () => {
    const history = useHistory();
    const[email, setEmail] = useState<string>()
    const[password, setPassword] = useState<string>()

    useEffect(() => {
        const checkToken = async() => {
            await axios.post('http://localhost:3030/user/token/', {
                token: localStorage.getItem('token')
            }).then((res: any) => {
                console.log(res);
                history.push('/')
            }).catch((err: any) => {
                console.log(err);
            });
        }
    checkToken()
    }, [])

    const login = async() => {
        await axios.post('http://localhost:3030/login/', {
            id: email,
            password
        }).then((res: any) => {
            console.log(res)
            localStorage.setItem('token', res.data.keyValue._id)
            alert('로그인 성공!')
            history.push('/')
        }).catch((err: any) => {
            console.log(err)
            alert('아이디와 비밀번호를 확인해주세요')
            setEmail('')
            setPassword('')
        });
    }
    return (
        <div className="login">
            <div className="login-box">
                <img
                    alt="Trello"
                    className="trello-main-logo"
                    src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
                />
                <div className="login-box-input-box">
                    <div className="login-box-input">
                        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="login-box-input">
                        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="login-box-btn">
                        <button onClick={() => login()}>Log In</button>
                    </div>
                </div>
                <div className="login-box-signup" onClick={() => history.push('/signup')}>Sign Up</div>
            </div>
        </div>
    );
}

export default Example;