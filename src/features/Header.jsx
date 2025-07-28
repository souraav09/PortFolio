import "../styles/Header.css";
import sourav from "../assets/WhatsApp Image 2025-07-19 at 7.03.52 PM.jpeg";

const Header = () => {
  return (
    <div className="hero">
      <img
        src={sourav}
        alt="profile"
        width={"200px"}
        style={{ borderRadius: "50%" }}
      />
      <h1>
        HELLO I'M <span>Sourav Bhagat</span>
      </h1>
      
      <div className="hero-section">
        <div className="hero-connect">
          {" "}
          <a href="#contact" className="no-link-style">
            Contact Me{" "}
          </a>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Header;
