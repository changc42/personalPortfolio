import React from "react";
import projectCardStyling from "./projectCardStyling";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../../muiTheme";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core";

function ProjectCard(props) {
  const { classes, cardDetails } = props;
  return (
    <div>
      <Card elevation="3" className={classes.Card}>
        <CardActionArea
          href={
            cardDetails.demo_url ? cardDetails.demo_url : cardDetails.github_url
          }
          target="_blank"
        >
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              {cardDetails.title}
            </Typography>
            <CardMedia
              image={`${process.env.PUBLIC_URL}/${cardDetails.image}`}
              className={classes.media}
              component="img"
            />
            <Typography variant="body1">{cardDetails.description}</Typography>
            <br />
            <Typography variant="body2" color="textSecondary">
              {cardDetails.skillsUsed.join(", ")}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href={`${cardDetails.github_url}`}
            target="_blank"
          >
            GitHub
          </Button>
          {cardDetails.demo_url ? (
            <Button
              size="small"
              color="primary"
              href={`${cardDetails.demo_url}`}
              target="_blank"
            >
              View Project
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(projectCardStyling(theme))(ProjectCard);
