import React, {useState} from "react";
import axios from "axios";


const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    const handleUsernameChange = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    };


    const clickOnLogIn = () => {
        const user = {
            username: username,
            password: password
        };
        axios({
            method: 'POST',
            url: '/login',
            user: user
        }).then(console.log(user))
            .catch(er => {
                console.log("no data sorry ", er);
            });
    }


    return (
        <React.Fragment>
            <div className="App">
                <div className="ui grid" textAlign="center">
                    <div className="ui container">
                        <h2 size="huge">Please sign in</h2>
                        <div className="ui form" size="large">
                            <div className="inline required field">
                                <label>Username</label>
                                <input
                                    name="username"
                                    placeholder="username"
                                    type="text"
                                    value={username}
                                    onChange={handleUsernameChange}
                                />
                            </div>
                            <div className="inline required field">
                                <label>Password</label>
                            <input
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            </div>
                            <button className="ui button" onClick={clickOnLogIn}
                                    type="submit">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<h2>Log in</h2>*/}
            {/*<div className="ui segment">*/}
            {/*    <div className="centered-form">*/}
            {/*        <div className="ui form right-align-form">*/}
            {/*            <div className="fields">*/}
            {/*                <div className="inline required field">*/}
            {/*                    <label>Username</label>*/}
            {/*                    <input type="text" placeholder="Username" value={username} name="username"*/}
            {/*                           onChange={handleUsernameChange}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="fields">*/}
            {/*                <div className="inline required field">*/}
            {/*                    <label>Password</label>*/}
            {/*                    <input type="password" placeholder="Password" value={password} name="password"*/}
            {/*                           onChange={handlePasswordChange}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="ui button" onClick={clickOnLogIn}>Log in</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </React.Fragment>
    )

}

export default LoginForm;
