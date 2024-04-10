import React from "react";
import "./About.css";
import { Element } from "react-scroll";
import Typewriter from "typewriter-effect";
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <div>
      <Element name="about" className="about_bg">
        <Nav />

        <div className="text_content">
          <p>Hello there...</p>
          <p>Veeramanikandan</p>

          <h3 className="text_name">
            {" "}
            <Typewriter
              options={{
                strings: ["I am Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          {/* <div>
            <div class="button" data-tooltip="Size: 20Mb">
              <div class="button-wrapper">
                <div class="text">Resume</div>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div> */}


         
        </div>

        
      </Element>
    </div>
  );
};

export default About;
