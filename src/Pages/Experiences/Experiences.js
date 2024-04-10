import React from "react";
import "./Experiences.css";
import { Element } from "react-scroll";
import Cardone from "../../components/Card/Cardone";
import Cardtwo from "../../components/Card/Cardtwo";

const Experiences = () => {
  return (
    <Element name="experiences">
      <div className="exp_content row">
        <div className="col-5">
          <Cardone />
        </div>
        <div className="col-5">
          <Cardtwo />
        </div>
      </div>
    </Element>
  );
};

export default Experiences;
