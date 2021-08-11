import React from "react";

// UI Components
import { Box, makeStyles } from "@material-ui/core";

// Custom Components
import CarouselItems from "./CarouselItems";

// Styles
const useStyles = makeStyles({
  container: {
    marginTop: 50,
    width: "80%",
    margin: "auto",
  },
});

const Carousel = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
      <CarouselItems />
    </Box>
  );
};

export default Carousel;
