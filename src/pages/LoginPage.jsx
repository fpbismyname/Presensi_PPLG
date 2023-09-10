import React, { useEffect, useState } from "react";
import "../styles/pages.css";
import { useNavigate } from "react-router-dom";

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
  const [Log, setLog] = useState(false);

  // Debug Variable
  useEffect(() => {
    console.clear();
    console.log("nama :" + username + "| Password :" + password);
    console.log(Log);
  });
  
  useEffect(() => {
    console.clear();
    console.log("nama :" + username + "| Password :" + password);
    console.log(Log);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === users[0].username && password === users[0].password) {
      setLog(true);
      navigate('/beranda')
    } else {
      setLog(false);
      navigate('/')
    }
  };
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
      </div>
    </div>
  );
};

export default LoginPage;
