import React from "react";
import { Link } from "react-scroll";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand Nav_title" href="#">
            Develop<span style={{color:"rgb(255, 96, 0)"}}>er</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto nav_tag">
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
