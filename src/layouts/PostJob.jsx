import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "./Layout";
import PostForm from "../components/postJob/PostForm";

function PostJob() {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          height: "109px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F4F5F7",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "30px", textAlign: "center" }}>
          Laravel Developer (Full Time) - Match Company Limited
        </Typography>
      </Box>

      <Box border="1px solid #ddd" p={4}>
        <PostForm />
      </Box>
    </Layout>
  );
}

export default PostJob;
