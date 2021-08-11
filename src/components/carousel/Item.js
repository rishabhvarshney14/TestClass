import React from "react";

// UI Components
import { Box, Button, makeStyles } from "@material-ui/core";
import { Share } from "@material-ui/icons";

// Data
import cover_photo1 from "./data/cover_photo1.jpg";
import author_image from "./data/author_image.jpeg";

// Styles
const useStyles = makeStyles({
  container: {
    height: 400,
    width: 320,
    borderRadius: 20,
    padding: 10,
    background: "white",
  },
  upper: {
    height: "45%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  bottom: {
    height: "45%",
    width: "100%",
  },
  dateAndIcon: {
    display: "flex",
  },
  dateText: {
    width: "80%",
    backgroundColor: "#FEECFD",
    margin: 0,
    marginTop: 5,
    borderRadius: 25,
    fontSize: 15,
    fontWeight: 600,
    textAlign: "center",
    padding: "5px 0",
  },
  author: {
    display: "flex",
    justifyContent: "space-around",
  },
  authorImage: {
    height: 70,
    width: 70,
    borderRadius: "50%",
    marginBottom: 15,
    paddingLeft: 10,
  },
  authorName: {
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 30,
  },
  shareIcon: {
    marginTop: 5,
    marginLeft: 10,
  },
  button: {
    fontWeight: 600,
    fontSize: 15,
    width: "100%",
    backgroundColor: "lightblue",
    // marginLeft: 7,
    margin: "auto",
  },
});

const Item = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.upper}>
        <img className={classes.image} src={cover_photo1} alt="cover_photo" />
      </Box>
      <Box className={classes.bottom}>
        <Box className={classes.dateAndIcon}>
          <p className={classes.dateText}>Date: 15 Sept, 2021</p>
          <Share className={classes.shareIcon} />
        </Box>
        <h3 style={{ textAlign: "center" }}>Course Heading</h3>
        <Box className={classes.author}>
          <img
            className={classes.authorImage}
            src={author_image}
            alt="author_image"
          />
          <Box className={classes.authorName}>
            <p>Author Name</p>
            <p style={{ color: "#b5b5b5" }}>Occupation</p>
          </Box>
        </Box>
        <Button variant="contained" className={classes.button}>
          Register Now!
        </Button>
      </Box>
    </Box>
  );
};

export default Item;
