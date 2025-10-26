import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import FeaturedCom from "../components/landingPage/featured/FeaturedCom";

function FeaturedJobs() {
  const { id } = useParams(); // هذا الـ categoryId من الرابط
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // نجلب كل الوظائف من API
    fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // فلترة الوظائف حسب الـ categoryId (ID وليس الاسم)
  const filteredJobs = jobs.filter((job) => String(job.categoryId) === id);

  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap={3} p={4}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <FeaturedCom key={job.id} job={job} />)
        ) : (
          <Typography>No jobs found for this category.</Typography>
        )}
      </Box>
    </Layout>
  );
}

export default FeaturedJobs;
