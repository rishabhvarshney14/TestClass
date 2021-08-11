import React from "react";

// UI Components
import { Box, Button, makeStyles } from "@material-ui/core";
import { Share } from "@material-ui/icons";

// Styles
const useStyles = makeStyles({
  container: {
    height: 400,
    width: 320,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    background: "white",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
    justifyContent: "space-around",
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
    paddingRight: 30,
    textAlign: "center",
  },
  shareIcon: {
    marginTop: 5,
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

const Item = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.upper}>
        <img
          className={classes.image}
          src={props.coursePhoto}
          alt="cover_photo"
        />
      </Box>
      <Box className={classes.bottom}>
        <Box className={classes.dateAndIcon}>
          <p className={classes.dateText}>{props.date}</p>
          <Share className={classes.shareIcon} />
        </Box>
        <h3 style={{ textAlign: "center" }}>{props.courseHeading}</h3>
        <Box className={classes.author}>
          <img
            className={classes.authorImage}
            src={props.authorImage}
            alt="author_image"
          />
          <Box className={classes.authorName}>
            <p>{props.authorName}</p>
            <p style={{ color: "#b5b5b5" }}>{props.authorOccupation}</p>
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
