import React from "react";

// UI Components
import { Box, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// Styles
const useStyles = makeStyles({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "#141414",
    color: "white",
  },
  component: {
    width: "80%",
    margin: "auto",
    paddingTop: 25,
  },
  left: {},
  logo: {
    fontSize: 25,
    marginRight: 25,
  },
  logoStart: {
    color: "lightblue",
  },
  subheading: {
    marginTop: -20,
    fontWeight: 200,
    paddingLeft: 10,
  },
  icons: {
    paddingTop: 15,
  },
  icon: {
    paddingRight: 15,
    height: 30,
    width: 30,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.component}>
        <Box className={classes.left}>
          <h3 className={classes.logo}>
            <span className={classes.logoStart}>Test</span>Class
          </h3>
          <p className={classes.subheading}>Feel the Tests.</p>
          <Box className={classes.icons}>
            <FacebookIcon className={classes.icon} />
            <TwitterIcon className={classes.icon} />
            <InstagramIcon className={classes.icon} />
            <LinkedInIcon className={classes.icon} />
          </Box>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vivamus at leo eu erat volutpat sagittis.</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
