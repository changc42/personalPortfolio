import React from "react";
import { Typography, Container } from "@material-ui/core";

export default function About() {
  return (
    <Container>
      <Typography variant="h5">
        In what context was this project created?
      </Typography>
      <Typography variant="body1">
        Originally, this application was created for a "Internet and Web
        Technologies" class. The assignment was to utilize two APIs without any
        built-in libraries other than NodeJS. Due to the library restriction,
        the original app only used plain HTML, JavaScript, and CSS, so the
        appearance was pretty meh.
      </Typography>
      <Typography variant="body1">
        When I decided to put this project on my personal website, I polished
        the appearance a bit by translating the original, plain HTML version to
        React.
      </Typography>
      <Typography variant="body1">
        This project uses Google's Gmail API and Natural Language API
      </Typography>
    </Container>
  );
}
