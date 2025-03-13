import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid2,
} from "@mui/material";
import "./SidebarComponent.scss";
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

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
          <Box
            className="DrawerBox"
             onMouseLeave={!isMobile ? toggleSidebar : undefined}
          >
            <Box className="SidebarHeader">
              {/* <ListItemText
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
                primary="SideBar"
              /> */}
              <h4>SideBar</h4>
              <MenuOpenIcon className="OpenMenuIcon" button onClick={toggleSidebar}  />
            </Box>
            <List className="List">
              <ListItem className="ListItems" button onClick={toggleSidebar}>
                <HomeIcon />
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  primary="Home"
                />
              </ListItem>
              <ListItem className="ListItems" button onClick={toggleSidebar}>
                <HomeIcon />
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  primary="Home"
                />
              </ListItem>
              <ListItem className="ListItems" button onClick={toggleSidebar}>
                <HomeIcon />
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  primary="Home"
                />
              </ListItem>
              <ListItem className="ListItems" button onClick={toggleSidebar}>
                <HomeIcon />
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  primary="Home"
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Grid2>
    </>
  );
};

export default SidebarComponent;
