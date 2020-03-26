import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link to="/signup" className="nav-link">
        Signup
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/signin" className="nav-link">
        Log in
      </Link>
    </li>
  </ul>
);

export default SignedOutLinks;
