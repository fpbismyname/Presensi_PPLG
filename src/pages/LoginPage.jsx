import React from "react";
import '../styles/pages.css';
import Icon from '../assets/react.svg';

const LoginPage = () => {
  return(
        <div className="Card">
            <div className="InnerCard">
            <h1 className="title">PPLG</h1>
            <form onSubmit={null} className="Forms">
                <input placeholder="Username" type="text" id="User"/>
                <input placeholder="Password" type="password" id="Pass"/>
                <input type="submit" value="Login" id="login"/>
            </form>
            </div>
        </div>
    )
}

export default LoginPage;