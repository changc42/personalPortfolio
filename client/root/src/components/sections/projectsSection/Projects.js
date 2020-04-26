import React from "react";
import projectsStyling from "../../../styling/projects/projectsStyling";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../styling/theme";
import Typography from "@material-ui/core/Typography";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import allCardDetails from "./details/allCardDetails";
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
