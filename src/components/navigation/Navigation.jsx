import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ open, onClose }) => {
  const theme = useTheme();
  const location = useLocation();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Experience", path: "/experience" },
    { text: "Skills", path: "/skills" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: theme.palette.background.paper,
        },
      }}
    >
      <Box onClick={onClose} role="presentation">
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.action.selected,
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navigation;
