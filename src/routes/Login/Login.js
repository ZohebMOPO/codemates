import React, { useState, useEffect } from "react";
import axios from "axios";
import constants from "../../api/constants";

import "./Login.css"
import { Link, Redirect } from "react-router-dom";
const Login = (props) => {

    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [github, setGithub] = useState(undefined);
    const [twitter, setTwitter] = useState(undefined);
    const [facebook, setFacebook] = useState(undefined);
    const [linkedIn, setLinkedIn] = useState(undefined);
    const [discord, setDiscord] = useState(undefined);

    const [email, setEmail] = useState("");
    const [languages, setLanguages] = useState([]);
    const [skill, setSkill] = useState("");

    const loginHandler = () => {
        axios.post(`${constants.API_HOST}/api/${props.method}`, {
            username,
            password,
            email,
            github,
            discord,
            twitter,
            linkedIn,
            facebook,
            languages,
            skill
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            setRedirect(true);
        })
        .catch(err => alert("Enter valid details"))
    }

    if (redirect) {
        return <Redirect to="/app" />
    }
    return(
        <div className="Login-container">
            <div className="Login">
            <h1>{props.login ? "Login" : "Sign-up"}</h1>
                <div className="Login-data">
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    {
                        props.login ? 
                        null :
                        <React.Fragment>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder="Languages(comma seperated values)" onChange={(e) => setLanguages(e.target.value.split(",").map(splitValue => splitValue.replace(" ", "")))}/>
                            <input type="text" placeholder="Github (optional)" onChange={(e) => setGithub(e.target.value)}/>
                            <input type="text" placeholder="Facebook (optional)" onChange={(e) => setGithub(e.target.value)}/>
                            <input type="text" placeholder="Twitter (optional)" onChange={(e) => setTwitter(e.target.value)}/>
                            <input type="text" placeholder="Discord (optional)" onChange={(e) => setDiscord(e.target.value)}/>
                            <input type="text" placeholder="LinkedIn (optional)" onChange={(e) => setLinkedIn(e.target.value)}/>
                            <select className="Select" onChange={e => setSkill(e.target.selectedOptions[0].text)}>
                                <option>--Select--</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </React.Fragment>
                    }
                </div>
                <button onClick={loginHandler}>{props.login? "Login" : "Register"}</button>
                {props.login ? 
                    <p>Or, <Link to="/register">create a new account</Link></p> :
                    null 
                }
                
            </div>
        </div>
    );
}

export default Login