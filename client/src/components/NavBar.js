import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button } from "@mui/material";


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElAnalytics, setAnchorElAnalytics] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenAnalyticsMenu = (event) => {
    setAnchorElAnalytics(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseAnalyticsMenu = () => {
    setAnchorElAnalytics(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Spotify Hub</Typography>
          <Box sx={{display: 'flex'}}>
            <Typography
              variant="h6"
              sx={{ cursor: "pointer", mx: [1,2,3]}} //Responsive horizontal margin
              onClick={handleOpenAnalyticsMenu}
            >
              Analytics
            </Typography>
            <Typography
              variant="h6"
              sx={{ cursor: "pointer", mx: [1,2,3]}} //Responsive horizontal margin
            >
              Log In
            </Typography>
          </Box>
          <Menu
            id=""
            anchorEl={anchorElAnalytics}
            keepMounted
            open={Boolean(anchorElAnalytics)}
            onClose={handleCloseAnalyticsMenu}
          >
            <MenuItem onClick={handleCloseAnalyticsMenu}>Top Tracks</MenuItem>
            <MenuItem onClick={handleCloseAnalyticsMenu}>Timeline</MenuItem>
            <MenuItem onClick={handleCloseAnalyticsMenu}>Recommendations</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
