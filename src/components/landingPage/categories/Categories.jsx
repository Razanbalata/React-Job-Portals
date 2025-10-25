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

  // إضافة كارد وهمي لتكملة الصف الأخير إذا العدد ليس مضاعف 5
  const adjustedCategories = [...categories];
  const remainder = categories.length % 5;
  if (remainder !== 0) {
    const missing = 5 - remainder;
    for (let i = 0; i < missing; i++) {
      adjustedCategories.push({ id: `empty-${i}`, name: "" });
    }
  }

  return (
    <Box sx={{ px: 2, py: 8, backgroundColor: "#F6F7FA",width:"100%",boxSizing:"border-box" }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Popular Categories
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: 7,
        }}
      >
        {adjustedCategories.map((c) => (
          <Box
            key={c.id}
            sx={{
              flex: {
                xs: "0 1 100%",   // شاشة صغيرة → 1 كارد
                sm: "0 1 48%",    // تابليت صغير → 2 كارد
                md: "0 1 30%",    // تابليت كبير → 3 كارد
                lg: "0 1 18%",    // ديسكتوب → 5 كروت
              },
              minWidth: 150,
              maxWidth: "232.65602111816406px",
              height: 191,
            }}
          >
            {c.name ? <CategoriesComp text={c.name} /> : <Box sx={{ width: "100%", height: 191 }} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
