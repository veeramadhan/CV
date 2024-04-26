import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import github  from "../../Assests/github.png"

// Now you can use faEnvelopeOpen in your code
const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact_form row">
        <div className="col-lg-5 col-sm-4 leftSideContent">
          <h1 className="display-3 bold">Let's get in touch</h1>
          <p className="para">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
          <h3 className="aside">Living In:</h3>
          <p  className="bold">Virudhunagar, TamilNadu.</p>

          <h4>Call:</h4>
          <p className="bold">+91 6380007962.</p>

          <div className="d-flex ">
          <a href="https://www.linkedin.com/in/veeramanikandan-l-7164b5144" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} className="iconsize icoon" />
</a>
<div>
  <FontAwesomeIcon icon={faEnvelope} className="iconsize icoon" >
  <span>apkveeraa@gmail.com</span></FontAwesomeIcon>
</div>

   
          <img src={github}  className="iconsize"  />    
              </div>
        </div>



        <div className="col-lg-5 col-sm-4">
        
        
<div class="form-container">
    <div class="form">
        <span class="heading">Get in touch</span>
        <input placeholder="Name" type="text" class="input"/>
        <input placeholder="Email" id="mail" type="email" class="input"/>
        <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
        <div class="button-container">
        <div class="send-button">Send</div>
        <div class="reset-button-container">
            <div id="reset-btn" class="reset-button">Reset</div>
        </div>
    </div>
</div>
</div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;



{/* <div className="row">
          <div className="col-4">
          <h1>Let's get in touch</h1>


          <div className="map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="Virudhunagar Map"
                className="gmap_iframe"
                width="70%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=510&amp;height=115&amp;hl=en&amp;q=virudhunagar&amp;t=k&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://embed-googlemap.com">embed-googlemap.com</a>
            </div>
            <style>{`
            .mapouter{position:relative;text-align:right;width:100%;height:415px;}
            .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:415px;}
            .gmap_iframe {height:315px!important;}
          `}</style>
          </div>
        </div>


          </div>

          <div className="col-4">


          </div>
        </div> */}