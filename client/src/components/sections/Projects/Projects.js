import React from "react";
import projectsStyling from "./projectsStyling";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../muiTheme";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "./ProjectCard/ProjectCard";
import allCardDetails from "../../../allCardDetails";
import Grid from "@material-ui/core/Grid";

function Projects(props) {
  const { classes } = props;
  function renderCards(allCardDetails) {
    return allCardDetails.map((cardDetails) => {
      console.log(cardDetails);
      return (
        <Grid item xs={12} sm={6} md={4}>
          <ProjectCard cardDetails={cardDetails} />
        </Grid>
      );
    });
  }

  return (
    <div className={classes.Projects}>
      <Typography variant="h2">Projects</Typography>
      <Grid container spacing={5}>
        {renderCards(allCardDetails)}
      </Grid>
    </div>
  );
}

export default withStyles(projectsStyling(theme))(Projects);
