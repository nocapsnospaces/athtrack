import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
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

export default function Login() {

  const history = useHistory();

  const routeChange = () => {
    let path = `/home`;
    history.push(path);
  };

  const loginAPI = (e) =>  {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var response = fetch("http://localhost:5000/api/v1/login/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: email, password: pass })})
      .then(res => {console.log(res.status)})
       .then(routeChange)

  }

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
      <div className="Login-body">
        <Form 
        //onSubmit = {this.handleSubmit}
        >
        <Form.Group controlId="email" bsSize="large">
        <Form.Control
                  autoFocus
                  type="email"
                />
              </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Control
                  type="password"
                />
        </Form.Group>
          <Button block 
          type="submit"
          onClick = {loginAPI}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
} 