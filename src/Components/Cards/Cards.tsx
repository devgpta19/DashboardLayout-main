import React, { useRef, WheelEvent } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "./card.scss";

const SimpleCard: React.FC = () => {
  const arr: number[] = [1, 2, 3, 4, 5];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const atLeftEdge = scrollLeft === 0;
      const atRightEdge = scrollLeft + clientWidth >= scrollWidth;

      if (!atLeftEdge && !atRightEdge) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <Box className="Box" ref={scrollRef} onWheel={handleScroll}>
      {arr.map((item) => (
        <Card className="Card" key={item} sx={{ p: 0 }}>
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