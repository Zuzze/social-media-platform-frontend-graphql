import React from "react";

import "./Logo.css";

const logo = props => (
  <h1 className="logo">
    <img
      alt="logo"
      height="15"
      style={{ marginRight: "7px", paddingTop: "2px" }}
      src={require("../../assets/ghost-logo.svg")}
    />
    Ghost
  </h1>
);

export default logo;
