import React from "react";
import { Element } from "react-scroll";
import "./Services.css";
import bg1 from "../../Assests/bg2.jpg";
import bg2 from "../../Assests/bg2.jpg";
import bg3 from "../../Assests/bg2.jpg";

const Services = () => {
  return (
    <Element name="services">
      <div className="services_content">
        {/* <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={bg1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={bg2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={bg3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

        <div className="Services_content_card">
          <div className="card_card">
            <div className="box1">
              <div class="">
                <a class="card1_card">
                  <p className="title_text_card">Responsiveness</p>
                  <p class="text-content_card">
                    "Responsive Design for Every Screen Ensuring Seamless
                    Experiences Across Devices Tailored Solutions for an
                    Engaging User Journey Your Website, Wherever Your Audience
                    Roams"
                  </p>
                  <div class="go-corner_card">
                    <div class="go-arrow_card">→</div>
                  </div>
                </a>
              </div>

              <div class="">
                <a class="card1_card">
                  <p className="title_text_card">Different Layout</p>
                  <p class="text-content_card">
                    "Diverse Layouts, Infinite Possibilities Crafting Unique
                    Designs for Varied Aesthetics From Minimalistic Elegance to
                    Bold Statements Your Vision, Your Layout – Limitless
                    Creativity"
                  </p>
                  <div class="go-corner_card">
                    <div class="go-arrow_card">→</div>
                  </div>
                </a>
              </div>

              <div class="">
                <a class="card1_card">
                  <p className="title_text_card">Make it Simple</p>
                  <p class="text-content_card">
                    "Simplicity Redefined in Design Clean, Intuitive Layouts for
                    Ease Modern Solutions, Effortless Experience Your Website,
                    Simply Exceptional"
                  </p>
                  <div class="go-corner_card">
                    <div class="go-arrow_card">→</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="box2">
              <div class="mt-5">
                <a class="card1_card">
                  <p className="title_text_card"> Unique design</p>
                  <p class="text-content_card">
                    "Transforming Ideas into Exceptional Experiences
                    Specializing in Stylish, Modern Website Design Tailored
                    Services for Clients of All Sizes Passionate about Crafting
                    Unique Digital Solutions"
                  </p>
                  <div class="go-corner_card">
                    <div class="go-arrow_card">→</div>
                  </div>
                </a>
              </div>

              <div class="mt-5">
                <a class="card1_card">
                  <p className="title_text_card">Testing for Perfection</p>
                  <p class=" text-content_card">
                    "Testing for Perfection Striving for Excellence through
                    Rigorous Testing Ensuring Flawless Functionality Your
                    Project, Our Commitment to Quality"
                  </p>
                  <div class="go-corner_card">
                    <div class="go-arrow_card">→</div>
                  </div>
                </a>
              </div>

              <div class="mt-5">
                <a class="card1_card">
                  <p className="title_text_card">Advanced Options</p>
                  <p class=" text-content_card">
                    "Exploring Advanced Options Tailoring Innovative Solutions
                    Beyond the Basics Elevating Functionality with Cutting-edge
                    Features Your Vision, Our Expertise in Advanced Development"
                  </p>
                  <div class="go-corner_card">
                    <div class="go-arrow_card">→</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
