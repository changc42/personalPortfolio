import React from "react";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../muiTheme";
import headerStyles from "./headerStyles";
import { Grid, Typography, Container, Button } from "@material-ui/core";
import SocialMediaButton from "../../SocialMediaButton/SocialMediaButton";

const Header = (props) => {
  const { classes } = props;
  const images = [
    "linkedin-with-text.svg",
    "github-text.png",
    "LeetCode-with-text.svg",
  ];

  const socialMediaButton = [
    {
      imgsrc: "linkedin-with-text.svg",
      href: "https://www.linkedin.com/in/caleb-chang-010337123/",
    },
    {
      imgsrc: "github-text.png",
      href: "https://github.com/changc42",
    },
    {
      imgsrc: "LeetCode-with-text.svg",
      href: "https://leetcode.com/changc42/",
    },
  ];

  return (
    <div className={classes.Header}>
      <Typography variant="h1">Caleb Chang</Typography>
      <div className={classes.SocialMediaButtons}>
        {socialMediaButton.map((obj) => {
          return (
            <SocialMediaButton
              src={`${process.env.PUBLIC_URL}/${obj.imgsrc}`}
              alt={`${obj.imgsrc}`}
              href={`${obj.href}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(headerStyles(theme))(Header);
