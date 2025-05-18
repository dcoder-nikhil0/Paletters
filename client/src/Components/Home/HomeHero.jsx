import React from "react";
import { Button, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const showcaseData = [
  {
    img: "/images/design1.png",
    title: "EBOOK DESIGN",
    subtitle: "Created for Bottomline",
  },
  {
    img: "/images/design2.png",
    title: "SOCIAL MEDIA POST",
    subtitle: "Made for Alpha Studios",
  },
  {
    img: "/images/design3.png",
    title: "BRAND LOGO",
    subtitle: "For NovaTech",
  },
  {
    img: "/images/design4.png",
    title: "INFOGRAPHIC",
    subtitle: "Crafted for VisionCorp",
  },
  {
    img: "/images/design5.png",
    title: "PRODUCT PACKAGING",
    subtitle: "Designed for FreshBites",
  },
];

const HomeHero = () => {
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
    <div className="bg-white min-h-screen flex justify-center items-center px-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            <span className="text-yellow-500 italic">Customer Centric</span>{" "}
            <br />
            Global Graphic <br /> Design Agency
          </h1>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            We are your one-stop solution for your complete digital marketing
            and graphic design requirements. Uplift your brand's perception
            through our unmatched creative solutions.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <TextField
              variant="outlined"
              placeholder="What do you need?"
              InputProps={{
                startAdornment: <Search className="text-gray-500" />,
                style: { backgroundColor: "#f3f4f6", borderRadius: "8px" },
              }}
              className="w-full md:w-96"
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#facc15",
                color: "black",
                "&:hover": { bgcolor: "#fbbf24" },
              }}
            >
              Request Proposal
            </Button>
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <div className="w-full max-w-md">
            <Slider {...settings}>
              {showcaseData.map((item, index) => (
                <div key={index} className="relative px-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-lg shadow-lg transform transition hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-6 bg-black text-white px-4 py-2 rounded-lg shadow-md flex items-center">
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs">{item.subtitle}</p>
                    </div>
                    <span className="ml-2 text-yellow-500">↗️</span>
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
