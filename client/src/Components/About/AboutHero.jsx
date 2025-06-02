import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import bg from "../../assets/about.webp";

const AboutHero = () => {
  return (
    <Box
      sx={{
        padding: { xs: "2rem 1rem", sm: "3rem 2rem", md: "4rem 4rem" },
        backgroundColor: "#fff",
      }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
            }}
          >
            Crafting Visual Stories for Impact
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "#333" }}
          >
            In the world of Graphic Design and Digital Marketing, we're not your
            typical agency. We strive to be your dedicated success partner,
            collaborator, and confidant.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "#333" }}
          >
            When you choose us, we won't just ask for a brief and budget.
            Instead, we uncover your brand's unique story and the reasons
            customers prefer you. We then reverse-engineer solutions for
            measurable business results.
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, color: "#333" }}
          >
            We don't stop there. We continuously monitor, adjust, and repeat the
            process to ensure your bottom line grows.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={bg}
            alt="Visual representation"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: 3,
              maxHeight: { xs: "250px", sm: "350px", md: "auto" },
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHero;
