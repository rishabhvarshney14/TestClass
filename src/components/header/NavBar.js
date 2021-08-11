import React from "react";

// UI Components
import { AppBar, Toolbar, makeStyles, withStyles } from "@material-ui/core";

// Custom Components
import SearchBar from "./SearchBar";
import NavButton from "./NavButton";

// Styles
const useStyle = makeStyles((theme) => ({
  component: {
    marginLeft: "12%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  header: {
    backgroundColor: "#FFFFFF",
    height: 55,
  },
  logo: {
    fontSize: 25,
    color: "black",
    marginRight: 25,
  },
  logoStart: {
    color: "lightblue",
  },
}));

// Update Styles
const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

// NavBar Component
const NavBar = () => {
  const classes = useStyle();

  return (
    <AppBar position="sticky" className={classes.header}>
      <ToolBar className={classes.component}>
        <h3 className={classes.logo}>
          <span className={classes.logoStart}>Test</span>Class
        </h3>
        <SearchBar />
        <NavButton />
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
