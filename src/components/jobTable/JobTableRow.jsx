import React from "react";
import { TableRow, TableCell, IconButton, Tooltip, Box } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

const JobTableRow = ({ job }) => (
  <TableRow
    hover
    sx={{
      borderBottom: "1px solid #e0e0e0",
      transition: "background-color 0.3s",
    }}
  >
    <TableCell sx={{ fontSize: { xs: 12, sm: 14, md: 15 } }}>{job.title}</TableCell>
    <TableCell sx={{ fontSize: { xs: 12, sm: 14, md: 15 } }}>{job.type}</TableCell>
    <TableCell sx={{ fontSize: { xs: 12, sm: 14, md: 15 } }}>
      {job.postedDate ?? "2022-07-01"}
    </TableCell>
    <TableCell sx={{ fontSize: { xs: 12, sm: 14, md: 15 } }}>
      {job.deadline ?? "2022-07-01"}
    </TableCell>
    <TableCell align="center">
      <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 0.5, sm: 1 } }}>
        <Link to={`/descriptionPage/${job.id}`} style={{ textDecoration: "none" }}>
          <Tooltip title="View">
            <IconButton size="small" color="primary">
              <Visibility fontSize="small" />
            </IconButton>
          </Tooltip>
        </Link>
        <Tooltip title="Edit">
          <IconButton size="small" color="success">
            <Edit fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton size="small" color="error">
            <Delete fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </TableCell>
  </TableRow>
);

export default JobTableRow;
