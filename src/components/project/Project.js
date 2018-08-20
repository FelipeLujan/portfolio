import React, { Component } from "react";
import "../../styles/project/project.scss";
class Project extends Component {
  componentDidMount() {
    console.log(this.props.match.params.project);
  }

  render() {
    return (
      <div className={"projectBody"}>
        <div className={"thumbnail"} />
        <div className="detailsTitle">Title</div>
        <div className="detailsDescription">Technical description</div>
        <div className="detailsTools">Tools</div>
      </div>
    );
  }
}

export default Project;
