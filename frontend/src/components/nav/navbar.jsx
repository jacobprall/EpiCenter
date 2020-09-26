import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/download.png";
import { useDispatch, useSelector } from "react-redux";
import { clearSessionErrors, logout} from "../../actions/session_actions";

// import { useHistory } from 'react-router-dom'

export default function Navbar() {
  const dispatch = useDispatch();
  const clearErrors = (e) => {
    dispatch(clearSessionErrors());
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const currUser = useSelector((state) => state.session.user)
  if (!Object.keys(currUser).length) {
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
            <Link to="/signup" onClick={() => clearErrors()}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Link
          className="btn sign-in"
          to="/login"
          onClick={() => clearErrors()}
        >
          Sign In
        </Link>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    </header>
  );
  } else {
      return (
    <header>
      <h1 className="logo">
        <img className="globe" src={logo} alt="LOGO" />
        EpiCenter
      </h1>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            {/* <a href="#">About</a> */}
          </li>
          <li className="signup">
            {/* <Link to="/signup" onClick={() => clearErrors()}>
              Sign Up
            </Link> */}
          </li>
        </ul>
        <Link
          className="btn sign-in"
          to="/login"
          onClick={() => handleLogout()}
        >
          Logout
        </Link>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    </header>
      )
  }
}
