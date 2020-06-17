import React, { Component } from "react";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import LogoutButton from "../Login/LogoutButton";
import ChangePassword from "./ChangePassword";
//import ChangePassDialog from "./ChangePassView";
import SurveyButton from "./SurveyButton";

class StudentDash extends Component {
  state = {
    seen: false,
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  render() {
    const SurveyTitles = ["Survey 1", "Survey 2", "Survey 3"];
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
        <ChangePassword buttonTitle="Change Password"></ChangePassword>
        <LogoutButton buttonTitle="Logout"></LogoutButton>
      </div>
    );
  }
}
export default StudentDash;
