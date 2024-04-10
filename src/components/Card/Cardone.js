import React from 'react';
import "./Card.css";
import techm from "../../Assests/techm.png";

const Cardone = () => {
  return (
    <div class="card">
      <img src={techm} alt="Techm" className="card__image" />
      <div class="card__content">
        <p class="card__title">Associate Software Developer</p>
        <p class="card__description">
        TechMahindra | Associate Software Developer
          <span> Aug, 2021 – Feb, 2023</span>
</p>

<p>Key responsibilities:</p>
<p>My primary responsibility in this project is to
understand the code.
Performed daily tasks assigned by my manager.
Developed a Health management application from
scratch and integrated a different modules
progressively.
Modules included patient encounter history, forms
like PHQ9, 5DS, Case notes, USMM and a summary
module
Responsibilities included ensuring timely deliveries
and maintain the architecture of front-end
application.
Worked on APIS to fetch data from Mongodb.</p>
      </div>
    </div>
  );
};

export default Cardone;
