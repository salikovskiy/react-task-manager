import React from "react";
import { Link } from "react-router-dom";

const SignedInLinks = () => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item mx-3">
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item mx-3">
      <Link to="/create" className="nav-link">
        Add task
      </Link>
    </li>
    <li className="nav-item mx-3">
      <button className="btn btn-outline-secondary">LogOut</button>
    </li>
  </ul>
);

export default SignedInLinks;
