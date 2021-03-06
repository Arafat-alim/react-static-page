import React from "react";
import logo from "../images/react-icon-small.png";

export default function Navbar(props) {
  return (
    <nav className={props.mode ? "" : "dark"}>
      <img src={logo} alt="react-logo" className="nav--icon" />
      <h3 className="nav--title_text">React Facts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.handleToggle}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
