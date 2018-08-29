import React, { Component } from "react";
import "../../styles/project/project.scss";
class Project extends Component {
  render() {
    console.log(this.props);

    let { headline, URL } = this.props.location.state.content;
    let {
      technicalDescription,
      tools
    } = this.props.location.state.content.details[0];

    let toolList = tools.map(tool => <div>{tool}</div>);
    return (
      <div className={"projectBody"}>
        <div className={"thumbnail"} />

        <div className="detailsTitle">{headline}</div>
        <div className="detailsDescription">{technicalDescription}</div>
        <div className={"employedTech"}>Employed Technologies </div>

        <div className="detailsTools">{toolList}</div>
      </div>
    );
  }
}
export default Project;
