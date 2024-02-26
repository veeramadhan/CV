import React from "react";
import "./About.css";
import { Element } from "react-scroll";
import Typewriter from 'typewriter-effect';
import Nav from "../Nav/Nav";

const About = () => {
  return (
    <div>

    <Element name="about" className="about_bg">
    <Nav/>

      <div className="text_content">
        <p >hello there...</p>
        <p>Veeramanikandan</p>


        <h3 className='text_name'>
          {' '}  
          <Typewriter 
            options={{
              strings: ['I am Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </Element>
    </div>

  );
};

export default About;
