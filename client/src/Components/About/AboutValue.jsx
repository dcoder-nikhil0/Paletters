import React, { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % growthData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + growthData.length) % growthData.length
    );
  };

  return (
    <Box sx={{ padding: "4rem", backgroundColor: "#fff", textAlign: "center" }}>
      {/* GROWTH Letters */}
      <Grid container justifyContent="center" spacing={2}>
        {growthData.map((item, index) => (
          <Grid
            item
            key={item.letter}
            onClick={() => handleLetterClick(index)}
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor: index === currentIndex ? "#FFC107" : "#FFF3CD",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow:
                index === currentIndex ? "0 6px 12px rgba(0,0,0,0.1)" : "none",
              "&:hover": { backgroundColor: "#FFD54F" },
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color={index === currentIndex ? "#000" : "#FBC02D"}
            >
              {item.letter}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Carousel Section */}
      <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
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
          sx={{ maxWidth: "600px", margin: "0 auto" }}
        >
          {growthData[currentIndex].description}
        </Typography>

        {/* Navigation Buttons */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <IconButton onClick={handlePrev}>
            <ArrowBack />
          </IconButton>

          <IconButton onClick={handleNext}>
            <ArrowForward />
          </IconButton>
        </Box>

        {/* Pagination Dots */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          {growthData.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#FFC107" : "#CCC",
                margin: "0 5px",
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
