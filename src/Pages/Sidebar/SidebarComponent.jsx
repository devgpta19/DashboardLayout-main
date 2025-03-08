import React from "react";
import { Drawer, List, ListItem, ListItemText, Box, Grid2 } from "@mui/material";
import "./SidebarComponent.scss"

const SidebarComponent = ({ isMobile, open, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar / Drawer */}
      <Grid2
        item
        className="Sidebar"
        onMouseEnter={!isMobile ? toggleSidebar : undefined}
      >
        <Drawer
          anchor="left"
          open={open}
          className="Drawer"
          onClose={isMobile ? toggleSidebar : undefined}
        >
          <Box className="DrawerBox" onMouseLeave={!isMobile ? toggleSidebar : undefined}>
            <List>
              <ListItem button onClick={toggleSidebar}>
                <ListItemText primary="Sidebar Content" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Grid2>
    </>
  );
};

export default SidebarComponent;
