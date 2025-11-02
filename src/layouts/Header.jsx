import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Dashboard", to: "/jobTable", bg:false},
    { text: "Post Job", to: "/postJob",bg:true },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", color: "#338573", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: { xs: "70px", sm: "109px" },
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") e.preventDefault();
          }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, fontSize: { xs: "24px", sm: "24px" } }}
          >
            JobsPortal
          </Typography>
        </Link>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Link to="/jobTable" style={{ textDecoration: "none", color: "#338573" }}>
              <Typography fontSize="14px" fontWeight="bold">
                Dashboard
              </Typography>
            </Link>
            <Link to="/postJob" style={{ textDecoration: "none" }}>
              <Button primary={menuItems[1].text} />
            </Link>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 200 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item) => (
                    <ListItem button key={item.text} component={Link} to={item.to}>
                      <Button primary={item.text} hasBg={item.bg} />
                    </ListItem>
                  ))}
                  
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
