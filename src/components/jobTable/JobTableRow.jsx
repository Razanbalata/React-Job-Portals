import React from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { Link } from "react-router";

const JobTableRow = ({ job }) => (
  <TableRow
    hover
    sx={{
      borderBottom: "1px solid #e0e0e0",
      transition: "background-color 0.3s",
    }}
  >
    <TableCell sx={{ fontSize: 15 }}>{job.title}</TableCell>
    <TableCell sx={{ fontSize: 15 }}>{job.type}</TableCell>
    <TableCell sx={{ fontSize: 15 }}>
      {job.postedDate ?? "2022-07-01"}
    </TableCell>
    <TableCell sx={{ fontSize: 15 }}>
      {job.deadline ?? "2022-07-01"}
    </TableCell>
    <TableCell align="center">
      <Link to='/descriptionPage'>
      <Tooltip title="View">
        <IconButton color="primary">
          <Visibility />
        </IconButton>
      </Tooltip>
      </Link>
      <Tooltip title="Edit">
        <IconButton color="success">
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="error">
          <Delete />
        </IconButton>
      </Tooltip>
    </TableCell>
  </TableRow>
);

export default JobTableRow;
