import React from "react";

// UI Components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// Styles
const useStyles = makeStyles({
  container: {
    border: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  table: {
    minWidth: 400,
  },
  heading: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    borderBottom: "none",
  },
  cellText: {
    color: "white",
    textAlign: "center",
    borderBottom: "none",
    fontSize: 14,
    fontWeight: 600,
    paddingLeft: 30,
  },
});

// FooterTable Component
const FooterTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading} align="center" colSpan={2}>
              Explore Pages
            </TableCell>
            <TableCell className={classes.heading} align="center">
              Contact Us
            </TableCell>
            <TableCell className={classes.heading} align="center">
              Address
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cellText}>Page 1</TableCell>
            <TableCell className={classes.cellText}>Page 2</TableCell>
            <TableCell className={classes.cellText}>
              Email: test@email.com
            </TableCell>
            <TableCell className={classes.cellText} align="right">
              Vivamus at leo eu erat volutpat sagittis.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cellText}>Page 3</TableCell>
            <TableCell className={classes.cellText}>Page 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cellText}>Page 5</TableCell>
            <TableCell className={classes.cellText}>Page 6</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default FooterTable;
