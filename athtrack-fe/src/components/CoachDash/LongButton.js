import React, { Component } from "react";

class LongButton extends Component {
  render() {
    const mystyle = {};
    return (
      <div>
        <button onClick={console.log("Clicked!")}>
          {this.props.buttonTitle}
        </button>
      </div>
    );
  }
}

export default LongButton;
