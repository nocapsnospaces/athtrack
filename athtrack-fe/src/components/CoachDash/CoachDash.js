import React, { Component } from "react";
import "./CoachDash.css";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import TeamButton from "./TeamButton";
import LongButton from "./LongButton";

class CoachDash extends Component {
  render() {
    const teamTitles = ["Team 1", "Team 2", "Team 3"];
    return (
      <div className="CoachDash">
        <AppHeader />
        <AppSubHeader title="Welcome" />
        {teamTitles.map(function (team) {
          return (
            <div>
              <TeamButton buttonTitle={team}></TeamButton>
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
          <LongButton buttonTitle="Manage"></LongButton>
          <LongButton buttonTitle="Logout"></LongButton>
        </div>
      </div>
    );
  }
}

export default CoachDash;
