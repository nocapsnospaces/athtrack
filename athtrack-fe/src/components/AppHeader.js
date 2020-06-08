import React, { Component } from "react";
import { render } from "@testing-library/react";

class AppHeader extends Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={mystyle}>EagleFLEX</h1>
      </div>
    );
  }
}

export default AppHeader;
