import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Layout = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh" overflow={"hidden"}>
    <Header />
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        margin: 0,
        padding: 0,
        width: "100%",
        flexGrow: 1,
      }}
    >
      {children}
    </Container>
    <Footer />
  </Box>
);

export default Layout;
