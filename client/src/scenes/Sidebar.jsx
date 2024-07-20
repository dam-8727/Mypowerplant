import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from '../assets/logo.jpeg';
import energy from '../assets/logo2.png';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{ color: colors.grey[100] }}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        height: "100vh",
        width: isSmallScreen ? '150px' : '200px', // Adjust width based on screen size
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 20px 5px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-sidebar-menu-icon": {
          display: "none",
        },
      }}
    >
      <ProSidebar>
        <Box display="flex"
          alignItems="center"
          justifyContent="flex-start"
          padding="10px"
          sx={{ paddingLeft: "10px" }}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ width: isSmallScreen ? '60px' : '80px', transition: 'width 0.3s' }} 
          />
        </Box>
        <Menu iconShape="square">
          <Box paddingLeft="10%">
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Home"
              to="/home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="auto"
          mb="20px"
        >
          <Box display="flex" alignItems="center" sx={{ mt: "10px" }}>
            <img src={energy} alt="Logo" style={{ width: '40px', marginRight: '5px' }} />
            <Typography variant="h6" color={colors.grey[100]}>
              Energyecho
            </Typography>
          </Box>
        </Box>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
