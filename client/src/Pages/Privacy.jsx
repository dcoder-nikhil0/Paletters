
const Policy = () => {
  const policies = [
    {
      title: "1. Introduction",
      content: [
        "Paletterse is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website, services, and communications.",
      ],
    },
    {
      title: "2. Information We Collect",
      content: [
        "• Personal Information: When you contact us or use our services, we may collect personal details such as your name, email address, phone number, and business information.",
        "• Project Details: We collect content, creative briefs, brand guidelines, and other relevant materials required for project execution.",
        "• Usage Data: We may collect anonymous data on how our website is accessed and used through analytics tools (e.g., pages visited, browser type, time spent).",
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "• To deliver design and marketing services as requested.",
        "• To communicate with you about your project, updates, or support queries.",
        "• To improve our services and user experience.",
        "• For internal business operations such as analytics and record keeping.",
        "• To comply with legal obligations, if required.",
      ],
    },
    {
      title: "4. Sharing Your Information",
      content: [
        "We do not sell, trade, or rent your personal data to third parties.",
        "We may share limited data with trusted partners or subcontractors who help us deliver services, and only as necessary for the project.",
        "All such collaborators are contractually obligated to maintain confidentiality and data protection.",
      ],
    },
    {
      title: "5. Data Security",
      content: [
        "We implement reasonable security measures to protect your data against unauthorized access, alteration, or disclosure.",
        "However, no internet transmission is 100% secure, and we cannot guarantee absolute security of your data.",
      ],
    },
    {
      title: "6. Cookies & Tracking",
      content: [
        "Our website may use cookies and similar technologies to enhance user experience and track website traffic.",
        "You can choose to disable cookies in your browser settings, but this may affect site functionality.",
      ],
    },
    {
      title: "7. Your Rights",
      content: [
        "• You have the right to access, update, or request deletion of your personal data.",
        "• You can request a copy of the data we hold about you or object to its use for marketing purposes.",
        "• To exercise these rights, please contact us at contact@paletterse.com.",
      ],
    },
    {
      title: "8. Data Retention",
      content: [
        "We retain your data only as long as necessary to fulfill the purposes for which it was collected, or as required by law.",
        "Completed project files may be archived for a period of 6–12 months for revision or reference purposes unless otherwise requested.",
      ],
    },
    {
      title: "9. Children’s Privacy",
      content: [
        "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "Paletterse reserves the right to update this Privacy Policy from time to time.",
        "We encourage users to review this page periodically to stay informed of any changes.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        "For any questions regarding this Privacy Policy or your data, please contact us at:",
        "Email: hello@paletterse.com",
        "Phone: +91-7209543317",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Privacy Policy</h1>
      <div className="space-y-8">
        {policies.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Policy;
