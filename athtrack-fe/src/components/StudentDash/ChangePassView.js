import React, { Component } from "react";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class ChangePassDialog extends Component {
  render() {
    return (
      <div>
        <div className="StudentDash">
          <AppHeader />
          <AppSubHeader title="Change Password" />
        </div>
        <Form>
          <Form.Group controlId="formCurrentPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Current Password"
            />
          </Form.Group>

          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter New Password" />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter New Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Change my password
          </Button>
        </Form>
      </div>
    );
  }
}
