import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Careers = () => {
  return (
    <Box>
      <title>
          Join Paletterse – Creative Design & Tech Jobs in India
        </title>
        <meta
          name="description"
          content="Looking to grow your career in design, web development, or marketing? Join the Paletterse team and work on innovative projects with a fast-growing startup." />
        <meta
          name="keywords"
          content="creative design services, digital solutions India, branding, web development, graphic design, Paletterse, graphic design India, branding design, creative design agency, social media graphics, business design services,website design, website development India, SEO website, responsive websites, fast web design, custom illustration, vector illustration India, character design, concept art, illustration agency, video editing India, motion graphics, reels editing, explainer videos, promotional video editing, content creation, digital marketing, SEO services India, social media management, brand marketing, content strategy, growth marketing, about Paletterse, creative agency India, startup design team, founder-led agency, branding experts"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://paletterse.com/" />
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Careers at Paletterse</h1>
        <p className="text-lg text-gray-600 mb-8">
          While we’re not hiring at the moment, we’re always excited to connect with talented creatives, developers, and strategists.
        </p>

        <div className="bg-white rounded-3xl shadow-lg px-8 py-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">We're Not Hiring Right Now</h2>
          <p className="text-gray-700 mb-6">
            Currently, there are no open positions at Paletterse. But we're growing fast, and new opportunities may arise soon.
            If you’re passionate about creativity, design, or digital marketing, we’d love to hear from you in the future!
          </p>

          <p className="text-gray-700">
            In the meantime, you can stay connected with us on social media or drop your resume at{" "}
            <span className="font-medium text-black">careers@paletterse.com</span>.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
            </Box>
  );
};

export default Careers;
