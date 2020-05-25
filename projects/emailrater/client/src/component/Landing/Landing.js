import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import landingStyles from "./landingStyles";

function Landing(props) {
  let [msg, setMsg] = useState("");

  let { classes } = props;

  return (
    <div>
      <Container>
        <Typography variant="h1" className={classes.Header}>
          Email Rater
        </Typography>
        <Typography variant="h4" className={classes.SubTitle}>
          Find out how positive or negative your emails are
        </Typography>
        <div className={classes.ButtonContainer}>
          <Button
            className={classes.Buttons}
            variant="contained"
            color="primary"
            href="api/auth"
          >
            Try it!
          </Button>
          <Button className={classes.Buttons} href="about" variant="outlined">
            About This Project
          </Button>
        </div>
        <Divider className={classes.Divider} />
        <Typography variant="h5" className={classes.SubTitle}>
          Powered By:
        </Typography>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} className={classes.GmailLogoContainer}>
              <img className={classes.Logo} src="gmail_logo.png" />
            </Grid>
            <Grid item xs={12} md={6} className={classes.NLPLogoContainer}>
              <img className={classes.Logo} src="google_nat_lang_logo.png" />
            </Grid>
          </Grid>
        </Container>

        <Divider className={classes.Divider} />
        <Typography variant="body1">
          <strong style={{ textDecoration: "underline" }}>
            PRIVACY NOTICE
          </strong>{" "}
        </Typography>
        <Typography variant="body1">
          This app requires permission to read your emails. Your emails are
          temporarily stored for analysis. All emails are cleaned from the
          application's memory daily.
        </Typography>
        <br></br>
        <Typography variant="body1">
          This app has not been verified with Google, so you will receive a
          warning message when granting permission. If you have privavy concers,
          you can view the source code on GitHub to see how your emails are
          handled. However, it is understandable if you do not trust this
          application with reading your emails.
        </Typography>
      </Container>
    </div>
  );
}

export default withStyles(landingStyles)(Landing);
