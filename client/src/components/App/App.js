import React from "react";
import Header from "../sections/Header/Header";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "../../muiTheme";
import appStyles from "./appStyles";
import AboutMe from "../sections/AboutMe/AboutMe";
import Container from "@material-ui/core/Container";
import Section from "../SectionWrapper/SectionWrapper";
import Projects from "../sections/Projects/Projects";
import Divider from "@material-ui/core/Divider";

function App(props) {
  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Header />
        <Divider />
        <Section>
          <AboutMe />
        </Section>
        <Divider />
        <Section>
          <Projects />
        </Section>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(appStyles)(App);
