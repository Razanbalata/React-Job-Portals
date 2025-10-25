// FeaturedCom.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Link } from "react-router-dom";

function FeaturedCom({ job }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        width: "100%",
        padding: 2,
        boxShadow: 2,
        borderRadius: 2,
        bgcolor: "#fff",
        gap: 2,
        boxSizing:"border-box"
      }}
    >
      {/* Left side */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: {xs:"wrap",sm:"nowrap"} }}>
        {/* Company Logo */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            overflow: "hidden",
            bgcolor: "#338573",
            flexShrink: 0,
          }}
        >
          <img
            src={job.companyUrl}
            alt={job.company}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Job Info */}
        <Box>
          <Typography sx={{ fontSize: "16px", color: "#5F5858", fontWeight: 500 }}>
            {job.company}
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold", mt: 0.5, mb: 1 }}>
            {job.title}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FmdGoodOutlinedIcon fontSize="small" />
              <Typography sx={{ fontSize: "14px" }}>{job.location}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <FmdGoodOutlinedIcon fontSize="small" />
              <Typography sx={{ fontSize: "14px" }}>{job.type}</Typography>
            </Box>
            <Typography sx={{ fontSize: "14px" }}>{job.salary}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Right side button */}
      <Box sx={{ mt: { xs: 2, sm: 0 } }}>
        <Link to={`/descriptionPage/${job.categoryId}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#338573",
              "&:hover": { bgcolor: "#28705f" },
              px: 3,
              py: 1,
              fontWeight: "bold",
            }}
          >
            View Details
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default FeaturedCom;
