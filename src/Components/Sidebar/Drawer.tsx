import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Switch from "@mui/material/Switch";

import "./SidebarComponent.scss";

interface Props {
  open: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
}

const DrawerComponent = ({ isMobile, open, toggleSidebar }: Props) => {
  var [checked, setChecked] = React.useState<boolean>(true);

  const handleTheme = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // toggleSidebar();
    setChecked(event.target.checked);
  };

  return (
    <Drawer
      anchor="left"
      className="Drawer"
      open={open}
      onClose={isMobile ? toggleSidebar : undefined}
    >
      <Box
        className="DrawerBox"
        onMouseLeave={!isMobile ? toggleSidebar : undefined}
      >
        {!toggleSidebar ? (
          <Box className="CloseSideBarElem">
            <HomeIcon />
            <HomeIcon />
            <HomeIcon />
            <HomeIcon />
          </Box>
        ) : undefined}

        <Box className="SidebarHeader">
          <h4 className="Title">
            <HomeIcon />
            TradyLytics
          </h4>
          {isMobile ? (
            <MenuOpenIcon
              className="OpenMenuIcon"
              // button
              onClick={toggleSidebar}
            />
          ) : undefined}
        </Box>
        <List className="List">
          <ListItem
            className="ListItems"
            // button
            onClick={toggleSidebar}
          >
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
          <ListItem className="ListItems" onClick={toggleSidebar}>
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
          <ListItem className="ListItems" onClick={toggleSidebar}>
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
          <ListItem className="ListItems" onClick={toggleSidebar}>
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
      <div
        className="ThemeChanger"
        onMouseLeave={!isMobile ? toggleSidebar : undefined}
      >
        <ListItem className="ListItems">
          <HomeIcon />
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
            primary="Theme"
          />
          <Switch
            className="ThemeBtn"
            checked={checked}
            onChange={handleTheme}
            // color="secondary"
          />
        </ListItem>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;