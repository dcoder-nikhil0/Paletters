
const Terms = () => {
  const terms = [
    {
      title: "1. Scope of Services",
      content: [
        "Paletterse provides creative services including but not limited to:",
        "• Graphic Design (logos, flyers, menus, etc.)",
        "• Website Design & Development",
        "• SEO and Content Writing",
        "• Social Media Creatives & Brand Kits",
        "All services will be delivered as per the proposal or quotation agreed upon before project commencement.",
      ],
    },
    {
      title: "2. Payments",
      content: [
        "50% advance payment is required to start any project, unless agreed otherwise.",
        "20% payment is required to initialize the printing and packaging deliverables.",
        "The remaining 30% is due before final delivery or deployment.",
        "Payments are accepted via UPI, Bank Transfer, or other methods as discussed.",
        "No refunds are offered once work has started, except in cases of proven non-delivery.",
      ],
    },
    {
      title: "3. Revisions",
      content: [
        "Clients are entitled to up to 2 rounds of revisions per design/project phase.",
        "Additional revisions may incur extra charges.",
        "Feedback should be provided within 3 business days to avoid project delays.",
      ],
    },
    {
      title: "4. Delivery Timelines",
      content: [
        "Project timelines will be defined in the proposal.",
        "Delays due to late feedback, change requests, or third-party dependencies are not our responsibility.",
        "Urgent or express delivery options may be available at an extra charge.",
        "After the delivery of the work, no refund will be accepted.",
      ],
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All final deliverables become the client’s property once the full payment is received.",
        "Paletterse reserves the right to showcase non-confidential work in our portfolio, website, or social media.",
        "Raw/source files (e.g., PSD, AI, XD) are not shared by default—available at an extra fee if needed.",
      ],
    },
    {
      title: "6. Confidentiality",
      content: [
        "We respect your business privacy.",
        "Any confidential data shared with us will be used only for the purpose of the project.",
        "If required, we’re happy to sign an NDA.",
      ],
    },
    {
      title: "7. Communication",
      content: [
        "All official communication should be through email, WhatsApp Business, or client-approved channels.",
        "Our business hours are: Mon–Sat, 10 AM – 7 PM IST.",
      ],
    },
    {
      title: "8. Cancellation & Termination",
      content: [
        "Either party may cancel the project with written notice.",
        "In case of cancellation, all completed work till date must be paid for.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      content: [
        "We’re committed to quality work, but we’re not liable for losses arising from how the designs are used (e.g., poor printing or misuse of a brand asset).",
        "You agree to indemnify Vistara for any third-party claims resulting from unauthorized use of the designs.",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Terms & Conditions</h1>
      <div className="space-y-8">
        {terms.map((section, index) => (
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

export default Terms;
