import React, { Component } from "react";

import "../styles/Wrapper.scss";
import Section1 from "./Section1";
import About from "./About";
import Experiences from "./experiences";

class Wrapper extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"section1"}>
          <Section1 />
        </div>
        <div className="about">
          <About />
        </div>

        <div className="experiences">
          <Experiences />
        </div>
      </div>
    );
  }
}

export default Wrapper;
