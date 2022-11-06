// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, CssBaseline, ThemeProvider,makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import SideMenu from "../components/SideMenu";
import "./App.css";

import HeaderNew from "../components/HeaderNew";
import Employees from "../pages/Employees/Employees";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background:{
      default:"#f4f5fd"
    },
    overrides:{
      MuiAppBar:{
        root:{
          
        }
      }
    },
    props:{
      MuiIconButton :{
        disableRipple:true //Not working I put on each button thats work
      }
    }
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "190px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header></Header>
        {/* <HeaderNew></HeaderNew> */}
        

        <Employees/>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
