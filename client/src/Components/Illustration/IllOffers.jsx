import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const IllOffers = () => {
  const services = [
    "Character Illustration",
    "Children’s Book Illustration",
    "Mascot Design",
    "Editorial Illustration",
    "Infographic Illustration",
    "Product Illustration",
    "Storyboarding & Comic Art",
    "Educational Illustration",
    "Custom Icon Sets",
    "Packaging Illustration",
  ];

  return (
    <div className="bg-white py-16 px-6 sm:px-8 md:px-16 lg:px-32">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text Content */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Illustration Design – Creative Visuals That Speak Louder Than Words
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            At Paletterse, our illustration design service blends art and
            strategy to deliver visuals that captivate, communicate, and
            inspire. Whether you're a business, author, educator, or brand, we
            help you turn complex concepts into beautiful, easy-to-understand
            illustrations that resonate with your audience.
            <br />
            <br />
            Illustrations add a unique, human touch to your brand. They go
            beyond generic stock visuals to deliver storytelling through custom
            artwork. Our team of skilled illustrators creates everything from
            digital characters and mascots to educational infographics and
            product visuals—designed to fit seamlessly within your brand’s
            aesthetic and purpose.
            <br />
            <br />
            Whether for print, digital media, apps, or merchandise, we ensure
            your illustrations leave a lasting impression through creativity,
            consistency, and clarity.
          </p>
        </div>

        {/* Right: Services List */}
        <div className="w-full">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            We offer services for:
          </h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-start text-gray-700 text-base"
              >
                <CheckCircle className="text-yellow-500 mr-2 mt-1" size={20} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              to="/portfolio"
              className="inline-block bg-yellow-400 font-bold text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllOffers;
