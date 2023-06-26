import React from "react";
import "./About.css";
import petpic from "../assets/images/petpic.jpg";
import NavBar from "../elements/NavBar";

const About = () => {
  return (
    <>
      <div id="nav-div">
        <h1>Mithoo</h1>
        <NavBar />
      </div>
      <div className="About">
        <div className="left">
          <img src={petpic} alt="Picture not found" />
        </div>
        <div className="right">
          <div>
            <h1>About Us</h1>
          </div>

          <p style={{marginTop : "0.2rem"}}>
            <b>Mithoo</b> is an online store for pet lovers, which provides the
            facility of buying pets and their accessories online to its
            customers. Our cusomers can also report if their pets are missing or
            stolen. The visitors on our website can provide help in finding the
            lost/stolen pets and can be rewarded.
            <br />
            Our objective is to provide facility to our regular as well as new
            customers. They can order pets, foods and accessories for their
            pets. Moreover, they can report if their pets are missing/stolen. We
            hope you will enjoy shopping with us.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
