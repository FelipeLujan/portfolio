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
          <img
            src={this.props.content.URL}
            alt={"Thumbnail"}
            width={100 + "%"}
          />
        </div>
        <img
          src="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1534558392/portfolio/react.svg"
          className="icon"
          alt="Made in React"
        />

        <div
          className="projectTitle"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            fontSize: 20 + "px",
            letterSpacing: 0.15 + "px",
            marginBottom: 1 + "em"
          }}
        >
          {this.props.content.headline}
        </div>

        <div
          className="teaser"
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: 20 + "px",
            fontSize: 14 + "px",
            "letter-spacing": 0.25 + "px"
          }}
        >
          {this.props.content.description}
        </div>
        <div className="btn">
          <AppButton app={this.props.content.app} />
          <InfoButton content={this.props.content} />
          <GithubButton github={this.props.content.github} />
        </div>
      </div>
    );
  }
}

export default Experience;
