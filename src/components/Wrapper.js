import React, { Component } from "react";
import Element from "../pagedraw/element";
import Title from "../pagedraw/title";
import Subtitle from "../pagedraw/subtitle";

import "../styles/Wrapper.scss";
import Section1 from "./Section1";
import About from "./About";

class Wrapper extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"section1"}>
          <Section1 />
        </div>
        <div className="about">
          <About />
        </div>
        {/*<div className={"element"}>*/}
        {/*<Element />*/}
        {/*</div>*/}

        {/*<Section1 />*/}
        {/*<About />*/}
        {/*<Element*/}
        {/*tool1={"Bootstrap"}*/}
        {/*tool2={"Angular5"}*/}
        {/*tool3={"Firebase"}*/}
        {/*tool4={"Node.js"}*/}
        {/*title={"Webconnect"}*/}
        {/*description={*/}
        {/*"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."*/}
        {/*}*/}
        {/*/>*/}
        {/*<Element*/}
        {/*tool1={"Bootstrap"}*/}
        {/*tool2={"Angular5"}*/}
        {/*tool3={"Firebase"}*/}
        {/*tool4={"Node.js"}*/}
        {/*title={"Webconnect"}*/}
        {/*description={*/}
        {/*"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."*/}
        {/*}*/}
        {/*/>*/}
        {/*<Element*/}
        {/*tool1={"Bootstrap"}*/}
        {/*tool2={"Angular5"}*/}
        {/*tool3={"Firebase"}*/}
        {/*tool4={"Node.js"}*/}
        {/*title={"Webconnect"}*/}
        {/*description={*/}
        {/*"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."*/}
        {/*}*/}
        {/*/>*/}
        {/*<Element*/}
        {/*tool1={"Bootstrap"}*/}
        {/*tool2={"Angular5"}*/}
        {/*tool3={"Firebase"}*/}
        {/*tool4={"Node.js"}*/}
        {/*title={"Webconnect"}*/}
        {/*description={*/}
        {/*"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."*/}
        {/*}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default Wrapper;
