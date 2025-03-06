import React from "react";
import { Box, Typography } from "@mui/material";
import './section3.scss';

const GridLayout = () => {
  return (
    <Box className="BoxLayout">
      <Box item className="BoxItem Boxleft">
        <Typography variant="h5">Chart 1</Typography>
      </Box>
      <Box item className="BoxItem Boxright">
        <Typography variant="h5">Chart 2</Typography>
      </Box>
    </Box>
  );
};

export default GridLayout;
