import React, { useEffect, useState } from "react";
// import "../styles/pages.css";
import "../styles/LoginPage.css";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, Navigate } from "react-router-dom";

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
  const [empty, setEmpty] = useState();

  //Safe Login Account
  const [Log, setLog] = useState(localStorage.getItem("Log", null));
  // const Logged = JSON.stringify(Log);

  // Debug Variable
  useEffect(() => {
    console.clear();
    console.log("nama :" + username + "| Password :" + password);
    console.log(typeof Log, "|", Log);
  });

  useEffect(() => {
    if (Log === "true") {
      navigate("/beranda");
    } else if (Log === "false") {
      navigate("/");
    }
  }, [Log]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === users[0].username && password === users[0].password) {
      // navigate('/beranda')
      localStorage.setItem("Log", true);
      setLog(localStorage.getItem("Log"));
    } else {
      setEmpty("Username / Password tidak tepat !");
      localStorage.setItem("Log", false);
      setLog(localStorage.getItem("Log"));
      // navigate('/')
    }
  };

  // const logTrue = () => {
  //     setLog(true)
  //     alert("Log is true")
  // }
  // const logFalse = () => {
  //     setLog(false)
  //     alert("Log is false")
  // }

  return (
    <div className="LP">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Label>PPLG</Form.Label>
          <Form.Group className="mb-3">
            <Form.Text>{empty}</Form.Text>
            <Form.Control
              type="Text"
              id="User"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="Password"
              id="Pass"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" id="Login">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;

// <div className="Card">
//   <div className="InnerCard">
//     <h1 className="titleLogin">PPLG</h1>
//     <p className="FormAlert">{empty}</p>
//     <form onSubmit={handleSubmit} className="Forms">
//       <input
//         placeholder="Username"
//         type="text"
//         id="User"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         placeholder="Password"
//         type="text"
//         id="Pass"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input type="submit" value="Login" id="login" />
//     </form>
//     {/* <button onClick={logTrue}>Log True</button>
//             <button onClick={logFalse}>Log False</button> */}
//   </div>
// </div>
