import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TeamButton extends Component {
  render() {
    const mystyle = {};
    return (
      <button onClick={console.log("Clicked!")}>
        {this.props.buttonTitle}
      </button>
    );
  }
}

export default TeamButton;
