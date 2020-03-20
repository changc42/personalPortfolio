import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontSize: 14
  }
});
theme = responsiveFontSizes(theme);

export default theme;
