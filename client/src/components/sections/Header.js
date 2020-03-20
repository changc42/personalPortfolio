import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../styling/theme";
import headerStyles from "../../styling/headerStyles";
import AboutMe from "./AboutMe";
import Grid from "@material-ui/core/Grid";
import SocialMediaButton from "../SocialMediaButton";

const Header = props => {
  const { classes } = props;
  const images = [
    "linkedin-with-text.svg",
    "github-text.png",
    "leetcode-with-text.svg"
  ];

  return (
    <div className={classes.Header}>
      <Typography variant="h1">Caleb Chang</Typography>
      <div className={classes.SocialMediaButtons}>
        <SocialMediaButton src="LeetCode-with-text.svg" />
        <SocialMediaButton src="github-text.png" />
        <SocialMediaButton src="linkedin-with-text.svg" />
      </div>
    </div>
  );
};

export default withStyles(headerStyles(theme))(Header);
