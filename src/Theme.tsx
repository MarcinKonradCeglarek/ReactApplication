import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

let theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

theme = responsiveFontSizes(theme);

export default theme;
