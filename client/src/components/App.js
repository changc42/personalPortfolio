import React from "react";
import Types from "./Types";
import Intro from "../components/Intro/Intro";
import "../styling/App.css";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "../styling/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Intro />
      </ThemeProvider>
    </div>
  );
}

export default App;
