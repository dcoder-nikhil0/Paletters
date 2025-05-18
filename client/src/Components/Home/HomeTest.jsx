import React, { useState } from "react";
import { Box } from "@mui/material";

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.",
    name: "Robert",
    position: "CTO, Robert Consultency",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=880&q=80",
    highlight: false,
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.",
    name: "Jeny Doe",
    position: "CEO, Jeny Consultency",
    img: "https://images.unsplash.com/photo-1531590878845-12627191e687?auto=format&fit=crop&w=764&q=80",
    highlight: true,
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.",
    name: "Ema Watson",
    position: "Marketing Manager at Stech",
    img: "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
    highlight: false,
  },
  {
    quote:
      "“Their design team is exceptional! Our company saw a 40% growth in engagement post the rebranding.”",
    name: "Michael Smith",
    position: "Creative Director, Nova Inc.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=880&q=80",
    highlight: true,
  },
  {
    quote:
      "“Professional, punctual and creative. Highly recommended for all your design needs.”",
    name: "Alice Brown",
    position: "Founder, Bright Ideas",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=880&q=80",
    highlight: false,
  },
];

const HomeTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <Box>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What our clients are saying
              </h1>
              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
            <div className="flex justify-between mt-8 md:mt-0">
              <button
                title="left arrow"
                onClick={prev}
                className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                title="right arrow"
                onClick={next}
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 border rounded-lg ${
                  testimonial.highlight
                    ? "bg-blue-500 text-white border-transparent dark:bg-blue-600"
                    : "dark:border-gray-700"
                }`}
              >
                <p
                  className={`leading-loose ${
                    testimonial.highlight
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {testimonial.quote}
                </p>

                <div className="flex items-center mt-8 -mx-2">
                  <img
                    className={`object-cover mx-2 rounded-full w-14 h-14 ring-4 ${
                      testimonial.highlight
                        ? "ring-blue-200"
                        : "ring-gray-300 dark:ring-gray-700"
                    }`}
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="mx-2">
                    <h1
                      className={`font-semibold ${
                        testimonial.highlight ? "text-white" : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {testimonial.name}
                    </h1>
                    <span
                      className={`text-sm ${
                        testimonial.highlight ? "text-blue-200" : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </Box>
  );
};

export default HomeTest;
