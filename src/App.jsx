import React from "react";
import "./App.css";

import Navbar from "./features/Navbar";
import Header from "./features/Header";
import About from "./features/About";
import Projects from "./features/Projects";
import Contact from "./features/Contact";
import Footer from "./features/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Header />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
