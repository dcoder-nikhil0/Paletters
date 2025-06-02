import { Box } from "@mui/material";
import { useState } from "react";

const faqs = [
  {
    question: "What is illustration design, and how is it different from graphic design?",
    answer:
      "Illustration design creates unique visuals for storytelling, while graphic design combines elements like illustrations, text, and photos for broader communication.",
  },
  {
    question: "What's your typical process for an illustration project?",
    answer:
      "My process moves from understanding your vision and sketching initial concepts to refining based on your feedback and delivering the final artwork.",
  },
  {
    question: "What file formats do you deliver, and what are they used for?",
    answer:
      "We deliver common formats like JPEG/PNG for digital use, and scalable vector files (AI) or layered raster files (PSD) for print and further editing.",
  },
  {
    question: "How long does an illustration project usually take, and what impacts the timeline?",
    answer:
      "Timelines vary based on complexity, the number of illustrations, revision rounds, and my current workload.",
  },
  {
    question: "How much does an illustration cost? Do you offer different pricing models?",
    answer:
      "Costs depend on project complexity and usage. I offer project-based fees, hourly rates, or retainer agreements, providing a custom quote after understanding your needs.",
  },
];

const IllFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box>
      <section className="bg-white">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
            Frequently Asked Questions
          </h1>

          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 rounded-lg border-gray-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full p-8"
                >
                  <h2 className="font-semibold text-gray-700  text-left">
                    {faq.question}
                  </h2>

                  <span
                    className={`${
                      openIndex === index
                        ? "bg-gray-200 text-amber-500"
                        : "bg-amber-500 text-white"
                    } rounded-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          openIndex === index
                            ? "M18 12H6"
                            : "M12 6v6m0 0v6m0-6h6m-6 0H6"
                        }
                      />
                    </svg>
                  </span>
                </button>

                {openIndex === index && (
                  <>
                    <hr className="border-gray-700" />
                    <p className="p-8 text-sm text-gray-500 ">
                      {faq.answer}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

export default IllFAQ;
