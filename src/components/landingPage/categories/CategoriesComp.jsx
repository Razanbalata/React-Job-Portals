import React from "react";
import { Card, Box, Typography } from "@mui/material";
import BrightnessHighOutlinedIcon from "@mui/icons-material/BrightnessHighOutlined";

function CategoriesComp({ text }) {
  return (
    <Card
      sx={{
        height: 191,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: 2,
        p:2
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
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        {text}
      </Typography>
    </Card>
  );
}

export default CategoriesComp;
