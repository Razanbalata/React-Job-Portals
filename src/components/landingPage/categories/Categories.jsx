import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CategoriesComp from "./CategoriesComp";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://68f8f8e8deff18f212b83fba.mockapi.io/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 8, backgroundColor: "#F6F7FA" }}>
      <Typography
        variant="h4"
        sx={{ mb: 5, textAlign: "center", fontWeight: "bold" }}
      >
        Popular Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "flex-start" },
          columnGap: { xs: 2, sm: 3, md: 4.5 },
          rowGap: { xs: 6, md: 7 },
        }}
      >
        {categories.map((c) => (
          <Box
            key={c.id}
            sx={{
              flex: {
                xs: "0 1 100%",
                sm: "0 1 48%",
                md: "0 1 30%",
                lg: "0 1 18%",
              },
              minWidth: 150,
              maxWidth: "232.656px",
              height: 191,
              boxSizing: "border-box",
            }}
          >
            <CategoriesComp text={c.name} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
