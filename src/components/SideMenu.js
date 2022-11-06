import { makeStyles, withStyles } from "@material-ui/core";
import React from "react";
import { useNavigate, Link,Routes, Route } from "react-router-dom";
import Employees from "../pages/Employees/Employees";
import Drawer from "./Drawer";

// makeStyles
// const useStyles = makeStyles({
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "320px",
//     height: "100%",
//     backgroundColor: "#253053",
//   },
// });

// withStyles
const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    // width: "16%",
    height: "100%",
    backgroundColor: "#253053",
  },
  container: {
    display: "flex"
  }
};

// makeStyles begin
// export default function SideMenu() {
//   const classes = useStyles();
//   console.log(classes);
//   return <div className={classes.sideMenu}></div>;
// }
// makeStyles end

// withStyles begin
const SideMenu = (props) => {
  const { classes } = props;
  return (
    // <div className={classes.sideMenu}>
    <div className={classes.container}>
      <Drawer />
      <Routes>
        
        <Route path="/employee" element={<Employees />} />
        
      </Routes>
      
    </div>
  );
};
export default withStyles(style)(SideMenu);
// withStyles end
