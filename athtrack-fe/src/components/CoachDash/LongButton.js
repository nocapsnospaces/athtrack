import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";

function LongButton(props) {
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

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
      <button style={mystyle} onClick={routeChange}>
        {props.buttonTitle}
      </button>
    </div>
  );
}

export default LongButton;
