import React, { Component } from "react";
import Experience from "./experience/Experience";
import "../styles/experiences.scss";

class Experiences extends Component {
  componentDidMount() {
    //wake up heroku dynos :v (CORB expected)
    fetch("https://fierce-spire-11944.herokuapp.com/")
      .then(data => console.log(data))
      .catch();

    fetch("https://chatappz.herokuapp.com/")
      .then(data => console.log(data))
      .catch();
  }

  render() {
    let angular;
    let react;
    let projects = [
      {
        id: 1,
        URL:
          "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1534565515/portfolio/pesqueria.png",
        headline: "Catch of the Day",
        description:
          "A React app that simulates having to manage the inventory of a store. Modifications are stored in Firebase and spread trough the app in real time.",
        app: "https://pesqueria.herokuapp.com/",
        info: "catchOfTheDay",
        github: "https://github.com/FelipeLujan/catchReactApp",
        icon: react,
        details: [
          {
            technicalDescription:
              "This app makes extensive use of React features such as class and stateless components, proptypes, event handlers, proptypes, lists, etc. It also has protected routes that make use of persistent state synced with Firebase.",
            tools: ["React.js", "Firebase", "CSS", "JSX", "re-base"]
          }
        ]
      },
      {
        id: 2,
        URL:
          "https://res.cloudinary.com/felipelujan/image/upload/f_auto,q_auto/v1534565524/portfolio/remodelaciones.png",
        headline: "RemodelacionesLujan.com",
        description:
          "A personal project i made for a family business. Includes a photo gallery, Performance and SEO improvements",
        app: "http://www.remodelacioneslujan.com",
        info: "remodelacioneslujan",
        github: "https://github.com/FelipeLujan/RemodelacionesLujan",
        icon: angular,
        details: [
          {
            technicalDescription:
              "An Angular SPA with multiple SEO improvements and performance improvements (feel free to audit with Lighthouse), Employs core Angular features such as directives and services. Media is stored in Cloudinary for CDN and image conversion. ",
            tools: [
              "Angular 5",
              "TypeScript",
              "ngForms",
              "ngRouter",
              "Bootstrap framework",
              "Lazy-load images",
              "SCSS",
              "Firestore",
              "next-gen image formats",
              "Route-specific Meta tags"
            ]
          }
        ]
      }
    ];
    /*  technicalDescription:
          "This app makes extensive use of React features such as class and stateless components, proptypes, event handlers, proptypes, lists, etc. It also has protected routes that make use of persistent state synced with Firebase.",
        tools: ["React.js", "Firebase", "CSS", "JSX", "re-base"]*/

    let content = projects.map(project => <Experience content={project} />);

    return (
      <div className={"experiences-container"}>
        <div className={"TitleExperience"}> Projects</div>{" "}
        <div className={"experience"}>{content}</div>
      </div>
    );
  }
}

export default Experiences;
