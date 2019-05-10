import React, { Component } from "react";

import "./app.scss";
import Wrapper from "./components/Wrapper";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Project from "./components/project/Project";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00002B" },
    secondary: { main: "#75A5DB" },
    error: { main: "#F15946" }
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
