import React, { Component } from "react";
import AppHeader from "../AppHeader";
import AppSubHeader from "../AppSubHeader";
import SaveButton from "./SaveButton";

class TakeSurvey extends Component {
  render() {
    return (
      <div className="TakeSurvey">
        <AppHeader />
        <AppSubHeader title="Survey" />

        <div
          style={{
            position: "absolute",
            bottom: "0px",
            width: "100%",
            height: "60px",
          }}
        >
          <SaveButton buttonTitle="Save"></SaveButton>
        </div>
      </div>
    );
  }
}

export default TakeSurvey;
