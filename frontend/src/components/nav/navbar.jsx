import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/download.png";
// import { useHistory } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <h1 className="logo">
        <img className="globe" src={logo} alt="LOGO" />
        EpiCenter
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li className="signup">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        <Link className="btn sign-in" to="/login">
          Sign In
        </Link>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    </header>
  );
}
