import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  
  const handleResponse = (response) => {
    if (response.status === 200) {
      let path = `/coachdash`;
      history.push(path);
    }
  };

  const doLogin = (e) =>  {
    e.preventDefault();

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    fetch(
      "http://localhost:3000/api/v1/login/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, password: pass })}
    ).then(response => {handleResponse(response)});
  }
  
  return (
    <div className="Login">
      <header className="Login-header">
        <p>EagleFLEX</p>
      </header>
      <div className="Login-body">
        <Form>
          <Form.Group controlId="email">
            <Form.Control autoFocus type="email"/>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password"/>
          </Form.Group>
          <Button block type="submit" onClick={doLogin}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
