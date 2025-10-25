import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const JobTableHeader = () => (
  <TableHead>
    <TableRow sx={{ borderBottom: "2px solid #353030" }}>
      <TableCell sx={{ fontWeight: "bold", fontSize: { xs: 12, sm: 14, md: 16 } }}>Title</TableCell>
      <TableCell sx={{ fontWeight: "bold", fontSize: { xs: 12, sm: 14, md: 16 } }}>Job Type</TableCell>
      <TableCell sx={{ fontWeight: "bold", fontSize: { xs: 12, sm: 14, md: 16 } }}>Posted Date</TableCell>
      <TableCell sx={{ fontWeight: "bold", fontSize: { xs: 12, sm: 14, md: 16 } }}>
        Application Deadline
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: "bold", fontSize: { xs: 12, sm: 14, md: 16 } }}
      >
        Action
      </TableCell>
    </TableRow>
  </TableHead>
);

export default JobTableHeader;
