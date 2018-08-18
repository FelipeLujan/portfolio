import React, { Component } from "react";
import Title from "../pagedraw/title";
import Subtitle from "../pagedraw/subtitle";
import "../styles/Section1.scss";

class Section1 extends Component {
  render() {
    return (
      <div className={"main-container"}>
        <div className="title">
          <div className={"felipe"}>Felipe Lujan</div>
          <div className={"webdev"}>Web Developer</div>
          {/*<Title />*/}
          {/*<Subtitle />*/}
        </div>
      </div>
    );
  }
}

export default Section1;
