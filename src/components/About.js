import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>n this lab, we will be rendering a few children components in our top-most component: App. The components are set up, but we need to update the JSX they return.</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
