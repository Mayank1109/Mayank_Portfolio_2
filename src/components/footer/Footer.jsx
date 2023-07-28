import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mayank</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/maycha1109"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/Mayank1109"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="maycha1109@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-envelope"></i>
          </a>
        </div>

        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
