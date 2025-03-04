import React from "react";
import { Grid, Typography } from "@mui/material";

const GridLayout = () => {
  return (
    <Grid display="flex" spacing={1} gap={1} height="100%">
      <Grid item xs={12} md={6} sx={{ bgcolor: "wheat", p: 2 }}>
        <Typography variant="h5"></Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ bgcolor: "red", p: 2 }}>
        <Typography variant="h5"></Typography>
      </Grid>
    </Grid>
  );
};

export default GridLayout;
