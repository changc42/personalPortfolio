import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import Landing from "./Landing/Landing";
import Query from "./Query";
import Unauthorized from "./Unauthorized/Unauthorized";
import Results from "./Results/Results";
import theme from "../muiTheme";
import About from "./About/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/query">
            <Query />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/unauthorized">
            <Unauthorized />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
