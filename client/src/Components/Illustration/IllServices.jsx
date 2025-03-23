import React, { useState } from 'react';

const services = {
  Design: {
    title: 'Website Design Service',
    description: `At Visual Best, our web design services cover a wide range, including sleek Website and Interactive Designs, focused Microsites, dynamic E-commerce Designs, detailed Prototypes, wireframes, and User Interface Designs. We also provide expert Website Design Consultation and create engaging Blog Page Designs to enhance your digital footprint. We will create and optimize your landing page so that you generate excellent leads and depict your brand message to your target audience.`,
    features: ['Custom Design', 'Dynamic Prototype', 'Landing Page Design', 'Ceros Experience Design']
  },
  Development: {
    title: 'Web Development Service',
    description: `Our web development team builds fast, secure, and scalable web applications using the latest technologies. We specialize in frontend and backend development, API integration, and more.`,
    features: ['Full-stack Development', 'API Integration', 'Scalable Architecture']
  },
  Interactive: {
    title: 'Interactive Solutions',
    description: `We create interactive websites and applications that engage users with dynamic content, animations, and seamless navigation.`,
    features: ['Animations', 'User Engagement', 'Seamless Navigation']
  },
  Support: {
    title: '24/7 Support Service',
    description: `Our support team is available round-the-clock to assist you with technical issues, updates, and maintenance.`,
    features: ['24/7 Availability', 'Technical Assistance', 'Regular Updates']
  },
  Hosting: {
    title: 'Reliable Hosting Solutions',
    description: `We provide secure and high-speed hosting services with guaranteed uptime and regular backups.`,
    features: ['High-speed Servers', 'Regular Backups', '99.9% Uptime']
  }
};

export default function IllServices() {
  const [activeTab, setActiveTab] = useState('Design');

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Our Web Services</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-around border-b-2 pb-4">
          {Object.keys(services).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-orange-500 border-b-4 border-orange-500' : 'text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{services[activeTab].title}</h2>
          <p className="mt-4 text-gray-700">{services[activeTab].description}</p>
          <ul className="mt-4 list-disc list-inside">
            {services[activeTab].features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-6">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-lg transition">Get High Performing Website →</button>
        </div>
      </div>
    </div>
  );
}
