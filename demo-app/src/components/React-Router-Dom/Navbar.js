import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <h2> Navbar</h2>
      <Link to="/">Home Page </Link>
      <Link to="/about">About Page </Link>
      <Link to="/contact">Contact Page </Link>
      <Link to="/services"> Services Page </Link>
      <Link to="/SignUP">Sign Up</Link>
      <Link to="/Login">Sign In</Link>
      <Link to="/Table">Table</Link>
    </React.Fragment>
  );
}

export default Navbar;
