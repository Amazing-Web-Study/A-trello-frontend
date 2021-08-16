import React from 'react';
import Button from "../../components/Button";
import './index.css'
import TextInput from "../../components/TextInput";

const Register: React.FC = () => {
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
                    <TextInput placeholder={"Enter email"} style={{marginBottom: '20px'}}/>
                    <TextInput placeholder={"Enter full name"} style={{marginBottom: '20px'}}/>
                    <Button disabled={true} text={"Continue"}/>
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