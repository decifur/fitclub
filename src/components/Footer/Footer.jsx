import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>

      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/decifur" target="_blank" rel="noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jitesh-srivastav/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="" />
          </a>  
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
