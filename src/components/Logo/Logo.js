import React from "react";

import "./Logo.css";

const logo = props => (
  <div>
    <img
      alt="logo"
      height="25"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: "7px",
        paddingTop: "2px"
      }}
      src={require("../../assets/ghost-logo.svg")}
    />
    <h1
      className="logo"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      Ghost
    </h1>
  </div>
);

export default logo;
