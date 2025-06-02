import { Box } from "@mui/material";
import { useState } from "react";

const faqs = [
  {
    question: "What types of videos do you produce?",
    answer:
      "We create promotional videos, corporate content, social media clips, event highlights, and more.",
  },
  {
    question: "Can you edit footage we provide?",
    answer:
      "Absolutely! We can enhance, trim, and edit your raw footage into a polished final product.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Turnaround time depends on the project scope, but most edits are completed within 5–10 business days.",
  },
  {
    question: "Do you offer scriptwriting or storyboarding?",
    answer:
      "Yes, we provide full pre-production services including scriptwriting and storyboarding.",
  },
  {
    question: "What’s your pricing model?",
    answer:
      "Pricing varies by project complexity—contact us for a custom quote tailored to your needs",
  },
];

const VidFAQ = () => {
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

export default VidFAQ;
