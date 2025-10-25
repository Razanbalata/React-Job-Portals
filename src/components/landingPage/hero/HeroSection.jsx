import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end", // الصورة على اليمين
        width: "100%",
        height: "90vh",
        position: "relative",
        px: { xs: 2, md: 8 },
        overflow: "hidden",
      }}
    >
      {/* الصورة */}
      <Box
        component="img"
        src="/images/06c80047701397e7fe8d91f94e2852a2890c929f.png"
        alt="Hero"
        sx={{
          width: { xs: "100%", md: "100%" },
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
          transform: 'scale(1.26, 1.0)'
        }}
      />

      {/* النص والفورم فوق الصورة */}
      <Box
        sx={{
          position: "absolute",
          top: "330px",
          left: { xs: "50%", md: "25%" }, // على الديسكتوب يكون على اليسار من منتصف الصورة
          transform: "translate(-50%, -50%)",
          color: "#000",
          textAlign: { xs: "center", md: "left" },
          width: { xs: "90%", md: "40%" },
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2,fontSize:"85px",fontWeight:"bold" }}>
          Find A <span style={{color:"#338573"}}>Job</span> That <span style={{color:"#338573"}}>Matches</span> Your Passion
        </Typography>
        <Typography variant="body1" sx={{ mb: 3,fontSize:"20px",color:"#616161" }}>
          Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.
        </Typography>

        <Stack direction={{sm: "row" }} sx={{mt:10}}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by job title..."
            sx={{ backgroundColor: "#fff", borderRadius: 1,width:"70%",border:"0" }}
          />
          <Button variant="contained" sx={{ px: 4 ,backgroundColor:"#338573"}}>
            Search
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroSection;
