import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import video from "../../assets/video.webp";
import info from "../../assets/infographic-design-portfolio.webp";
import present from "../../assets/presentation-design.webp";
import web from "../../assets/website-design-samples-visual-best.webp";

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
        {/* Column 1: Two stacked items */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Presentation",
              image: present,
              bgColor: "bg-[#d5a7db]",
            },
            {
              title: "Infographic",
              image: info,
              bgColor: "bg-[#015391]",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl shadow-lg overflow-hidden transition duration-300`}
            >
              <div className="p-4">
                <h3 className="text-white font-bold text-lg">
                  {service.title}
                </h3>
              </div>
              <div className="aspect-[4/3] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Tall image section */}
        <div className="flex flex-col">
          <div className="bg-[#ffd900] rounded-2xl shadow-lg overflow-hidden flex-1 flex flex-col transition duration-300">
            <div className="p-4">
              <h3 className="text-black font-bold text-lg">
                Website Design & Development
              </h3>
            </div>
            <div className="aspect-[3/4] w-full">
              <img
                src={web}
                alt="Website Design & Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Column 3: Video and Button */}
        <div className="flex flex-col gap-6 justify-between">
          <div className="bg-[#00508a] rounded-2xl shadow-lg overflow-hidden transition duration-300">
            <div className="p-4">
              <h3 className="text-white font-bold text-lg">Video</h3>
            </div>
            <div className="aspect-[4/3] w-full">
              <img
                src={video}
                alt="Video"
                className="w-full h-full object-cover"
              />
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
