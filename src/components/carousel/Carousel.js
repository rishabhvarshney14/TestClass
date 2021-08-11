import React from "react";

// UI Components
import { Box, makeStyles } from "@material-ui/core";

// Custom Components
import CarouselItems from "./CarouselItems";

// Custom Data
import {
  upcomingWorkshop,
  trendingWorkshop,
  upcomingCourses,
} from "./courseDetails";

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
      <CarouselItems heading="Upcoming Workshops" courses={upcomingWorkshop} />
      <CarouselItems heading="Trending Workshops" courses={trendingWorkshop} />
      <CarouselItems heading="Upcoming Courses" courses={upcomingCourses} />
    </Box>
  );
};

export default Carousel;
