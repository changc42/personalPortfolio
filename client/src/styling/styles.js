const styles = theme => ({
  root: {
    textAlign: "center"
  },
  socialMediaLinks: {
    "& Button img": {
      height: "25px",
      borderRadius: "10px",
      margin: "10px",
      padding: "5px"
    },
    [theme.breakpoints.up("sm")]: {
      "& Button img": {
        height: "40px"
      }
    }
  }
});

export default styles;
