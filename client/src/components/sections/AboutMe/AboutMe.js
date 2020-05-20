import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import aboutMeStyles from "./aboutMeStyles";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../../muiTheme";

function AboutMe(props) {
  const { classes } = props;
  return (
    <div className={classes.AboutMe}>
      <Typography variant="h2">About Me</Typography>
      <div>
        {/* <Grid container spacing={5}> */}
        {/* <Grid item xs={12} md={3} className={classes.ProfilePic}>
            <img src={`${process.env.PUBLIC_URL}/me-small.png`} />
          </Grid> */}
        {/* <Grid item xs={12} md={9}> */}
        <div>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            I'm a computer science student at CUNY, Queens College, and I'm
            actively looking for software engineering opportunities.
          </Typography>
        </div>
        {/* </Grid> */}
        {/* </Grid> */}
      </div>
    </div>
  );
}

export default withStyles(aboutMeStyles(theme))(AboutMe);
