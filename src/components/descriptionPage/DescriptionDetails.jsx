import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function DescriptionDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [job, setJob] = useState(location.state?.jobData || null);
  const [loading, setLoading] = useState(!job); // إذا ما فيه بيانات من الفورم، نشغل التحميل

  useEffect(() => {
    if (!job && id) {
      fetch(`https://68f8f8e8deff18f212b83fba.mockapi.io/jobs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setJob(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id, job]);

  // بيانات افتراضية إذا API فاضية
  const defaultJob = {
    title: "Job Title",
    company: "Company Name",
    location: "Unknown",
    type: "Full-time",
    salary: "Negotiable",
    requirements: ["Requirement 1", "Requirement 2", "Requirement 3"],
    responsibilities: ["Responsibility 1", "Responsibility 2"],
    description:
      "This is a sample job description. Details will appear here once available.",
  };

  const displayJob = job || defaultJob;

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, maxWidth: 1200, mx: "auto" }}>
      {/* Buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mb: 3 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button variant="outlined">View Company</Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#338573", "&:hover": { backgroundColor: "#28705f" } }}
        >
          View Details
        </Button>
      </Stack>

      {/* Job Info */}
      <Box sx={{ mb: 4 }}>
        {loading ? (
          <>
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton variant="text" width="60%" height={40} />
          </>
        ) : (
          <>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Company:</strong> {displayJob.company}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Location:</strong> {displayJob.location}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Type:</strong> {displayJob.type}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Salary:</strong> {displayJob.salary}
            </Typography>
          </>
        )}
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Job Description */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Job Description:
        </Typography>
        {loading ? (
          <>
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="100%" height={20} />
            <Skeleton variant="text" width="80%" height={20} />
          </>
        ) : (
          <Typography variant="body1">{displayJob.description}</Typography>
        )}
      </Box>

      {/* Requirements */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Requirements:
        </Typography>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={80} />
        ) : (
          <List>
            {(displayJob.requirements || []).map((req, idx) => (
              <ListItem key={idx} sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 12 }} />
                </ListItemIcon>
                <ListItemText primary={req} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Responsibilities */}
      <Box sx={{ mb: 3 }}>
  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
    Responsibilities:
  </Typography>
  {loading ? (
    <Skeleton variant="rectangular" width="100%" height={80} />
  ) : (displayJob.responsibilities && displayJob.responsibilities.length > 0 ? (
    <List>
      {displayJob.responsibilities.map((res, idx) => (
        <ListItem key={idx} sx={{ display: "flex", alignItems: "center" }}>
          <ListItemIcon sx={{ minWidth: 30 }}>
            <FiberManualRecordIcon sx={{ fontSize: 12 }} />
          </ListItemIcon>
          <ListItemText primary={res} />
        </ListItem>
      ))}
    </List>
  ) : (
    <Typography variant="body2" sx={{ fontStyle: "italic", color: "gray" }}>
      No responsibilities available
    </Typography>
  ))}
</Box>

    </Box>
  );
}

export default DescriptionDetails;
