import React, { Component } from "react";

class AppSubHeader extends Component {
  render() {
    const mystyle = {
      color: "#B23F14",
      padding: "5px",
      fontFamily: "Optima",
      textTransform: "Uppercase",
      letterSpacing: "10px",
      marginB: "10px auto",
    };
    return <h2 style={mystyle}>{this.props.title}</h2>;
  }
}

export default AppSubHeader;
