import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './Footer.css'; // Assuming you will use an external CSS file for custom styles

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="hover-area"></div>
      <div className="footer-content">
        <a href="https://github.com/karangangwar341">
          <button className="text-3xl text-white rounded-full p-2.5 bg-white/0 hover:scale-110 transition-transform">
            <FaGithub />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/karan-gangwar-59aa8b225/">
          <button className="text-3xl text-white rounded-full p-2.5 bg-white/0 hover:scale-110 transition-transform">
            <FaLinkedin />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
