import React, { Component } from "react";
import Experience from "./experience/Experience";
import "../styles/experiences.scss";
class Experiences extends Component {
  render() {
    return (
      <div className={"container-grid"}>
        <div className={"TitleExperience"}> Title Experience</div>{" "}
        <div className={"experiences"}>
          <Experience />
        </div>
        <div className={"experiences"}>
          <Experience />
        </div>
      </div>
    );
  }
}

export default Experiences;
