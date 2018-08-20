import React, { Component } from "react";
import "../styles/Section1.scss";

class Section1 extends Component {
  render() {
    return (
      <div className={"main-container"}>
        <div className="title">
          <div className={"felipe"}>
            Felipe Luján<div className={"line"} />
          </div>

          <div className={"webdev"}>
            Web Developer <div className={"line"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
