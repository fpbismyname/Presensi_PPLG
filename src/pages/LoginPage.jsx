import React, { useEffect, useState } from "react";
import "../styles/pages.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useLocalStorage } from ''

const LoginPage = () => {
    //Login System
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const users = [
        {
            username: "Admin",
            password: "admin123",
        },
    ];

    //Navigate system
    const navigate = useNavigate();

    //Form Empty Exception
    const [empty, setEmpty] = useState("");

    //Safe Login Account
    const [Log, setLog] = useState(useLocalStorage);

    // Debug Variable
    useEffect(() => {
        console.clear();
        console.log("nama :" + username + "| Password :" + password);
        console.log(Log);
    });

    // useEffect(() => {
    //     setLog(localStorage.setItem("Login", false))
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === users[0].username && password === users[0].password) {
            // setLog(localStorage.setItem("Login", true))
            // navigate('/beranda')
        } else if (username === "" && password === "" || username === null && password === null) {
            // setLog(localStorage.setItem("Login", false))
            // navigate('/')
        }
    };

    const logTrue = () => {
        setLog(localStorage.setItem('Log', true))
        alert("Log is true")
    }
    const logFalse = () => {
        setLog(localStorage.setItem('Log', false))
        alert("Log is false")
    }

    return (
        <div className="Card">
            <div className="InnerCard">
                <h1 className="titleLogin">PPLG</h1>
                <p className="FormAlert">{empty}</p>
                <form onSubmit={handleSubmit} className="Forms">
                    <input
                        placeholder="Username"
                        type="text"
                        id="User"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        type="text"
                        id="Pass"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="Login" id="login" />
                </form>
                <button onClick={logTrue}>Log True</button>
                <button onClick={logFalse}>Log False</button>
            </div>
        </div>
    );
};

export default LoginPage;
