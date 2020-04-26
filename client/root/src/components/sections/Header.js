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
