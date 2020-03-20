import React from "react";
import Button from "@material-ui/core/Button";
import SocialMediaButtonStyles from "../styling/socialMediaButtonStyles";
import theme from "../styling/theme";
import { withStyles } from "@material-ui/core/styles";

function SocialMediaButton(props) {
  let { src, classes } = props;
  return (
    <Button className={classes.SocialMediaButton}>
      <img src={src} />
    </Button>
  );
}

export default withStyles(SocialMediaButtonStyles(theme))(SocialMediaButton);
