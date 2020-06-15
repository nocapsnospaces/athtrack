import React, { Component } from "react";

class AppHeader extends Component {
  render() {
    const mystyle = {
      color: "black",
      fontFamily: "Calibri",
      paddingTop: "10px",
      paddingBottom: "5px",
      textDecoration: "overline",
      margin: "10px auto",
    };
    return (
      <div>
        <h1 style={mystyle}>EagleFLEX</h1>
      </div>
    );
  }
}

export default AppHeader;
