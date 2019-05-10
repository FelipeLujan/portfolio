import React, { Component } from "react";
import "../../styles/project/project.scss";
import { Grid } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import Card from "@material-ui/core/es/Card/Card";
import ContactCard from "../Card/ContactCard";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: undefined,
      step: 0
    };
  }

  handleExpandClick = id => {
    let { expanded } = this.state;
    if (expanded === id) {
      this.setState({ expanded: undefined, step: 0 });
    } else {
      this.setState({ expanded: id, step: 0 });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {}

  handleNext = () => {
    this.setState(state => ({
      step: state.step + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      step: state.step - 1
    }));
  };
  handleReset = () => {
    this.setState({ step: 0 });
  };

  render() {
    let { expanded, step } = this.state;
    const { theme } = this.props;
    let projects = [
      {
        id: "1",
        name: "Remodelaciones Luján",
        description:
          "A website for a construction company, includes server side rendering (SSR) and several SEO focused improvements. Built in Angular 7",
        stack: ["angular", "node", "gcp"],
        steps: ["Collect user stories", "Develop and deploy.", "Virtual tours"],
        detailedStep: [
          "The user stories were rather vague, just a gallery and contact info. So it was on me to innovate and set up metrics (Google Analitics)",
          "The first version was developed in Angular 7. With server side rendering, lazy load off-screen images and next-gen image formats. Deployed to Google App Engine",
          "More features have been introduced since, like 360 degree virtual tours."
        ],
        source: "https://github.com/FelipeLujan/RemodelacionesLujan",
        link: "https://www.remodelacioneslujan.com",
        thumb: {
          desktop:
            "https://res.cloudinary.com/felipelujan/image/upload/c_scale,f_auto,w_823/v1557463289/portfolio/remodelaciones.png",
          mobile:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557337811/portfolio/remo_desk.jpg"
        }
      },
      {
        id: "2",
        name: "Sweet my Heart",
        description:
          "A demo website for a bakery, features material design, CSS grid, React and React Springs. I also did some designs before development using Figma.",
        stack: ["react", "node", "gcp"],
        steps: ["Web design", "Development", "Animations"],
        detailedStep: [
          "I first did all the mockups for mobile and desktop versions using Figma.",
          "I developed this website using React.js and Material UI, Redux wasn't necessary this time around. Most of the work was on making this site responsive which i achieved with CSS Grid.",
          "I wanted to beef this project up so i picked React Springs for some animations such as mouse parallax (desktop) and the flipping card thingy at the end"
        ],
        source: "",
        link: "#",
        thumb: {
          desktop:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557337811/portfolio/sweet_desk.jpg",
          mobile:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557460759/portfolio/sweet_mob.jpg"
        }
      },
      {
        id: "5",
        name: "Felipe.app (this portfolio)",
        description:
          "This Portfolio is a Kubernetes Cluster, each project linked here runs on it's own container (virtual machine) as a subdomain. The website itself is a React App",
        stack: ["k8s", "react", "docker"],
        steps: ["Web design", "Build", "Deploy to Kubernetes"],
        detailedStep: [
          "This web app was built using React and CSS grid. All styles come from Material UI ",
          "Once finished, the web app is built and served using Nginx or Node.js",
          "Each project runs on an independent container, either Node Alpine or Nginx Alpine. The kubernetes cluster is configured so each route redirects to an specific container and port"
        ],
        source: "",
        link: "#",
        thumb: {
          desktop:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557461406/portfolio/portfolio_desk.jpg",
          mobile:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557461406/portfolio/portfolio_mobile.jpg"
        }
      },
      {
        id: "6",
        name: "Catch of the day",
        description:
          "A demo website for a fish store with inventory management. This website integrates login with github and persistent storage in firebase",
        stack: ["react", "gcp", "node"],
        steps: [
          "React/Redux state and component development",
          "Firebase Persistent State",
          "Github Login"
        ],
        detailedStep: [
          "The project stated as a CRA (create react app) with Redux for state management, features dynamic routing, every new store has it's own route",
          "Every time the user logs in, the previous state is retrieved from firebase. Changes are saved in real time",
          "The user is authenticated using oauth2 and it's, by doing this i can retreive the user's state from Firebase"
        ],
        source: "",
        link: "https://pesqueria.herokuapp.com/",
        thumb: {
          desktop:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557464310/portfolio/catch_desk.jpg",
          mobile:
            "https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1557464310/portfolio/catch_mobile.jpg"
        }
      }
    ];
    let cards = projects.map(project => {
      return (
        <ProjectCard
          key={project.id}
          project={project}
          handleExpandClick={this.handleExpandClick}
          expanded={expanded}
          step={step}
          handleBack={this.handleBack}
          handleNext={this.handleNext}
          handleReset={this.handleReset}
        />
      );
    });

    let contactCard = <ContactCard />;

    return (
      <div className="projects-container">
        <Grid container direction="row" spacing={40} justify="space-around">
          {cards}
        </Grid>
      </div>
    );
  }
}
export default withTheme()(Project);
