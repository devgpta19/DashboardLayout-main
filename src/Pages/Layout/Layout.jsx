// import React, { useState } from "react";
// import Cards from "../Cards/Cards";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   useMediaQuery,
//   useTheme,
//   List,
//   ListItem,
//   ListItemText,
//   Grid2,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Section3 from "../Charts/Section3";
// import CalendarRT from "../CalendarRT/CalendarRT";
// import "./Layout.scss";

// const ResponsiveLayout = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery("(max-width:1024px)"); // Changed from `theme.breakpoints.down("lg")`
//   const [open, setOpen] = useState(false);
//   const [sidebarExpanded, setSidebarExpanded] = useState(false);

//   const toggleSidebar = () => setOpen(!open);

//   return (
//     <Grid2 container className="ResponsiveLayout">
//       {isMobile && (
//         <AppBar position="fixed" className="AppBar">
//           <Toolbar>
//             <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6">Navbar</Typography>
//           </Toolbar>
//         </AppBar>
//       )}




// {isMobile ? (
//   // Mobile Drawer
//   <Drawer anchor="left" open={open} onClose={() => { setOpen(false); setSidebarExpanded(false); }}>
//     <Box className="DrawerSidebar">
//       <List>
//         <ListItem button onClick={toggleSidebar}>
//           <ListItemText primary="Sidebar Content" />
//         </ListItem>
//       </List>
//     </Box>
//   </Drawer>
// ) : (
//   // Sidebar for Desktop
//   <Grid2
//     item
//     className="Sidebar"
//     onMouseEnter={() => {
//       setSidebarExpanded(true);
//       toggleSidebar();
//     }}
//   >
//     <Drawer anchor="left" open={open} className="Drawer">
//       <Box
//         className="DrawerBox"
//         onMouseLeave={() => {
//           setSidebarExpanded(false);
//           toggleSidebar();
//         }}
//       >
//         <Grid2>
//           <List>
//             <ListItem>
//               <ListItemText primary="Sidebar Content" />
//             </ListItem>
//           </List>
//         </Grid2>
//       </Box>
//     </Drawer>
//   </Grid2>
// )}





//       {/* Sidebar for larger screens */}
//       {/* {!isMobile && (
//         <Grid2
//           item
//           className="Sidebar"
//           onMouseEnter={() => {
//             setSidebarExpanded(true);
//             toggleSidebar();
//           }}>
//           <Drawer anchor="left" open={open}
//             className="Drawer">
//             <Box 
//             className="DrawerBox"
//               onMouseLeave={() => {
//                 setSidebarExpanded(false);
//                 toggleSidebar();
//               }}>
//               <Grid2>
//                 <List>
//                   <ListItem >
//                     <ListItemText primary="Sidebar Content" />
//                   </ListItem>
//                 </List>
//               </Grid2>
//             </Box>
//           </Drawer>
//         </Grid2>
//       )} */}

//       {/* Drawer for mobile screens */}
//       {/* <Drawer anchor="left" open={open} onClose={()=>{setOpen(false);setSidebarExpanded(false);}}>
//         <Box className="DrawerSidebar">
//           <List>
//             <ListItem button onClick={toggleSidebar}>
//               <ListItemText primary="Sidebar Content" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer> */}

//       <Grid2 item className="MainContent">
//         {!isMobile && (
//           <Box className="Header">
//             <Typography variant="h6">Header</Typography>
//           </Box>
//         )}

//         <Box className="CardsSection">
//           <Cards />
//         </Box>

//         <Box className="ChartSection">
//           <Section3 />
//         </Box>

//         <Box className="CalendarRT">
//           <CalendarRT />
//         </Box>
//       </Grid2>
//     </Grid2>
//   );
// };

// export default ResponsiveLayout;





import React, { useState } from "react";
import Cards from "../Cards/Cards";
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
import Section3 from "../Charts/Section3";
import CalendarRT from "../CalendarRT/CalendarRT";
import SidebarComponent from "../Sidebar/SidebarComponent";
import "./Layout.scss";
import "../Sidebar/SidebarComponent.scss";

const ResponsiveLayout = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <Grid2 container className="ResponsiveLayout">
      {/* Navbar for Mobile */}
      {isMobile && (
        <AppBar position="fixed" className="AppBar">
          <Toolbar>
            {/* Mobile Sidebar Toggle Button */}
            <IconButton onClick={toggleSidebar} className="SidebarToggleBtn">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Navbar</Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar (Passing props to SidebarComponent) */}
      <SidebarComponent isMobile={isMobile} open={open} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
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
