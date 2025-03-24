import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const DesignShowcase = () => {
  const designs = [
    {
      title: "Better Business for Children",
      img: "/images/design1.png", // Replace with your image paths
    },
    {
      title: "Hydropower Development",
      img: "/images/design2.png",
    },
    {
      title: "Best Places to Visit",
      img: "/images/design3.png",
    },
    {
      title: "Nutri Eggs",
      img: "/images/design4.png",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">
          We Create Designs You Remember
        </h2>
        <p className="text-center text-lg mt-4">
          Please take a moment to explore our diverse graphic design projects,
          including report design, presentation design, Google web stories,
          brand design, cover design, brochures, and more. We proudly showcase
          our extensive portfolio, highlighting our expertise and creativity in
          various design domains.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {designs.map((design, index) => (
            <Card
              key={index}
              className="shadow-xl transition-transform transform hover:scale-105"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                height="200"
                image={design.img}
                alt={design.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {design.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;
