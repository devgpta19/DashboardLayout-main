import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import './card.scss'

const SimpleCard = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  
  return (
    <Box className="Box" p={0} >
      {arr.map((item) => (
        <Card className="Card" key={item} sx={{p:0}}>
          <CardContent>
            <Typography variant="h5">Card {item}</Typography>
            <Typography variant="body2">Card Content</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SimpleCard;
