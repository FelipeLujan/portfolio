import React, { Component } from "react";
import "../../styles/project/project.scss";
class Project extends Component {
  render() {
    console.log(this.props);

    let { headline } = this.props.location.state.content;
    let {
      technicalDescription,
      tools
    } = this.props.location.state.content.details[0];

    let toolList = tools.map(tool => <div>{tool}</div>);
    return (
      <div className={"projectBody"}>
        <div className={"thumbnail"} />
        <div className="detailsTitle">{headline}</div>
        <div className="detailsDescription">
          {" "}
          {
            this.props.location.state.content.details[0].technicalDescription
          }{" "}
        </div>
        <div className="detailsTools">{toolList}</div>
      </div>
    );
  }
}

export default Project;
