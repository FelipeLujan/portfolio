import React, { Component } from "react";

import "./app.scss";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper />
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Roboto');
        </style>
      </div>
    );
  }
}

export default App;
