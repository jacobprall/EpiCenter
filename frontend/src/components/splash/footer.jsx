import React from "react";

export default function footer() {
  return (
    <footer>
      <div className="footer-left"> Copyright &copy; 2020</div>
      <div className="footer-right">
        <a href="http://jacobprall.com" target="_blank">
          Portfolio
        </a>
        <a href="https://github.com/jacobprall" className="">
          Github
        </a>
        <a href="https://www.linkedin.com/in/jacob-prall-01abb867/">LinkedIn</a>
      </div>
    </footer>
  );
}
