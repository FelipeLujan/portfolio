import React, { Component } from "react";
import "../styles/About.scss";

class About extends Component {
  render() {
    return (
      <div className={"about-area"}>
        <h1 className={"about"}>About</h1>
        <p className={"bio"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquid, consectetur ea <strong>ipsam magnam</strong> nisi officia,
          pariatur porro quaerat quasi quo suscipit, voluptate voluptatem. Ad
          commodi dignissimos eligendi
        </p>
      </div>
    );
  }
}

export default About;
