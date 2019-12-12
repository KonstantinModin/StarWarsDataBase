import React from 'react';
// import { Redirect } from 'react-router-dom';

const SecretPage = ({ isloggedIn }) => {
    // if (isloggedIn) {
        return (
            <div className="jumbotron text-center">
                <h3>This is the secret page!</h3>
            </div>
        );
    // }
    // return <Redirect to="/login" />;
};

export default SecretPage;