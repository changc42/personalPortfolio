import React from "react";
import projectFilterStyling from "../../../styling/projects/projectFilterStyling";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../styling/theme";
import Typography from "@material-ui/core/Typography";

function ProjectFilter(props) {
  const { classes } = props;
  return (
    <div className={classes.ProjectFilter}>
      <Typography variant="h3">ProjectFilter</Typography>
    </div>
  );
}

export default withStyles(projectFilterStyling(theme))(ProjectFilter);
