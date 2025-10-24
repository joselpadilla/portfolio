import React, { useState } from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Experience", path: "/experience" },
    { text: "Skills", path: "/skills" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                color: "inherit",
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.action.selected
                    : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Navigation open={drawerOpen} onClose={handleDrawerToggle} />
    </AppBar>
  );
};

export default Header;
