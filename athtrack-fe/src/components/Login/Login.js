import React, { Component } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login(props) {
  function loginAPI(e) {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var response = fetch("http://localhost:3000/api/v1/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: pass }),
    });

    console.log(response.status);
  }

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
      <div className="Login-body">
        <form>
          <input
            id="email"
            className="Usrname-input"
            defaultValue="Email"
            type="text"
          ></input>
          <br></br>
          <input
            id="pass"
            className="Password-input"
            defaultValue="Password"
            type="password"
          ></input>
          <br></br>
          <button className="Login-button" onClick={loginAPI}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
