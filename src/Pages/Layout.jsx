import React, { useState } from "react";
import Cards from "./Cards/Cards";
import {
  Grid,
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Section3 from "./Charts/Section3";
import LastSection from "./LastSection/LastSection";

const ResponsiveLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  return (
    <Grid container sx={{ height: "100vh" }}>
      {isMobile && (
        <AppBar position="fixed" sx={{ bgcolor: "red" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Navbar</Typography>
          </Toolbar>
        </AppBar>
      )}

      {!isMobile ? (
        <Grid
          item
          md={sidebarExpanded ? 2 : 0.5} 
          sx={{
            bgcolor: "red",
            color: "white",
            p: 2,
            transition: "width 0.3s ease-in-out",
            overflow: "hidden",
            whiteSpace: "nowrap",
            "&:hover": { width: "20%" }, 
          }}
          onMouseEnter={() => setSidebarExpanded(true)}
          onMouseLeave={() => setSidebarExpanded(false)}
        >
          Sidebar
        </Grid>
      ) : (
        <Drawer anchor="left" open={open} onClose={toggleSidebar}>
          <Box sx={{ width: 200, bgcolor: "red", color: "white", p: 2 }}>
            <List>
              <ListItem button onClick={toggleSidebar}>
                <ListItemText primary="Sidebar Content" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}

      <Grid
        item
        xs={12}
        md={sidebarExpanded ? 10 : 11.5} 
        sx={{
          bgcolor: "lightgray",
          mt: isMobile ? 8 : 0,
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease-in-out",
        }}
      >
        {!isMobile && (
          <Box sx={{ height: "38px", bgcolor: "lightblue", p: 1 }}>
            <Typography variant="h6">Header</Typography>
          </Box>
        )}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "20%", bgcolor: "lightcoral", p: 1.5 }}
        >
          <Cards />
        </Box>

        <Box  sx={{ height: "40%", bgcolor: "transparent", p: 1.5 }}>
          <Section3/>
        </Box>

        <Box sx={{ flexGrow: 1, bgcolor: "lightsalmon", p: 2 }}>
          <LastSection />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResponsiveLayout;
