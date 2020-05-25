export default (theme) => ({
  Header: {
    textAlign: "center",
  },
  SubTitle: {
    textAlign: "center",
  },
  ButtonContainer: {
    textAlign: "center",
  },
  Buttons: {
    margin: "10px",
  },
  [theme.breakpoints.up("xs")]: {
    GmailLogoContainer: {
      textAlign: "center",
    },
    NLPLogoContainer: {
      textAlign: "center",
    },
  },
  [theme.breakpoints.up("md")]: {
    GmailLogoContainer: {
      textAlign: "right",
    },
    NLPLogoContainer: {
      textAlign: "left",
    },
  },

  Logo: {
    height: "100px",
  },
  Divider: {
    margin: "20px 0",
  },
});
