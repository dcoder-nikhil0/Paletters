import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from "emailjs-com";

import poster from "../../assets/1.webp";
import post from "../../assets/2.webp";
import web from "../../assets/3.webp";
import logo from "../../assets/4.webp";
import ui from "../../assets/5.webp";

const showcaseData = [
  {
    img: poster,
    title: "POSTER DESIGN",
    subtitle: "Created for Wonder Momos",
  },
  {
    img: post,
    title: "SOCIAL MEDIA POST",
    subtitle: "Made for Wonder Momos",
  },
  {
    img: logo,
    title: "BRAND LOGO",
    subtitle: "For WebComic Studio",
  },
  {
    img: web,
    title: "WEBSITE DEVELOPMENT",
    subtitle: "Developed for Riddhi Siddhi Girl Hostel",
  },
  {
    img: ui,
    title: "UI/UX DESIGN",
    subtitle: "Designed for Art of Living",
  },
];

const HomeHero = () => {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState({ email: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setFormError({ email: true });
      return;
    }

    const serviceID = "service_fb0msag";
    const templateID = "template_kep7ygj";
    const userID = "0sWWLJ-CN603B8Js3";

    const templateParams = { email };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setEmail("");
        setFormError({ email: false });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    arrows: false,
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-yellow-500 italic">Customer Centric</span>{" "}
            <br />
            Global Graphic <br /> Design Agency
          </h1>
          <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
            We are your one-stop solution for your complete digital marketing
            and graphic design requirements. Uplift your brand's perception
            through our unmatched creative solutions.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={formError.email}
              helperText={formError.email ? "Email is required" : ""}
              InputProps={{
                startAdornment: <Search className="text-gray-500" />,
                style: { backgroundColor: "#f3f4f6", borderRadius: "8px" },
              }}
              className="w-full sm:w-96"
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#facc15",
                color: "black",
                "&:hover": { bgcolor: "#fbbf24" },
              }}
              onClick={handleSubmit}
            >
              Request Proposal
            </Button>
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <Slider {...settings}>
              {showcaseData.map((item, index) => (
                <div key={index} className="relative px-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-3 py-2 rounded-md shadow-md">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
