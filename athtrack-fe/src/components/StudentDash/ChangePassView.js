import React, { Component } from "react";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class ChangePassDialog extends Component {
  render() {
    const mystyle = {
      width: "200px",
      height: "30px",
      backgroundColor: "#B23F14",
      border: "2px solid #ffffff",
      color: "white",
      borderRadius: "8px",
      fontSize: "13px",
      textTransform: "Uppercase",
      marginTop: "70px",
    };

    const passstyle = {
      marginTop: "40px",
      marginBottom: "30px",
    };

    const labelstyle = {
      width: "200px",
      height: "30px",
      fontSize: "13px",
      verticalAlign: "bottom",
      marginRight: "30px",
    };
    return (
      <div>
        <div style={{ marginBottom: "100px" }}>
          <AppHeader />
        </div>

        <div
          style={{
            width: "400px",
            height: "400px",
            border: "2px solid #B23F14",
            borderRadius: "8px",
            fontSize: "13px",
            margin: "10px auto",
          }}
        >
          <AppSubHeader title="Change Password" />

          <Form>
            <Form.Group style={passstyle} controlId="formCurrentPassword">
              <span style={{ paddingRight: "5px" }}>
                <Form.Label style={labelstyle}>Current Password</Form.Label>
              </span>
              <Form.Control
                type="password"
                placeholder="Enter Current Password"
              />
            </Form.Group>

            <Form.Group style={passstyle} controlId="formNewPassword">
              <span style={{ paddingRight: "24px" }}>
                <Form.Label style={labelstyle}>New Password</Form.Label>
              </span>
              <Form.Control type="password" placeholder="Enter New Password" />
            </Form.Group>

            <Form.Group style={passstyle} controlId="formConfirmPassword">
              <span style={{ paddingRight: "3px" }}>
                <Form.Label style={labelstyle}>Confirm Password</Form.Label>
              </span>
              <Form.Control type="password" placeholder="Enter New Password" />
            </Form.Group>

            <Button style={mystyle} variant="primary" type="submit">
              Change my password
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
