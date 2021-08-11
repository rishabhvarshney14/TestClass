import React from "react";

// UI Components
import { Box } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom Components
import Item from "./Item";

// responsive attribute for 'react-multi-carousel'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// CarouselItems Components
const CarouselItems = ({ heading, courses }) => {
  return (
    <Box>
      <p style={{ fontSize: 25, fontWeight: 700 }}>{heading}</p>
      <Carousel
        responsive={responsive}
        infinite
        draggable={false}
        skipeable={false}
        centerMode
        autoPlay
        autoPlaySpeed={10000}
        keyBoardControl
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
        coontainerClass="carousel-container"
      >
        {courses.map((course) => (
          <Item
            coursePhoto={course.coursePhoto}
            date={course.date}
            courseHeading={course.courseHeading}
            authorImage={course.authorImage}
            authorName={course.authorName}
            authorOccupation={course.authorOccupation}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselItems;
