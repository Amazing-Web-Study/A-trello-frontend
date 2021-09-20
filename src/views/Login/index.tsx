import React from 'react';
import "./Login.css";

const Example: React.FC = () => {
    return (
        <div className="login">
            <div className="login-box">
                <div className="login-box-title">Log in to A-Trello</div>
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