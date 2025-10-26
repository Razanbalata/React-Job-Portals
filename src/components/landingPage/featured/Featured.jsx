import React, { useEffect, useState } from "react";
import FeaturedCom from "./FeaturedCom";
import { Box, Typography } from "@mui/material";

function Featured() {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
 console.log(featuredJobs)
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Featured Jobs
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        {featuredJobs
          .filter((c) => c.isFeatured)
          .map((job) => (
            <FeaturedCom key={job.id} job={job} />
          ))}
      </Box>
    </Box>
  );
}

export default Featured;
