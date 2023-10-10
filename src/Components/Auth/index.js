import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './auth.css';
import Login from '../Login/Login';
import Password from '../Password/Password';
import Otp from '../Otp/Otp';

function Auth() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const [renderType, setRenderType] = useState("login")

    const handleProceed = (val) => {
        setRenderType(val)
    };

    return (
        <div className="container">
            {
                renderType === "login" ? <Login handleProceed={handleProceed} />
                    : renderType === "pwd" ? <Password handleProceed={handleProceed} />
                        : renderType === "otp" ? <Otp />
                            : null
            }
        </div>
    );
}

export default Auth;
