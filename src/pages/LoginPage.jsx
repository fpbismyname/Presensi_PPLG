import React from "react";
import '../styles/pages.css';

class LoginPage extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const user = document.getElementById("User");
        const pass = document.getElementById("Pass");

        if (user.value == "Admin" && pass.value == "admin123")
        {
            alert("Login Succes");
        } else {
            alert("Login Failed");
        }
    }

    render() {
        return (
            <div className="Card">
                <div className="InnerCard">
                    <h1 className="titleLogin">PPLG</h1>
                    <form onSubmit={this.handleSubmit} className="Forms">
                        <input placeholder="Username" type="text" id="User" />
                        <input placeholder="Password" type="password" id="Pass" />
                        <input type="submit" value="Login" id="login" />
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;