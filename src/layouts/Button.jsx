import React from "react";
import Button from "@mui/material/Button";

function PostJobButton({ primary, hasBg = true }) {
  return (
    <Button
      variant={hasBg ? "contained" : "outlined"}
      sx={{
        backgroundColor: hasBg ? "#338573" : "transparent",
        color: hasBg ? "#fff" : "#338573",
        px: { xs: 3, sm: 4, md: 3 },
        py: { xs: .5, sm: 1.25, md: 1 },
        borderRadius: "12px",
        fontSize: { xs: "1rem", sm: "1.25rem", md: "1rem" },
        fontWeight: "bold",
        textTransform: "none",
        border: hasBg ? "none" : "2px solid #338573",
        "&:hover": {
          backgroundColor: hasBg ? "#2b6e61" : "#33857310",
        },
      }}
    >
      {primary}
    </Button>
  );
}

export default PostJobButton;
