import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container test ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navMob">
          <a className="navbar-brand Nav_title" href="#">
            Develop<span style={{ color: "rgb(255, 96, 0)" }}>er</span>
          </a>
          <button
            className="navbar-toggler navMobToggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto nav_tag">
              <Link to="about" smooth={true} duration={500}>
                About me
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
              <Link to="experiences" smooth={true} duration={500}>
                Experiences
              </Link>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
