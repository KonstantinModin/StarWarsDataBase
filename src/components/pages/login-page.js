import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isloggedIn, onLogin }) => {
    
    if (!isloggedIn) return (
        <div>
            <p>Login to see the secret page!</p>
            <button
                className="btn btn-primary"
                onClick={onLogin}>
                Login
            </button>
        </div>
    );
    return <Redirect to="/" />;
};

export default LoginPage;