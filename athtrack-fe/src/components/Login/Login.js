import React, { Component } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";

var jsonObjects = [1, 2];

function loginButton() {
  $("button").click(function () {
    $.ajax({
      url: "http://127.0.0.1:5000/api/v1/team/12/add",
      type: "POST",
      data: { students: JSON.stringify(jsonObjects) },
      dataType: "json",
      /*
      beforeSend: function (x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/j-son;charset=UTF-8");
        }
      },*/

      success: function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
        console.log(data);
      },
    });
  });
}

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
        <button className="Login-button" onClick={loginButton}>
          Login
        </button>
      </body>
    </div>
  );
}

export default Login;
