import React from "react";
import Button from "@material-ui/core/Button";
import SocialMediaButtonStyles from "./socialMediaButtonStyles";
import theme from "../../styling/theme";
import { withStyles } from "@material-ui/core/styles";

function SocialMediaButton(props) {
  let { src, classes, alt, href } = props;
  return (
    <Button className={classes.SocialMediaButton} href={href} target="_blank">
      <img src={src} alt={alt} />
    </Button>
  );
}

export default withStyles(SocialMediaButtonStyles(theme))(SocialMediaButton);
