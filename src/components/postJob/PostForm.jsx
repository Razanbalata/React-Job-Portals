import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Paper,
  Button,
} from "@mui/material";

function PostForm() {
  const [data, setData] = useState({
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    jobCategory: "",
    jobType: "",
    jobLocation: "",
    salaryRange: "",
    experience: "",
    featured: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", data);
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={2}
      sx={{
        p: 4,
        mt: 4,
        borderRadius: 3,
        mx: "auto",
        width: "95%",
        boxSizing:"border-box"
      }}
    >
      {/* Row 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          mb: 3,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Company Name
          </Typography>
          <TextField
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            fullWidth
            placeholder="Enter company name"
            variant="outlined"
          />
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Company Website
          </Typography>
          <TextField
            name="companyWebsite"
            value={data.companyWebsite}
            onChange={handleChange}
            fullWidth
            placeholder="Website Link"
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Row 2 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Job Title
        </Typography>
        <TextField
          name="jobTitle"
          value={data.jobTitle}
          onChange={handleChange}
          fullWidth
          placeholder="Title"
          variant="outlined"
        />
      </Box>

      {/* Row 3 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          mb: 3,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Job Category
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="jobCategory"
              value={data.jobCategory}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="marketing">Marketing</MenuItem>
              <MenuItem value="finance">Finance</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Job Type
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              name="jobType"
              value={data.jobType}
              onChange={handleChange}
              label="Type"
            >
              <MenuItem value="full-time">Full Time</MenuItem>
              <MenuItem value="part-time">Part Time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Row 4 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          mb: 3,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Job Location
          </Typography>
          <TextField
            name="jobLocation"
            value={data.jobLocation}
            onChange={handleChange}
            fullWidth
            placeholder="Location"
            variant="outlined"
          />
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Salary Range
          </Typography>
          <TextField
            name="salaryRange"
            value={data.salaryRange}
            onChange={handleChange}
            fullWidth
            placeholder="e.g., $3000 - $5000"
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Row 5 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          mb: 3,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Experience
          </Typography>
          <TextField
            name="experience"
            value={data.experience}
            onChange={handleChange}
            fullWidth
            placeholder="Experience"
            variant="outlined"
          />
        </Box>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Featured
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Featured</InputLabel>
            <Select
              name="featured"
              value={data.featured}
              onChange={handleChange}
              label="Featured"
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Row 6 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Job Description
        </Typography>
        <TextField
          name="description"
          value={data.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={6}
          placeholder="Describe the job responsibilities"
          variant="outlined"
        />
      </Box>

      {/* Submit Button */}
      <Box textAlign="right">
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#338573",
            color: "white",
            px: 4,
            py: 1.2,
            fontWeight: "bold",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#2b6e61" },
          }}
        >
          View Details
        </Button>
      </Box>
    </Paper>
  );
}

export default PostForm;
