import React from "react";
import '../styles/pages.css';

class LoginPage extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (document.getElementById("User").value === "Admin" && document.getElementById("Pass").value === "Admin123") {
            alert("Login Success");
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
// const LoginPage = () => {

//     const user = document.getElementById("User");
//     const pass = document.getElementById("Pass");
//     constructor(props) {
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(event)
//     return (
//         <div className="Card">
//             <div className="InnerCard">
//                 <h1 className="titleLogin">PPLG</h1>
//                 <form onSubmit="" className="Forms">
//                     <input placeholder="Username" type="text" id="User" />
//                     <input placeholder="Password" type="password" id="Pass" />
//                     <input type="submit" value="Login" id="login" />
//                 </form>
//             </div>
//         </div>
//     )
// }

export default LoginPage;