import { Box, IconButton, Menu, MenuItem, useTheme, InputAdornment, Avatar, Typography, useMediaQuery, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckIcon from '@mui/icons-material/Check';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const navigate = useNavigate(); // For redirection

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("Logout initiated"); // Debugging log
  
    localStorage.removeItem('userToken'); 
    console.log("User token removed");
    console.log("Redirecting to login page");
    navigate('/');
  };


  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      borderBottom="1px solid transparent" // Border at the bottom of the header
      ml={isMobile ? 0 : '60px'} // Adjust margin left to create spacing
      mt={isMobile ? 0 : '5px'} // Adjust margin top to create spacing
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        borderRadius="20px"
        border={`1px solid ${colors.primary[600]}`}
        width={isMobile ? "100%" : "300px"} // Adjust width for mobile
        mb={isMobile ? 2 : 0}
        p={1}
      >
        <InputBase 
          sx={{ ml: 2, flex: 1 }} 
          placeholder="Select Project here.."
          startAdornment={
            <InputAdornment position="start">
              <CheckIcon />
            </InputAdornment>
          }
        />
        <IconButton onClick={handleMenuOpen} sx={{ p: 1 }}>
          <ArrowDropDownIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Plant 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Plant 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Plant 3</MenuItem>
        </Menu>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <FlagOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        {/* Divider immediately after Notifications icon */}
        <Divider orientation="vertical" flexItem sx={{ height: 24, mx: 1 }} />
        <Box display="flex" alignItems="center" onClick={handleProfileMenuOpen} sx={{ cursor: 'pointer' }}>
          <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" sx={{ width: 24, height: 24, mr: 1 }} />
          {!isMobile && (
            <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
              SreeKumar
            </Typography>
          )}
          <ArrowDropDownIcon />
        </Box>
        <Menu
          anchorEl={profileMenuAnchorEl}
          open={Boolean(profileMenuAnchorEl)}
          onClose={handleProfileMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleProfileMenuClose}>My Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
