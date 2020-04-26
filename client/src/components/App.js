import React from "react";
import Header from "./sections/Header";
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import theme from "../styling/theme";
import { GlobalCSS } from "../styling/aboutMeStyles";
import appStyles from "../styling/appStyles";
import Test from "./Test";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import Projects from "./sections/projectsSection/Projects";

function App(props) {
  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Container>
          <Section>
            <Header />
          </Section>
          <Section>
            <AboutMe />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section>
            <Footer />
          </Section>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(appStyles)(App);
