import React from 'react';
import "./Login.css";

const Example: React.FC = () => {
    return (
        <div className="login">
            <div className="login-box">
                <img
                    alt="Trello"
                    className="trello-main-logo"
                    src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
                />
                <div className="login-box-input-box">
                    <div className="login-box-input"><input type="text" placeholder="Enter email"/></div>
                    <div className="login-box-input"><input type="text" placeholder="Enter password"/></div>
                    <div className="login-box-btn"><button>Log In</button></div>
                </div>
                <div className="login-box-signup">Sign Up</div>
            </div>
        </div>
    );
}

export default Example;