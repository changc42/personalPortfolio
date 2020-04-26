import React from "react";
import projectCardStyling from "../../../styling/projects/projectCardStyling";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../styling/theme";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent } from "@material-ui/core";

function ProjectCard(props) {
  const { classes, cardDetails } = props;
  return (
    <div className={classes.ProjectCard}>
      <Card>
        <CardHeader title={cardDetails.title}></CardHeader>
        <img src={`${process.env.PUBLIC_URL}/${cardDetails.image}`} />
        <CardContent>
          <Typography variant="body1">{cardDetails.description}</Typography>
          <br />
          <Typography variant="body2">
            {cardDetails.skillsUsed.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(projectCardStyling(theme))(ProjectCard);
