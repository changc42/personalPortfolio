import React from "react";
import { withStyles } from "@material-ui/core/styles";
import sectionStyles from "./sectionWrapperStyles";
import theme from "../../muiTheme";
import { Card, Container } from "@material-ui/core";

function Section(props) {
  const { classes } = props;
  return (
    <Container>
      <div className={classes.SectionContent}>{props.children}</div>
    </Container>
  );
}

export default withStyles(sectionStyles(theme))(Section);
