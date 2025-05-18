import { Box } from "@mui/material";
import React, { useState } from "react";

const faqs = [
  {
    question: "How can I pay for my appointment?",
    answer:
      "You can pay for your appointment using various methods including credit card, UPI, net banking, or at the time of service. Please refer to the confirmation email for more details.",
  },
  {
    question: "Is the cost of the appointment covered by private health insurance?",
    answer:
      "Yes, some services may be covered by private insurance. Please contact your provider or check your plan details for confirmation.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "Referrals are not necessary for all services. However, some specialized consultations may require one. Please contact us for guidance.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open from 9 AM to 6 PM, Monday to Friday. Weekend appointments may be available on request.",
  },
  {
    question: "What can I expect at my first consultation?",
    answer:
      "Your first consultation will involve understanding your needs, reviewing history, and outlining next steps or a treatment plan.",
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

export default VidFAQ;
