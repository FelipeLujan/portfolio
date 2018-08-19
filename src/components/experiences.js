import React, { Component } from "react";
import Experience from "./experience/Experience";
import "../styles/experiences.scss";

class Experiences extends Component {
  render() {
    let angular;
    let react;
    let projects = [
      {
        URL:
          "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1534565515/portfolio/pesqueria.png",
        headline: "Catch of the Day",
        description:
          "A React app that simulates having to manage the inventory of a store. Modifications are stored in Firebase and spread trough the app in real time.",
        app: "https://pesqueria.herokuapp.com/",
        info: "catchOfTheDay",
        github: "https://github.com/FelipeLujan/catchReactApp",
        icon: react
      },
      {
        URL:
          "https://res.cloudinary.com/felipelujan/image/upload/f_auto,q_auto/v1534565524/portfolio/remodelaciones.png",
        headline: "RemodelacionesLujan.com",
        description:
          "A personal project i made for a family business. Includes a photo gallery, Performance and SEO improvements",
        app: "http://www.remodelacioneslujan.com",
        info: "remodelacioneslujan",
        github: "https://github.com/FelipeLujan/RemodelacionesLujan",
        icon: angular
      }
    ];

    let content = projects.map(project => (
      <Experience
        headline={project.headline}
        URL={project.URL}
        description={project.description}
        app={project.app}
        info={project.info}
        github={project.github}
        icon={project.icon}
        key={project.index}
      />
    ));

    return (
      <div className={"experiences-container"}>
        <div className={"TitleExperience"}> Projects</div>{" "}
        <div className={"experience"}>{content}</div>
      </div>
    );
  }
}

export default Experiences;
