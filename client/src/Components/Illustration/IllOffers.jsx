import { CheckCircle } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const IllOffers = () => {
  const services = [
    "Illustration for Books",
    "Illustration for Magazines",
    "AI Generated Images",
    "Mascot Design",
    "Icon Design",
    "Vector Illustration",
    "Illustration for Websites",
    "Illustration for Marketing",
    "Storyboarding",
    "Technical Illustration",
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Top Digital Illustration Services in India
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Visual Best is a leading digital illustration company in Noida,
            India. It is your partners in bringing your ideas to life through
            captivating illustrations. Whether you need a custom digital
            illustration agency for books, presentations, print, or digital
            media, our team of skilled and certified professionals is here to
            transform your vision into stunning visuals. VisuaBest's Digital
            Illustration service offers a smooth creative journey, meticulous
            attention to particulars, and a finished product surpassing your
            expectations. Enhance your projects with our artistic touch,
            allowing your concepts to materialize in the most visually striking
            manner.
            <br />
            Visual Best has worked with many types of businesses, like tech
            companies, manufacturers, and online shops. We've made all kinds of
            pictures, from super realistic ones to simple drawings, for business
            magazines, blogs, websites, and marketing materials. Our artists are
            really good at different styles, so we can make a wide variety of
            images. Whether you want something fun and dreamy or clean and
            modern, we can do it. Our work is as creative as you can imagine.
            <br />
            We think good illustrations do more than just show something. They
            tell a story, make people feel things, and leave a lasting mark.
            Come work with us and see how our digital illustration services can
            make your projects stand out.
          </p>
        </div>

        <div className="flex justify-end">
          <div className="text-right">
            <h2 className="text-xl font-semibold flex justify-start mb-4">
              We offer services for:
            </h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start text-gray-700"
                >
                  <CheckCircle className="text-yellow-500 mr-2" />
                  <span className="mr-3">{service}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-start mt-8">
              <Link
                to="/portfolio"
                className="bg-yellow-400 font-bold text-black px-6 py-3 rounded-full hover:bg-yellow-500"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllOffers;
