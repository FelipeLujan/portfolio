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
      },
      {
        id: 3,
        URL:
          "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1534565513/portfolio/chat.png",
        headline: "Firestore Chat",
        description:
          " A tealtime Chat prowered by Firestore. Open it in 2 browsers and check it out",
        app: "https://chatappz.herokuapp.com/",
        info: "firestore chat",
        github: "https://github.com/FelipeLujan/FirebaseChat",
        icon: angular,
        details: [
          {
            technicalDescription:
              "This realtime messaging app (chat) uses *ngFor directives to render out the content of a document in a Firestore database. The order of the entrances are determined by a server-side timestamp added to every message. ",
            tools: [
              "Angular 5",
              "Firestore",
              "Angular Firebase 2",
              "Jarn Package Manager",
              "Bootstrap Framework"
            ]
          }
        ]
      },
      {
        id: 4,
        URL:
          "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1534824618/portfolio/devconnect.png",
        headline: "DevConnect",
        description:
          " A social network for people to create a profile with their experience and education and a feed for users to share, like and comment posts ",
        app: "https://fierce-spire-11944.herokuapp.com/",
        info: "devconnector",
        github: "https://github.com/FelipeLujan/devConnect",
        icon: react,
        details: [
          {
            technicalDescription:
              "This is a full-stack MERN app React with Redux app that runs on a Node - Express API. Data is stored in a mLab database. Authentication is handled through JSON Web Tokens (JWT).",
            tools: [
              "React",
              "Redux",
              "Node.js",
              "Express",
              "Mongo DB",
              "Mongoose",
              "Axios"
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
