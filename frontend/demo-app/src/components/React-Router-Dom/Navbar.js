import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <h2> Navbar</h2>

      <span>
        <Link to="/">Home Page </Link>
      </span>
      <span>
        <Link to="/about">About Page </Link>
      </span>
      <span>
        <Link to="/contact">Contact Page </Link>
      </span>
      <span>
        <Link to="/services"> Services Page </Link>
      </span>
    </React.Fragment>
  );
}

export default Navbar;
