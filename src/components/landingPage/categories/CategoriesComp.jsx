// CategoriesComp.jsx
import React from "react";
import { Card, Box, Typography } from "@mui/material";
import BrightnessHighOutlinedIcon from "@mui/icons-material/BrightnessHighOutlined";
import { Link } from "react-router-dom";

function CategoriesComp({ text,catId }) {
  console.log(text,catId)
  return (
   <Link to={`/categories/${catId}`}>
     <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 2,
        p: 2,
        borderRadius: 2,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)" }, // تأثير hover
      }}
    >
      <Box
        sx={{
          width: 75,
          height: 73,
          borderRadius: "50%",
          backgroundColor: "#33857352",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
        }}
      >
        <BrightnessHighOutlinedIcon sx={{ color: "#338573", fontSize: 30 }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center", fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}>
        {text}
      </Typography>
    </Card>
   </Link>
  );
}

export default CategoriesComp;
