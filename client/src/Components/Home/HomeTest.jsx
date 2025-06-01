import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.",
    name: "Robert",
    position: "CTO, Robert Consultency",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&q=80",
    highlight: false,
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.",
    name: "Jeny Doe",
    position: "CEO, Jeny Consultency",
    img: "https://images.unsplash.com/photo-1531590878845-12627191e687?auto=format&fit=crop&w=764&q=80",
    highlight: true,
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.",
    name: "Ema Watson",
    position: "Marketing Manager at Stech",
    img: "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
    highlight: false,
  },
  {
    quote:
      "“Their design team is exceptional! Our company saw a 40% growth in engagement post the rebranding.”",
    name: "Michael Smith",
    position: "Creative Director, Nova Inc.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=880&q=80",
    highlight: true,
  },
  {
    quote:
      "“Professional, punctual and creative. Highly recommended for all your design needs.”",
    name: "Alice Brown",
    position: "Founder, Bright Ideas",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=880&q=80",
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
                bgcolor: "primary.main",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                width: 10,
                height: "100%",
                bgcolor: "primary.main",
                borderRadius: 2,
              }}
            />
            <Box
              sx={{
                width: 5,
                height: "100%",
                bgcolor: "primary.main",
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
                  ? "primary.main"
                  : "background.default",
                color: testimonial.highlight ? "#fff" : "text.primary",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: testimonial.highlight ? "#fff" : "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                {testimonial.quote}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Avatar
                  src={testimonial.img}
                  alt={testimonial.name}
                  sx={{
                    width: 56,
                    height: 56,
                    border: "4px solid",
                    borderColor: testimonial.highlight
                      ? "primary.light"
                      : "grey.300",
                  }}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography fontWeight="bold">{testimonial.name}</Typography>
                  <Typography
                    variant="caption"
                    color={
                      testimonial.highlight ? "primary.light" : "text.secondary"
                    }
                  >
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeTest;
  