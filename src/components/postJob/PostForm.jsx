import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

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

  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/categories").then(
        (res) => res.json()
      ),
      fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/jobs").then((res) =>
        res.json()
      ),
    ])
      .then(([data1, data2]) => {
        setCategories(data1);
        setTypes([...new Set(data2.map((job) => job.type))]); // إزالة التكرار
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/descriptionPage", { state: { jobData: data } });
  };

  
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={2}
      sx={{ p: 4, mt: 4, borderRadius: 3, mx: "auto", width: "95%", boxSizing: "border-box" }}
    >
      {/* Row 1: Company Name & Website */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Company Name
          </Typography>
          <TextField
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Company Website
          </Typography>
          <TextField
            name="companyWebsite"
            value={data.companyWebsite}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Row 2: Job Title */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Job Title
        </Typography>
        <TextField
          name="jobTitle"
          value={data.jobTitle}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
      </Box>

      {/* Row 3: Job Category & Type */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Job Category
          </Typography>
          <FormControl fullWidth>
            <Select
              name="jobCategory"
              value={data.jobCategory}
              onChange={handleChange}
            >
              {categories.map((c) => (
                <MenuItem key={c.id} value={c.name}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Job Type
          </Typography>
          <FormControl fullWidth>
            <Select
              name="jobType"
              value={data.jobType}
              onChange={handleChange}
            >
              {types.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Row 4: Job Location & Salary */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Job Location
          </Typography>
          <TextField
            name="jobLocation"
            value={data.jobLocation}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Salary Range
          </Typography>
          <TextField
            name="salaryRange"
            value={data.salaryRange}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Row 5: Experience & Featured */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, flexDirection: { xs: "column", sm: "row" } }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Experience
          </Typography>
          <TextField
            name="experience"
            value={data.experience}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Featured
          </Typography>
          <FormControl fullWidth>
            <Select
              name="featured"
              value={data.featured}
              onChange={handleChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Row 6: Job Description */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Job Description
        </Typography>
        <TextField
          name="description"
          value={data.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={5}
          variant="outlined"
        />
      </Box>

      {/* Submit Button */}
      <Box textAlign="right">
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#338573", "&:hover": { backgroundColor: "#28705f" } }}
        >
          View Details
        </Button>
      </Box>
    </Paper>
  );
}

export default PostForm;
