import React from "react";

// UI Components
import { Button } from "@material-ui/core";

// NavButton Component
const NavButton = () => {
  return (
    <div>
      <Button variant="outlined" style={{ marginRight: 20 }} color="primary">
        Sign Up
      </Button>
      <Button variant="outlined" color="default">
        Login
      </Button>
    </div>
  );
};

export default NavButton;
