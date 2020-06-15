import React, { Component } from "react";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import LogoutButton from "../Login/LogoutButton";
import ChangePassword from "./ChangePassword";
import ChangePassDialog from "./ChangePassDialog";
import SurveyButton from "./SurveyButton";

class StudentDash extends Component {
  state = { ChangePassword: false };

  render() {
    const SurveyTitles = ["Survey 1", "Survey 2", "Survey 3"];
    const mystyle = {
      width: "400px",
      height: "30px",
      backgroundColor: "#B23F14",
      border: "2px solid #ffffff",
      color: "white",
      borderRadius: "8px",
      fontSize: "13px",
      textTransform: "Uppercase",
      marginTop: "5px",
    };
    return (
      <div className="StudentDash">
        <AppHeader />
        <AppSubHeader title="Assigned Surveys" />

        {SurveyTitles.map(function (survey) {
          return (
            <div>
              <SurveyButton buttonTitle={survey}></SurveyButton>
            </div>
          );
        })}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: "60px",
          }}
        >
          <button
            style={mystyle}
            onClick={(e) => this.setState({ ChangePassword: true })}
          >
            Change Password
          </button>

          <ChangePassDialog
            ChangePassword={this.state.ChangePassword}
            onClose={(e) => this.setState({ ChangePassword: false })}
          >
            Change Password
          </ChangePassDialog>

          <LogoutButton buttonTitle="Logout"></LogoutButton>
        </div>
      </div>
    );
  }
}
export default StudentDash;
