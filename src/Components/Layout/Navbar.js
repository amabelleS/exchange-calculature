import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import logo from "../../img/eLogo.png";

export default function Navbar({
  icon = "fas fa-calculator",
  title = "Exchnge calculator",
  home = "fas fa-home",
}) {
  return (
    <nav className="navbar bg-third">
      <h1>
        {/* <img src={logo} /> */}
        <i className={icon} style={{ margin: "auto 1rem" }}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">
            <i className={home} style={{ margin: "auto 1rem" }}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   icon: PropTypes.string,
//   home: PropTypes.string,
// };
