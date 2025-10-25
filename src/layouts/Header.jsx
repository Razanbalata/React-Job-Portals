import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => (
  <AppBar
    position="static"
    sx={{ backgroundColor: "#fff", color: "#338573", boxShadow: "none" }}
  >
    <Toolbar
      sx={{ display: "flex", justifyContent: "space-between", height: "109px" }}
    >
      <Link
        to="/"
        onClick={(e) => {
          if (location.pathname === "/") e.preventDefault();
        }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: "36px" }}>
          JobsPortal
        </Typography>
      </Link>

      <Box sx={{ display: "flex", gap: 2,alignItems:"center" }}>
          {/* Dashboard */}
          <Link to="/jobTable" style={{ textDecoration: "none" ,color:"#338573"}}>
            <Typography fontSize='20px' fontWeight="bold">Dashboard</Typography>
          </Link>

          {/* Post Job */}
          <Link to="/postJob" style={{ textDecoration: "none" }}>
            <Button />
          </Link>
        </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
