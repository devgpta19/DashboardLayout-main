import React from "react";
import {
  Drawer,
  ListItem,
  ListItemText,
  Box,
  Grid2,
  Stack,
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

const SidebarComponent = ({ isMobile, open, toggleSidebar }: Props) => {
  var [checked, setChecked] = React.useState<boolean>(true);

  open = !open;

  const handleTheme = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {/* Sidebar / Drawer */}
      {isMobile ? (
        // SIDEBAR FOR Mobile AND Smaller RESOLUTIONS
        <Drawer
          className="Drawer"
          anchor="left"
          open={!open}
          onClose={toggleSidebar}
        >
          <Grid2 className="Sidebar">
            <Stack className="SideBarTitle" spacing={3}>
              <Box sx={{width:"100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding:"10px"}}>
                {isMobile ? <h1>😎</h1> : <h1>😏</h1>}
                <MenuOpenIcon sx={{border:"1px solid lightgrey", borderRadius: "5px", cursor:"pointer"}} onClick={toggleSidebar} />
              </Box>
              <Stack className="SidebarComponent" spacing={5}>
                <h4 className="Title">
                  <HomeIcon />
                  {isMobile ? <h2>Home</h2> : undefined}
                </h4>
                <Stack spacing={4}>
                  <Stack
                    direction={"row"}
                    spacing={3}
                    justifyContent={"start"}
                    alignItems={"center"}
                    className="SideBarElements"
                  >
                    <HomeIcon className="SideBarIcons" />
                    {isMobile ? <h4>Home</h4> : undefined}
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={3}
                    justifyContent={"start"}
                    alignItems={"center"}
                    className="SideBarElements"
                  >
                    <HomeIcon className="SideBarIcons" />
                    {isMobile ? <h4>Home</h4> : undefined}
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={3}
                    justifyContent={"start"}
                    alignItems={"center"}
                    className="SideBarElements"
                  >
                    <HomeIcon className="SideBarIcons" />
                    {isMobile ? <h4>Home</h4> : undefined}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="ThemeChanger">
              <ListItem className="ListItems">
                <HomeIcon />
                <ListItemText
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  primary={isMobile ? "Theme" : undefined}
                />
                {isMobile ? (
                  <Switch
                    className="ThemeBtn"
                    checked={checked}
                    onChange={handleTheme}
                    // color="secondary"
                  />
                ) : undefined}
              </ListItem>
            </Stack>
          </Grid2>
        </Drawer>
      ) : (
        // SIDEBAR FOR DESKTOP AND GREATER RESOLUTIONS
        <Grid2
          className="Sidebar"
          onMouseEnter={!isMobile && open ? toggleSidebar : undefined}
          onMouseLeave={!isMobile && !open ? toggleSidebar : undefined}
        >
          <Stack className="SideBarTitle" spacing={5}>
            {!isMobile && open ? <h1>😎</h1> : <h1>😏</h1>}
            <Stack className="SidebarComponent" spacing={5}>
              <h4 className="Title">
                <HomeIcon />
                {!isMobile && !open ? <h2>Home</h2> : undefined}
              </h4>
              <Stack spacing={4}>
                <Stack
                  direction={"row"}
                  spacing={3}
                  justifyContent={"start"}
                  alignItems={"center"}
                  className="SideBarElements"
                >
                  <HomeIcon className="SideBarIcons" />
                  {!isMobile && !open ? <h4>Home</h4> : undefined}
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={3}
                  justifyContent={"start"}
                  alignItems={"center"}
                  className="SideBarElements"
                >
                  <HomeIcon className="SideBarIcons" />
                  {!open ? <h4>Home</h4> : undefined}
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={3}
                  justifyContent={"start"}
                  alignItems={"center"}
                  className="SideBarElements"
                >
                  <HomeIcon className="SideBarIcons" />
                  {!open ? <h4>Home</h4> : undefined}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack className="ThemeChanger">
            <ListItem className="ListItems">
              <HomeIcon />
              <ListItemText
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
                primary={!open ? "Theme" : undefined}
              />
              {isMobile || !open ? (
                <Switch
                  className="ThemeBtn"
                  checked={checked}
                  onChange={handleTheme}
                  // color="secondary"
                />
              ) : undefined}
            </ListItem>
          </Stack>
        </Grid2>
      )}
    </>
  );
};

export default SidebarComponent;

// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Stack,
//   Switch,
//   IconButton,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
// import MenuIcon from "@mui/icons-material/Menu";
// import "./SidebarComponent.scss";

// interface Props {
//   open: boolean;
//   toggleSidebar: () => void;
//   isMobile: boolean;
// }

// const SidebarComponent = ({ isMobile, open, toggleSidebar }: Props) => {
//   const [checked, setChecked] = React.useState<boolean>(true);

//   const handleTheme = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <>
//       {/* Mobile Sidebar (Drawer) */}
//       {isMobile ? (
//         <Drawer anchor="left" open={open} onClose={toggleSidebar}>
//           <Box className="Sidebar MobileSidebar" sx={{ width: 250 }}>
//             <List>
//               < button onClick={toggleSidebar}>
//                 <MenuOpenIcon />
//                 <ListItemText primary="Close" />
//               </button>
//               < button>
//                 <HomeIcon />
//                 <ListItemText primary="Home" />
//               </button>
//               < button>
//                 <Switch checked={checked} onChange={handleTheme} />
//                 <ListItemText primary="Theme" />
//               </button>
//             </List>
//           </Box>
//         </Drawer>
//       ) : (
//         // Desktop Sidebar
//         <Stack className={`Sidebar ${open ? "Expanded" : "Collapsed"}`}>
//           <Stack className="SidebarComponent" spacing={3}>
//             <IconButton onClick={toggleSidebar}>
//               {open ? <MenuOpenIcon /> : <MenuIcon />}
//             </IconButton>
//             <button>
//               <HomeIcon />
//               {open && <ListItemText primary="Home" />}
//             </button>
//             <button>
//               <Switch checked={checked} onChange={handleTheme} />
//               {open && <ListItemText primary="Theme" />}
//             </button>
//           </Stack>
//         </Stack>
//       )}
//     </>
//   );
// };

// export default SidebarComponent;
