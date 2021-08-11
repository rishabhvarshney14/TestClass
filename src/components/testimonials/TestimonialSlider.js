import React from "react";

// UI Components
import { Box } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom Components
import TestimonialItem from "./TestimonialItem";

// responsive attribute for 'react-multi-carousel'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1500, min: 1000 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
  },
};

// TestimonialSlider Component
const TestimonialSlider = ({ data }) => {
  return (
    <Box>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((element) => (
          <TestimonialItem
            image={element.image}
            name={element.name}
            occupation={element.occupation}
            review={element.review}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default TestimonialSlider;
