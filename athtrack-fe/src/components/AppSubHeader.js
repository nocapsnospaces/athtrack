import React, { Component } from "react";

class AppSubHeader extends Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return <h2 style={mystyle}>{this.props.title}</h2>;
  }
}

export default AppSubHeader;
