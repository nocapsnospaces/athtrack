import React, { Component } from "react";

class TeamButton extends Component {
  render() {
    const mystyle = {
      width: "200px",
      height: "30px",
      backgroundColor: "white",
      borderRadius: "20px",
      border: "3px solid #b23f14",
      fontSize: "13px",
      verticalAlign: "bottom",
      marginTop: "40px",
    };
    return (
      <button onClick={console.log("Clicked!")} style={mystyle}>
        {this.props.buttonTitle}
      </button>
    );
  }
}

export default TeamButton;
