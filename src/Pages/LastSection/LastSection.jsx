import React from "react";
import { Grid2, Typography } from "@mui/material";
import './LastSection.scss';

const GridLayout = () => {
  return (
    <Grid2 className="GridLayout">
      <Grid2 item className="GridItem left4">
        <Typography variant="h5">Section4 Left</Typography>
      </Grid2>
      <Grid2 item className="GridItem right4">
        <Typography variant="h5">Section4 Right</Typography>
      </Grid2>
    </Grid2>
  );
};

export default GridLayout;
