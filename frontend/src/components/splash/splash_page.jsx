// src/components/main/main_page.js

import React from "react";
import NavBar from "../nav/navbar";
import bigCircle from "../../assets/images/big-circle.png";
import mediumCircle from "../../assets/images/medium-circle.png";
import smallCircle from "../../assets/images/small-circle.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Footer from "./footer";
const SplashPage = function () {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <main>
      <section className="landing">
        <div className="introduction">
          <div className="intro-text">
            <h1>EpiCenter</h1>
            <p>
              Connect with friends and family. <br />
              Get info you can trust. <br />
              <strong>Do your part to defeat Coronavirus.</strong>
            </p>
          </div>
          <div className="cta">
            <Link className="cta-learn" to="/signup">
              Sign Up
            </Link>
            {/* <Link onClick={handleLogout} className="cta-learn" to="/">
              Logout
            </Link> */}
          </div>
        </div>
      </section>
      <img className="big-circle" src={bigCircle} alt="" />
      <img className="medium-circle" src={mediumCircle} alt="" />
      <img className="small-circle" src={smallCircle} alt="" />
      <Footer />
    </main>
  );
};

export default SplashPage;
