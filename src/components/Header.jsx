import "./Header.css";
import erenyeager from "../assets/Eren jaeger.jpeg";
const Header = () => {
  return (
    <div className="hero">
      <img
        src={erenyeager}
        alt="profile"
        width={"200px"}
        style={{ borderRadius: "50%" }}
      />
      <h1>
        HELLO I'M <span>Sourav Bhagat</span>
      </h1>
      <p>
        I am a frontend developer who loves designing, building, and breaking
        things to learn how they work.
      </p>
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
