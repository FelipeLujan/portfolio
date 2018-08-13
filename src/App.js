import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./pagedraw/title";
import Subtitle from "./pagedraw/subtitle";
import Element from "./pagedraw/element";
import Section1 from "./pagedraw/section1";
import About from "./pagedraw/about";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section1 />
        <About />
        <Element
          tool1={"Bootstrap"}
          tool2={"Angular5"}
          tool3={"Firebase"}
          tool4={"Node.js"}
          title={"Webconnect"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <Element
          tool1={"Bootstrap"}
          tool2={"Angular5"}
          tool3={"Firebase"}
          tool4={"Node.js"}
          title={"Webconnect"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <Element
          tool1={"Bootstrap"}
          tool2={"Angular5"}
          tool3={"Firebase"}
          tool4={"Node.js"}
          title={"Webconnect"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <Element
          tool1={"Bootstrap"}
          tool2={"Angular5"}
          tool3={"Firebase"}
          tool4={"Node.js"}
          title={"Webconnect"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    );
  }
}

export default App;
