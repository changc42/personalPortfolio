const aboutMeStyles = theme => ({
  AboutMe: {},
  ProfilePic: {
    "& img": {
      borderRadius: "20%"
    },
    [theme.breakpoints.up("xs")]: {
      "& img": {
        width: "300px"
      },
      textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
      "& img": {
        width: "100%"
      }
    }
  }
});

export default aboutMeStyles;
