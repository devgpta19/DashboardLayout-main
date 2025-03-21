import React from "react";
import { Box, Typography } from "@mui/material";
import './Charts.scss';

const GridLayout: React.FC = () => {
  return (
    <Box className="BoxLayout">
      <Box className="BoxItem Boxleft">
        <Typography variant="h5">Chart 1</Typography>
      </Box>
      <Box className="BoxItem Boxright">
        <Typography variant="h5">Chart 2</Typography>
      </Box>
    </Box>
  );
};

export default GridLayout;
