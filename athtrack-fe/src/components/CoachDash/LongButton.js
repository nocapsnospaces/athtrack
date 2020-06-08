import React, { Component } from "react";

class LongButton extends Component {
  render() {
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
      <div>
        <button onClick={console.log("Clicked!")} style={mystyle}>
          {this.props.buttonTitle}
        </button>
      </div>
    );
  }
}

export default LongButton;
