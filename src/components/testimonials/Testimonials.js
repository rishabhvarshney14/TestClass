import React from "react";

// UI Components
import { Box, makeStyles } from "@material-ui/core";

// Custom Components
import TestimonialSlider from "./TestimonialSlider";

// Custom Data
import { testimonialList } from "./testimonialData";

// Styles
const useStyles = makeStyles({
  container: {
    width: "65%",
    margin: "auto",
  },
  heading: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 15,
    fontWeight: 600,
    color: "#828282",
    textAlign: "center",
  },
});

// Testimonials Component
const Testimonials = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <p className={classes.heading}>What Our Students are Saying?</p>
      <p className={classes.subHeading}>
        We share success stories of our students via our instagram stories. Make
        sure to check that too!
      </p>
      <TestimonialSlider data={testimonialList} />
    </Box>
  );
};

export default Testimonials;
