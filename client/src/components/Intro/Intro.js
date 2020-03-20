import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../styling/theme";
import styles from "../../styling/styles";
import "../../styling/Intro.css";

const useStyles = makeStyles(styles(theme));

const Intro = props => {
  const classes = useStyles(props);
  return (
    <div className="Intro">
      <div className={classes.root}>
        <Container>
          <Typography variant="h1">Caleb Chang</Typography>
          <div className={classes.socialMediaLinks}>
            <Button>
              <img src="..\..\..\leetcode-with-text.svg" alt="leetcode" />
            </Button>
            <Button>
              <img src="..\..\..\linkedin-with-text.svg" alt="linkedin" />
            </Button>
            <Button>
              <img src="..\..\..\github-text.png" alt="github" />
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
