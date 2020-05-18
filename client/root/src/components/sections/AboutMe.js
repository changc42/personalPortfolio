import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import aboutMeStyles from "../../styling/aboutMeStyles";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../styling/theme";

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
            Caleb is a a computer science student at CUNY, Queens College.
            <br />
            He is seeking an internship for Summer 2020.
            <br />
            His expected graduation date is December 2020.
          </Typography>
        </div>
        {/* </Grid> */}
        {/* </Grid> */}
      </div>
    </div>
  );
}

export default withStyles(aboutMeStyles(theme))(AboutMe);
