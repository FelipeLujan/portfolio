import React, { Component } from "react";
import "../styles/Section1.scss";
import Kubernetes from "./Kubernetes";
import Parallax from "react-springy-parallax";
import ParallaxMountains from "./ParallaxMountains";
import About from "./About";
import Project from "./project/Project";
import Contact from "./Card/contact";

class Section1 extends Component {
  render() {
    return (
      <div>
        <ParallaxMountains> </ParallaxMountains>
        <Project> </Project>
        <Contact />
      </div>
    );
  }
}

export default Section1;
