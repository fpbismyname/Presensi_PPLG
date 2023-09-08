import React, { useEffect, useState } from "react";
import "../styles/pages.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = [
    {
      username: "Admin",
      password: "admin123",
    },
  ];
  const navigate = useNavigate();
  const [Log, setLog] = useState(
    localStorage.getItem(localStorage.getItem("Log") || false)
  );
  const [empty, setEmpty] = useState("");
  // useEffect(()=>{
  //     console.clear()
  //     console.log("nama :"+username+"| Password :"+password)
  // })

  useEffect(() => {
    if (username === "" || password === "") {
      setEmpty("Username / Password tidak boleh dikosongkan !");
    } else {
        setEmpty("");
    }
  },[username][password]);

  const handleSubmit = (e) => {
    if (username === users[0].username && password === users[0].password) {
      localStorage.setItem("Log", true);
      navigate("/beranda");
    } else {
      localStorage.setItem("Log", false);
      navigate("/");
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
