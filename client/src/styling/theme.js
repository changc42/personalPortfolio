import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontSize: 13,
    h1: {
      textAlign: "center"
    },
    h2: {
      textAlign: "center",
      margin: "20px"
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
