import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import bg from "../../assets/assest.png"

const AboutHero = () => {
  return (
    <Box sx={{ padding: "4rem", backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Crafting Visual Stories for Impact
          </Typography>

          <Typography variant="body1" paragraph>
            In the world of Graphic Design and Digital Marketing, we're not your
            typical agency. We strive to be your dedicated success partner,
            collaborator, and confidant.
          </Typography>

          <Typography variant="body1" paragraph>
            When you choose us, we won't just ask for a brief and budget.
            Instead, we uncover your brand's unique story and the reasons
            customers prefer you. We then reverse-engineer solutions for
            measurable business results.
          </Typography>

          <Typography variant="body1">
            We don't stop there. We continuously monitor, adjust, and repeat the
            process to ensure your bottom line grows.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={bg} // Replace with your image path
            alt="Visual representation"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutHero;
