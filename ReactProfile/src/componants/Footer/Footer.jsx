import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shubham</h1>

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
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/shubham.kadu.56679/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook" />
          </a>

          <a
            href="https://www.instagram.com/shubham_kadu1405/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram" />
          </a>

          <a
            href="https://twitter.com/KaduT513"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter" />
          </a>
        </div>
        <span className="footer__copy">
          &#169; Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
