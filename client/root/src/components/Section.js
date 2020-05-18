import React from "react";
import { withStyles } from "@material-ui/core/styles";
import sectionStyles from "../styling/sectionStyles";
import theme from "../styling/theme";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

function Section(props) {
  const { classes } = props;
  return (
    <Container>
      <div className={classes.SectionContent}>{props.children}</div>
    </Container>
  );
}

export default withStyles(sectionStyles(theme))(Section);
