import React from "react";
import {Link} from "react-router-dom";

const LoginButton = () => {



    return (
        <div className="ui container button-container">
            <div className="ui grid">
                <Link to="login" className="ui button">Login</Link>
            </div>
            <div className="ui hidden divider">
            </div>
        </div>
    );
}

export default LoginButton;