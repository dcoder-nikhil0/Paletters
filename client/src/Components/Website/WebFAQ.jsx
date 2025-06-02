import { Box } from "@mui/material";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Typically, websites take 2–6 weeks depending on the size and features required.",
  },
  {
    question: "Do you offer custom website designs?",
    answer:
      "Yes, all our designs are tailored to match your brand and business goals.",
  },
  {
    question: "Is the website mobile-friendly and responsive?",
    answer:
      "Absolutely, every website we create is fully responsive across all devices.",
  },
  {
    question: "Can I update the website myself after it’s built?",
    answer:
      "Yes, we build on user-friendly platforms and offer training if needed.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to keep your site running smoothly.",
  },
];

const WebFAQ = () => {
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

export default WebFAQ;
