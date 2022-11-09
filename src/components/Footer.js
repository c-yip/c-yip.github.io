import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">
          <a href="mailto:christianyip92@gmail.com" className="footer__link">
            christianyip92@gmail
          </a>
        </li>
        <li className="footer-list__item">
          <a href="https://www.linkedin.com/in/c-yip" className="footer__link">
            <LinkedInIcon fontSize="large" />
          </a>
        </li>
        <li className="footer-list__item">
          <a href="https://github.com/c-yip" className="footer__link">
            <GitHubIcon fontSize="large" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
