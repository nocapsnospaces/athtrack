import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <p>EagleFLEX</p>
        </header>
        <body className="Login-body">
          <input className="Usrname-input" value="Email"></input>
          <br></br>
          <input className="Password-input" value="Password"></input>
          <br></br>
          <button className="Login-button">Login</button>
        </body>
      </div>
    );
  }
}

export default Login;
