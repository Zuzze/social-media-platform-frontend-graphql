import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import "./MobileNavigation.css";

const mobileNavigation = props => (
  <nav className={["mobile-nav", props.open ? "open" : ""].join(" ")}>
    <ul
      className={["mobile-nav__items", props.mobile ? "mobile" : ""].join(" ")}
    >
      <img
        alt="nav logo"
        src={require("../../../assets/ghost-logo.svg")}
        height="50"
      />
      <br />
      <br />
      <NavigationItems
        mobile
        onChoose={props.onChooseItem}
        isAuth={props.isAuth}
        onLogout={props.onLogout}
      />
    </ul>
  </nav>
);

export default mobileNavigation;
