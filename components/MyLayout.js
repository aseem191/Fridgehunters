import Header from './Header'
import Meta from './meta'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import indigo from '@material-ui/core/colors/violet';
//import pink from '@material-ui/core/colors/blue';
//import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00cc44',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      main: '#80a2ff',
      // dark: will be calculated from palette.secondary.main,
    },
    tertiary: {
      main: '#33ffcc',
      // dark: will be calculated from palette.secondary.main,
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <MuiThemeProvider theme={theme}>
	<Meta />
    <Header />
    {props.children}
  </MuiThemeProvider>
)

export default Layout