import React, { Component } from "react";
import "../../styles/experience/experience.scss";
class Experience extends Component {
  render() {
    return (
      <div className={"single-experience-container"}>
        <div className="img">img</div>
        <div className="icon">icon</div>
        <div className="projectTitle">title</div>
        <div className="teaser">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque,
          commodi eius esse minus non unde velit vitae voluptatem voluptatibus.
        </div>
        <div className="btn">BTN BTN BTN</div>
      </div>
    );
  }
}

export default Experience;
