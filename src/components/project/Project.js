import React, { Component } from "react";

class Project extends Component {
  componentDidMount() {
    console.log(this.props.match.params.project);
  }

  render() {
    return (
      <div className={"projectBody"}>
        <div className={"img"}>
          <img src="" alt="placeholder" />
        </div>
        <div className="title">Title</div>
        <div className="technicalDescription">Technical description</div>
        <div className="tools">Tools</div>
      </div>
    );
  }
}

export default Project;
