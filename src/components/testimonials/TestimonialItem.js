import React from "react";

// UI Components
import { Box, makeStyles } from "@material-ui/core";

// Styles
const useStyles = makeStyles({
  container: {
    height: 350,
    width: 500,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    background: "white",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  upper: {
    width: "100%",
    height: "40%",
    backgroundColor: "#d8e4eb",
    borderRadius: 25,
    display: "flex",
    justifyContent: "space-around",
    paddingTop: 30,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 25,
  },
  studentDetails: {
    paddingTop: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
  bottom: {
    fontSize: 18,
    color: "#4a4a4a",
    textAlign: "center",
    paddingTop: 20,
  },
});

// TestimonialItem Component
const TestimonialItem = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.upper}>
        <img className={classes.image} src={props.image} alt="student_image" />
        <Box className={classes.studentDetails}>
          <p>{props.name}</p>
          <p style={{ color: "#828282" }}>{props.occupation}</p>
        </Box>
      </Box>
      <Box className={classes.bottom}>{props.review}</Box>
    </Box>
  );
};

export default TestimonialItem;
