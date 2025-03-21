import React from "react";
import { Box, Typography } from "@mui/material";
import './CalendarRT.scss';

const GridLayout: React.FC = () => {
  return (
    <Box className="GridLayout">
      <Box className="GridItem4 left4">
        <Typography variant="h5">Section4 Left</Typography>
      </Box>
      <Box className="GridItem4 right4">
        <Typography variant="h5">Section4 Right</Typography>
      </Box>
    </Box>
  );
};

export default GridLayout;
