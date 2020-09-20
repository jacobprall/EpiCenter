// src/components/main/main_page.js

import React from "react";
import NavBar from "../nav/navbar";
import bigCircle from "../../assets/images/big-circle.png";
import mediumCircle from "../../assets/images/medium-circle.png";
import smallCircle from "../../assets/images/small-circle.svg";
import { Link } from "react-router-dom";
const SplashPage = function () {
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
            <Link className="cta-learn">Sign Up</Link>
          </div>
        </div>
      </section>
      <img className="big-circle" src={bigCircle} alt="" />
      <img className="medium-circle" src={mediumCircle} alt="" />
      <img className="small-circle" src={smallCircle} alt="" />
      <footer>
        <div className="footer-left"> Copyright &copy; 2020</div>
        <div className="footer-right">
          <a href="http://jacobprall.com" target="_blank">
            Portfolio
          </a>
          <a href="https://github.com/jacobprall" className="">
            Github
          </a>
          <a href="https://www.linkedin.com/in/jacob-prall-01abb867/">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
};

export default SplashPage;
