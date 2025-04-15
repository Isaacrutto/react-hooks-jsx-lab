import React from "react";
import { image } from "../data/data"; // Corrected the import path for image

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this portfolio using React!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
