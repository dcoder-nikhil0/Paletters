import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import video from "../../assets/video.webp";
import info from "../../assets/infographic-design-portfolio.webp";
import present from "../../assets/presentation-design.webp";
import web from "../../assets/website-design-samples-visual-best.webp";

const services = [
  { title: "Presentation", image: present },
  { title: "Infographic", image: info },
  { title: "Website Design & Development", image: web, tall: true },
  { title: "Video", image: video },
];

const HoemServices = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          If you can imagine it,{" "}
          <span className="text-yellow-500">we can design it</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Visual Best is one of the top graphic design companies in Noida,
          India. Our creative team specializes in digital marketing solutions
          that can help your business thrive. We provide all kinds of creative
          and content design services:
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* First Column */}
        <div className="flex flex-col gap-6">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-50 flex items-start p-4">
                <h3 className="text-white font-bold text-lg z-10">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column - Tall */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
          <img
            src={services[2].image}
            alt={services[2].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-50 flex items-start p-4">
            <h3 className="text-white font-bold text-lg z-10">
              {services[2].title}
            </h3>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col gap-6 justify-between">
          <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
            <img
              src={services[3].image}
              alt={services[3].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-50 flex items-start p-4">
              <h3 className="text-white font-bold text-lg z-10">
                {services[3].title}
              </h3>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="contained"
              color="warning"
              endIcon={<ArrowForward />}
              sx={{
                fontWeight: "bold",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                textTransform: "none",
              }}
            >
              See Work Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoemServices;
