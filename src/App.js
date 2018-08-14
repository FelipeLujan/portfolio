import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./pagedraw/title";
import Subtitle from "./pagedraw/subtitle";
import Element from "./pagedraw/element";
import Section1 from "./pagedraw/section1";
import About from "./pagedraw/about";

import "./app.scss";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
      </div>
    );
  }
}

export default App;
