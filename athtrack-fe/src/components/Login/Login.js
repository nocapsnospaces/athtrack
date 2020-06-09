import React, { Component } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/home`;
    history.push(path);
  };

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
        <button className="Login-button" onClick={routeChange}>
          Login
        </button>
      </body>
    </div>
  );
}

export default Login;
