import React from "react";

export default function footer() {
  return (
    <footer>
      <div className="footer-left"> Copyright &copy; 2020</div>
      <div className="footer-right">
        <a
          href="http://jacobprall.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/jacobprall"
          className=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/jacob-prall-01abb867/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
