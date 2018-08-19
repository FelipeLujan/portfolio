import React, { Component } from "react";

import "./app.scss";
import Wrapper from "./components/Wrapper";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Project from "./components/project/Project";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact component={Wrapper} path={"/"} />
          <Route exact component={Project} path={"/:project"} />

          <style>
            @import url('https://fonts.googleapis.com/css?family=Montserrat');
          </style>
          <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto');
          </style>
        </div>
      </Router>
    );
  }
}

export default App;
