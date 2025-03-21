import { useState } from "react";
import Cards from "../../Components/Cards/Cards";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Grid2,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Charts from "../../Components/Charts/Charts";
import CalendarRT from "../../Components/CalendarRT/CalendarRT";
import SidebarComponent from "../../Components/Sidebar/SidebarComponent";
import "./Layout.scss";
import "../../Components/Sidebar/SidebarComponent.scss";

const ResponsiveLayout = () => {
  
  const isMobile = useMediaQuery<boolean>("(max-width:768px)");
  const [open, setOpen] = useState<boolean>(false);
  const toggleSidebar = (): void => setOpen(!open);

  return (
    <Grid2 container className="ResponsiveLayout">
      {/* Navbar for Mobile */}
      {/* {isMobile && (
        <AppBar position="fixed" className="AppBar">
          <Toolbar>
            Mobile Sidebar Toggle Button
            <IconButton onClick={toggleSidebar} className="SidebarToggleBtn">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Navbar</Typography>
          </Toolbar>
        </AppBar>
      )} */}

      {isMobile && (
        <AppBar position="fixed" className="AppBar">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
              Navbar
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar (Passing props to SidebarComponent) */}
      <SidebarComponent isMobile={isMobile} open={open} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <Grid2 className="MainContent">
        {!isMobile && (
          <Box className="Header">
            <Typography variant="h6">Header</Typography>
          </Box>
        )}

        <Box className="CardsSection">
          <Cards />
        </Box>

        <Box className="ChartSection">
          <Charts />
        </Box>

        <Box className="CalendarRT">
          <CalendarRT />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ResponsiveLayout;
