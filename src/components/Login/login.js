import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css"

import { Link } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        axios.post("http://localhost:8080/api/login", {
            username,
            password
        })
        .then(res => {
            console.log(res.data, "Success!!!!")
        })
        .catch(err => alert("Enter valid details"))
    }


    return(
        <div className="Login-container">
            <h1>Login</h1>
            <div className="Login">
                <div className="Login-data">
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={loginHandler}>Login</button>
                <p>Or, <Link to="/register">create a new account</Link></p>
            </div>
        </div>
    );
}

export default Login
