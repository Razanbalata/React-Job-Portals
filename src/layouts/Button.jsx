import React from "react";
import Button from "@mui/material/Button";

function PostJobButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#338573",
        color: "#fff",
        px: 5,
        py: 1.5,
        borderRadius: "12px",
        fontSize: "24px",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#2b6e61",
        },
      }}
    >
      Post a job
    </Button>
  );
}

export default PostJobButton;
