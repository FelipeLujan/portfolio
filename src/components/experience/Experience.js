import React, { Component } from "react";
import "../../styles/experience/experience.scss";
import GithubButton from "./GithubButton";
import AppButton from "./AppButton";
import InfoButton from "./InfoButton";

class Experience extends Component {
  render() {
    return (
      <div className={"single-experience-container"}>
        <div className="img">
          <img src={this.props.URL} alt={"Thumbnail"} width={100 + "%"} />
        </div>
        <img
          src="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1534558392/portfolio/react.svg"
          className="icon"
          alt="Made in React"
        />

        <div
          className="projectTitle"
          style={{
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": 500,
            "line-height": "normal",
            "font-size": 20 + "px",
            "letter-spacing": 0.15 + "px",
            "margin-bottom": 1 + "em"
          }}
        >
          {this.props.headline}
        </div>

        <div
          className="teaser"
          style={{
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": 20 + "px",
            "font-size": 14 + "px",
            "letter-spacing": 0.25 + "px"
          }}
        >
          {this.props.description}
        </div>
        <div className="btn">
          <AppButton />
          <InfoButton />
          <GithubButton />
        </div>
      </div>
    );
  }
}

export default Experience;
