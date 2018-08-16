import React, { Component } from "react";
import Experience from "./experience/Experience";
import "../styles/experiences.scss";

class Experiences extends Component {
  render() {
    return (
      <div className={"experiences-container"}>
        <div className={"TitleExperience"}> Title Experience</div>{" "}
        <div className={"experience"}>
          <Experience className={"ExperienceComponent"} />
          <Experience className={"ExperienceComponent"} />
        </div>
      </div>
    );
  }
}

export default Experiences;
