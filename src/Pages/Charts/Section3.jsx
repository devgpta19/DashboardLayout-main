import React from "react";
import { Grid2, Typography } from "@mui/material";
import './section3.scss';

const GridLayout = () => {
  return (
    <Grid2 className="GridLayout">
      <Grid2 item className="GridItem left">
        <Typography variant="h5"></Typography>
      </Grid2>
      <Grid2 item className="GridItem right">
        <Typography variant="h5"></Typography>
      </Grid2>
    </Grid2>
  );
};

export default GridLayout;
