import React from "react";
import { Grid,Typography } from "@mui/material";
import './section3.scss'


const GridLayout = () => {
  return (
    <Grid className="GridLayout">
      <Grid item className="GridItem left" >
        <Typography variant="h5"></Typography>
      </Grid>
      <Grid item className="GridItem right" >
        <Typography variant="h5"></Typography>
      </Grid>
    </Grid>
  );
};

export default GridLayout;

