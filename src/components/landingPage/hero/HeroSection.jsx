import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  useMediaQuery,
  Fade,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function HeroSection() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [showInput, setShowInput] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: { xs: "90vh", md: "100vh" },
        position: "relative",
        overflow: "hidden",
        px: { xs: 3, sm: 6, md: 10 },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* الصورة */}
      <Box
        component="img"
        src="/images/06c80047701397e7fe8d91f94e2852a2890c929f.png"
        alt="Hero"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          objectPosition: { xs: "initial", md: "right" },
          transform: { md: "scale(1.0,1.1)" },
          zIndex: 1,
        }}
      />

      {/* المحتوى */}
      <Box
        sx={{
          position:"absolute",
          maxWidth: { xs: "45%", sm: "47%", md: "45%" },
          textAlign: { xs: "justify", sm: "left" },
          color: "#000",
          zIndex: 2,
          ml: "5%",
          left:0,
          top:{xs:"25%",lg:"5%"}
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2.8rem", md: "4.2rem", lg: "5rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          Find A{" "}
          <Box component="span" sx={{ color: "#338573" }}>
            Job
          </Box>{" "}
          That{" "}
          <Box component="span" sx={{ color: "#338573" }}>
            Matches
          </Box>{" "}
          Your Passion
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: ".8rem", md: "1.15rem" },
            color: "#616161",
            mb: 3,
          }}
        >
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract, and internships.
        </Typography>

        {/* البحث */}
        {!isMobile ? (
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by job title..."
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                width: "70%",
                "& fieldset": { border: "none" },
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
              }}
            />
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                backgroundColor: "#338573",
                "&:hover": { backgroundColor: "#28705f" },
              }}
            >
              Search
            </Button>
          </Stack>
        ) : (
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", position: "relative" }}>
            {/* أيقونة البحث */}
            <IconButton
              sx={{
                backgroundColor: "#338573",
                color: "#fff",
                "&:hover": { backgroundColor: "#28705f" },
                width: 55,
                height: 55,
              }}
              onClick={() => setShowInput(!showInput)}
            >
              <SearchIcon />
            </IconButton>

            {/* مربع البحث يظهر مع Fade + Slide */}
            <Fade in={showInput}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  position: "absolute",
                  top: "70px", // فوق الأيقونة
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80%",
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Search..."
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    flexGrow: 1,
                    "& fieldset": { border: "none" },
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    px: 3,
                    py: 1,
                    backgroundColor: "#338573",
                    "&:hover": { backgroundColor: "#28705f" },
                  }}
                  onClick={() => setShowInput(false)}
                >
                  Search
                </Button>
              </Stack>
            </Fade>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default HeroSection;
