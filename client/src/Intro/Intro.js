import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styling/theme";
import styles from "../styling/styles";

const useStyles = makeStyles(styles(theme));

const Intro = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h1">Caleb Chang</Typography>
        <span style={{ fontSize: "3em", color: "#0077b5" }}>
          <i class="fab fa-linkedin 9x"></i>
        </span>
      </Container>
    </div>
  );
};

export default Intro;
