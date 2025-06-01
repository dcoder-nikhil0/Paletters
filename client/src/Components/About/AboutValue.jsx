import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const growthData = [
  {
    letter: "G",
    title: "Gratitude",
    description: "We practice gratitude daily and value the people around us.",
  },
  {
    letter: "R",
    title: "Respect",
    description:
      "We operate with optimistic assumptions and give the benefit of the doubt, choosing to see the best in others.",
  },
  {
    letter: "O",
    title: "Ownership",
    description:
      "We take responsibility for our actions and the outcomes, striving for excellence.",
  },
  {
    letter: "W",
    title: "Wisdom",
    description:
      "We make informed decisions based on experience and knowledge.",
  },
  {
    letter: "T",
    title: "Trust",
    description:
      "We build trust through transparency, integrity, and reliability.",
  },
  {
    letter: "H",
    title: "Humility",
    description: "We remain humble, eager to learn, and open to feedback.",
  },
];

const AboutValue = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLetterClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 4rem" },
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* GROWTH Letters */}
      <Grid container justifyContent="center" spacing={2}>
        {growthData.map((item, index) => (
          <Grid
            item
            key={item.letter}
            xs={3}
            sm={2}
            md={1}
            onClick={() => handleLetterClick(index)}
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor: index === currentIndex ? "#FFC107" : "#FFF3CD",
              borderRadius: "8px",
              padding: { xs: "1rem", sm: "1rem", md: "2rem" },
              margin: "8px auto",
              boxShadow:
                index === currentIndex ? "0 6px 12px rgba(0,0,0,0.1)" : "none",
              "&:hover": { backgroundColor: "#FFD54F" },
              maxWidth: "50px", // Limit max width for small letters block
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color={index === currentIndex ? "#000" : "#FBC02D"}
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              }}
            >
              {item.letter}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Carousel Section */}
      <Box sx={{ marginTop: { xs: "2rem", md: "3rem" }, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          {growthData[currentIndex].title}
        </Typography>

        <Box
          sx={{
            width: "50px",
            height: "4px",
            backgroundColor: "#FFC107",
            margin: "0.5rem auto",
          }}
        />

        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "#666",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          {growthData[currentIndex].description}
        </Typography>

        {/* Pagination Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {growthData.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#FFC107" : "#CCC",
                cursor: "pointer",
              }}
              onClick={() => handleLetterClick(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutValue;
