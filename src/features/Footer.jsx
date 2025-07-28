// Footer.jsx
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Designed & Built by <span>Sourav Bhagat</span> • {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
