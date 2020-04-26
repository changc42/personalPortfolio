import React from "react";
import projectCardStyling from "../../../styling/projects/projectCardStyling";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../styling/theme";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

function ProjectCard(props) {
  const { classes, cardDetails } = props;
  return (
    <div>
      {/* <Card>
        <CardHeader title={cardDetails.title}></CardHeader>
        <img src={`${process.env.PUBLIC_URL}/${cardDetails.image}`} />
        <CardContent>
          <Typography variant="body1">{cardDetails.description}</Typography>
          <br />
          <Typography variant="body2">
            {cardDetails.skillsUsed.join(", ")}
          </Typography>
        </CardContent>
      </Card> */}
      <Card>
        <CardActionArea href={`${cardDetails.url}`} target="_blank">
          <CardMedia
            image={`${process.env.PUBLIC_URL}/${cardDetails.image}`}
            className={classes.media}
            component="img"
          />
          <CardContent>
            <Typography variant="h5">{cardDetails.title}</Typography>
            <br />
            <Typography variant="body1">{cardDetails.description}</Typography>
            <br />
            <Typography variant="body2" color="textSecondary">
              {cardDetails.skillsUsed.join(", ")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
            Try it!
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(projectCardStyling(theme))(ProjectCard);
