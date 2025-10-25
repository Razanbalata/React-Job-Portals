// JobTable.jsx
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import JobTableHeader from "./JobTableHeader";
import JobTableRow from "./JobTableRow";
import Layout from "../../layouts/Layout";

const Base_URL = "https://68f8f8e8deff18f212b83fba.mockapi.io/jobs";

const JobTable = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(Base_URL)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid #ddd",
          }}
        >
          <TableContainer sx={{ maxWidth: "100%", overflowX: "auto" }}>
            <Table sx={{ minWidth: { xs: 0, sm: 650 } }}>
              <JobTableHeader />
              <TableBody>
                {loading ? (
                  <TableRowLoader />
                ) : jobs.length > 0 ? (
                  jobs.map((job) => <JobTableRow key={job.id} job={job} />)
                ) : (
                  <NoJobsFound />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Layout>
  );
};

const TableRowLoader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
    <CircularProgress size={30} />
  </Box>
);

const NoJobsFound = () => (
  <Box sx={{ textAlign: "center", p: 4 }}>
    <Typography variant="body1" color="text.secondary">
      No jobs found
    </Typography>
  </Box>
);

export default JobTable;
