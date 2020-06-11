import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  loginAPI = e =>  {
    e.preventDefault();
    this.setState({isSubmitting:true});

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var response = fetch("http://localhost:5000/api/v1/login/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email: email, password: pass })})
      .then(res => {console.log(res.status)})

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
  return (
    <div className="Login">
      <header className="Login-header">
        <p>EagleFLEX</p>
      </header>
      <div className="Login-body">
        <Form onSubmit = {this.handleSubmit}>
        <Form.Group controlId="email" bsSize="large">
        <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
        </Form.Group>
          <Button block 
          disabled={!this.validateForm()}
          type="submit"
          onClick = {this.loginAPI}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
} } 
