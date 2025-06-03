import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const testimonials = [
  {
    quote:
      "Our website was outdated and clunky until Paletterse stepped in. They built a fast, responsive site that not only looks amazing but performs even better. We saw a 30% traffic boost within a month!",
    name: "Sagar Verma",
    position: "CEO, TrailGrid Logistics",
    highlight: false,
  },
  {
    quote:
      "Paletterse took over our socials and turned things around in just weeks. Engagement doubled, and our brand finally has a consistent, professional vibe across platforms.",
    name: "Neha Bansal",
    position: "Marketing Head, StudioCraft Interiors",
    highlight: true,
  },
  {
    quote:
      "From campaign visuals to copy, Paletterse nailed every detail. It felt like they were part of our internal team — responsive, sharp, and incredibly creative.",
    name: "EAbhinav Raj",
    position: "Co-founder, VoltEdge Fitness",
    highlight: false,
  },
  {
    quote:
      "Their video work is next-level. Clean cuts, smooth transitions, and storytelling that actually connects. It gave our product a whole new edge in the market.",
    name: "Mehul Jain",
    position: "Product Manager, QuickCart India",
    highlight: true,
  },
  {
    quote:
      "We've worked with a lot of creative agencies, but Paletterse stands out. They care about the brand as much as we do, and that makes all the difference. Highly recommend!",
    name: "Priya Tandon",
    position: "Founder, Clarity & Co.",
    highlight: false,
  },
  {
    quote:
      "Paletterse completely transformed our brand. From logo to colors, everything now speaks our story. Clients constantly compliment our fresh, modern look — all thanks to their team!",
    name: "Ritika Shah",
    position: "Co-founder, OliveMark Organics",
    highlight: false,
  },
];

const HomeTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const visibleCount = isSmallScreen ? 1 : 3;

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  // 🔁 Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [visibleCount]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <Box sx={{ bgcolor: "background.paper", py: 5, px: 2 }}>
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            What our clients are saying
          </Typography>
          <Box
            sx={{
              mt: 1,
              height: 4,
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 60,
                height: "100%",
                bgcolor: "#fcc600",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                width: 10,
                height: "100%",
                bgcolor: "#fcc600",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                width: 5,
                height: "100%",
                bgcolor: "#fcc600",
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
        <Box>
          <IconButton onClick={prev}>
            <ArrowBack />
          </IconButton>
          <IconButton onClick={next}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {visibleTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                border: "1px solid",
                borderColor: testimonial.highlight ? "transparent" : "grey.300",
                bgcolor: testimonial.highlight
                  ? "#fcc600"
                  : "background.default",
                color: testimonial.highlight ? "#000" : "text.primary",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: testimonial.highlight ? "#000" : "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                {testimonial.quote}
              </Typography>
              <Box sx={{ m: 2 }}>
                <Typography fontWeight="bold">{testimonial.name}</Typography>
                <Typography
                  variant="caption"
                  color={testimonial.highlight ? "#333" : "text.secondary"}
                >
                  {testimonial.position}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeTest;
