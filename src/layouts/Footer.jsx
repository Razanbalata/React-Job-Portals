import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#338573",
      color: "#FFFFFF",
      height: "71px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mt: 10,
    }}
  >
    <Typography variant="body2">
      © 2025 Jobs Portal. Designed by Wilson Kinyua
    </Typography>
  </Box>
);

export default Footer;
