import React from "react";
import { withStyles } from "@material-ui/core/styles";
import sectionStyles from "../styling/sectionStyles";
import theme from "../styling/theme";

function Section(props) {
  const { classes } = props;
  return <div className={classes.Section}>{props.children}</div>;
}

export default withStyles(sectionStyles(theme))(Section);
