import React, { useState } from "react";
import Cards from "../Cards/Cards";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Grid2,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Section3 from "../Charts/Section3";
import CalendarRT from "../CalendarRT/CalendarRT";
import "./Layout.scss";

const ResponsiveLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1024px)"); // Changed from `theme.breakpoints.down("lg")`
  const [open, setOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <Grid2 container className="ResponsiveLayout">
      {isMobile && (
        <AppBar position="fixed" className="AppBar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Navbar</Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar for larger screens */}
      {!isMobile && (
        <Grid2
          item
          className="Sidebar"
          onMouseEnter={() => {
            setSidebarExpanded(true);
            toggleSidebar();
          }}>
          <Drawer anchor="left" open={open} sx={{ width: 300 }}
            className="Drawer">
            <Box 
            className="DrawerBox"
              onMouseLeave={() => {
                setSidebarExpanded(false);
                toggleSidebar();
              }}>
              <Grid2>
                <List>
                  <ListItem >
                    <ListItemText primary="Sidebar Content" />
                  </ListItem>
                </List>
              </Grid2>
            </Box>
          </Drawer>
        </Grid2>
      )}

      {/* Drawer for mobile screens */}
      {/* <Drawer anchor="left" open={open} onClose={()=>{setOpen(false);setSidebarExpanded(false);}}>
        <Box className="DrawerSidebar">
          <List>
            <ListItem button onClick={toggleSidebar}>
              <ListItemText primary="Sidebar Content" />
            </ListItem>
          </List>
        </Box>
      </Drawer> */}

      <Grid2 item className="MainContent">
        {!isMobile && (
          <Box className="Header">
            <Typography variant="h6">Header</Typography>
          </Box>
        )}

        <Box className="CardsSection">
          <Cards />
        </Box>

        <Box className="ChartSection">
          <Section3 />
        </Box>

        <Box className="CalendarRT">
          <CalendarRT />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ResponsiveLayout;
