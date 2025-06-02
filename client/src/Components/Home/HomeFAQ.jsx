import { Box } from "@mui/material";
import { useState } from "react";

const faqs = [
  {
    question: "What services does a branding agency offer?",
    answer:
      "A branding agency helps businesses create, develop, and manage their brand identity. This typically includes brand strategy, logo and visual identity design, messaging and tone of voice, brand guidelines, and sometimes web design, packaging, and marketing collateral.",
  },
  {
    question: "How long does the branding process take?",
    answer:
      "The timeline can vary depending on the scope of the project. A full branding package—from strategy to final deliverables—usually takes 4 to 12 weeks. We’ll provide a detailed timeline after understanding your goals and needs.",
  },
  {
    question: "What’s the difference between a logo and a brand?",
    answer:
      "A logo is a visual symbol that represents your business, while your brand is the entire perception of your company—your values, messaging, visual identity, customer experience, and more. A strong brand goes far beyond just a logo.",
  },
  {
    question: "Can you work with startups or businesses that are rebranding?",
    answer:
      "Absolutely. We work with both new businesses looking to establish their brand and established companies aiming to refresh or reposition their brand. We tailor our approach based on your current stage and future goals.",
  },
  {
    question: "What can I expect at my first consultation?",
    answer:
      "Your first consultation will involve understanding your needs, reviewing history, and outlining next steps or a treatment plan.",
  },
];

const HomeFAQ = () => {
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
              <div key={index} className="border-2 rounded-lg border-gray-700">
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
                    <p className="p-8 text-sm text-gray-500 ">{faq.answer}</p>
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

export default HomeFAQ;
