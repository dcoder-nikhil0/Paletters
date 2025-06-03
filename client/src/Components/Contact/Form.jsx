import { Box } from "@mui/material";
import React from "react";
import bg from "../../assets/formbg.webp";
import emailjs from "emailjs-com";

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formError, setFormError] = React.useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message || !phone) {
      setFormError({
        name: !name,
        email: !email,
        phone: !phone,
        message: !message,
      });
      return;
    }

    const serviceID = "service_6u5uega";
    const templateID = "template_k6xf8nk";
    const userID = "sSQ85uZzIdZiAtQOI";

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );
  };

  return (
    <Box>
      <section
      id="#"
        className="min-h-screen bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row lg:items-center lg:space-x-12">
            {/* Left Text Section */}
            <div className="text-white lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Get a quote
              </h1>

              <p className="max-w-xl mt-6">
                Ask us everything and we would love to hear from you
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    <a href="https://maps.app.goo.gl/ViHUJCf5Y3QhmQTb9?g_st=atm">
                    Hanuman Nagar, Patna, Bihar, India
                    </a>
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    <a href="tel:+917209543317">
                    +91 72095 43317
                    </a>
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    <a href="mailto:paletterse@gmail.com">
                    paletterse@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="lg:w-1/2">
              <div className="w-full px-8 py-10 mx-auto bg-white rounded-xl shadow-2xl shadow-gray-400 lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700">
                  Contact form
                </h1>

                <p className="mt-2 text-gray-500">
                  Ask us everything and we would love to hear from you
                </p>

                <form className="mt-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-md
                        ${formError.name ? "border-red-500" : "border-gray-200"}
                        focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
                    />
                    {formError.name && (
                      <p className="text-red-500 text-xs mt-1">
                        Name is required
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-md
                        ${
                          formError.email ? "border-red-500" : "border-gray-200"
                        }
                        focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
                    />
                    {formError.email && (
                      <p className="text-red-500 text-xs mt-1">
                        Email is required
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-md
                        ${
                          formError.phone ? "border-red-500" : "border-gray-200"
                        }
                        focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
                    />
                    {formError.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        Phone is required
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className={`block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md
                        ${
                          formError.message
                            ? "border-red-500"
                            : "border-gray-200"
                        }
                        focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring`}
                    />
                    {formError.message && (
                      <p className="text-red-500 text-xs mt-1">
                        Message is required
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-md hover:bg-amber-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Form;
