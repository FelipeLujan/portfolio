import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "../pagedraw/title";
import Subtitle from "../pagedraw/subtitle";
import "../styles/Section1.scss";

class Section1 extends Component {
  render() {
    return (
      <div className={"main-container"}>
        <div className="title">
          <Title />
          <Subtitle />
        </div>
      </div>
    );
  }
}

Section1.propTypes = {};

export default Section1;
