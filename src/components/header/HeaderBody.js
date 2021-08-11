import React from "react";

// UI Components
import { Box, Button, makeStyles } from "@material-ui/core";

// Data
import image from "./data/headerImage.jpg";

// Styles
const useStyle = makeStyles({
  container: {
    width: "80%",
    margin: "auto",
    height: 400,
    display: "flex",
  },
  leftHeader: {
    width: "50%",
  },
  rightHeader: {
    width: "50%",
  },
  headingText: {
    fontSize: 50,
    fontWeight: 600,
  },
  text: {
    fontSize: 20,
  },
  button: {
    fontSize: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

const HeaderBody = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Box className={classes.leftHeader}>
        <p className={classes.headingText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          semper dui id elementum dapibus. Sed id commodo urna, ac pharetra leo.
          Ut leo felis, blandit non est sed, sagittis eleifend mauris.
        </p>
        <Button className={classes.button} color="primary">
          Check Courses Now!
        </Button>
      </Box>

      <Box className={classes.rightHeader}>
        <img
          className={classes.image}
          src={image}
          alt="check courses on TestClass"
        />
      </Box>
    </Box>
  );
};

export default HeaderBody;
