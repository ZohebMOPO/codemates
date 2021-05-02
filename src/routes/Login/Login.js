import React, { useState, useEffect } from "react";
import axios from "axios";
import constants from "../../api/constants";

import "./Login.css"
import { Link } from "react-router-dom";
const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [languages, setLanguages] = useState([]);
    const [skill, setSkill] = useState("");

    const loginHandler = () => {
        axios.post(`${constants.API_HOST}/api/${props.method}`, {
            username,
            password,
            email,
            languages: `${languages}`,
            skill
        })
        .then(res => {
            console.log(res.data, "Success!!!!")
        })
        .catch(err => alert("Enter valid details"))
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
                            <input type="text" placeholder="Languages(comma seperated values)" onChange={(e) => setLanguages(e.target.value.split(","))}/>
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