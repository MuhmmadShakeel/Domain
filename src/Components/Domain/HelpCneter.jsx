import React from "react";
import domainhelp from "../../assets/Images/pic1.svg";
import easehelp from "../../assets/Images/pic2.svg";
import toolhelp from "../../assets/Images/pic3.svg";

function HelpCenter() {
  const helpSections = [
    {
      title: "Easy Domain Management",
      description:
        "After purchase, you can head straight to your Namecheap account panel and start using your domain. The account panel is uncluttered and easy to use, so you can quickly concentrate on the things that matter.",
      image: domainhelp,
    },
    {
      title: "Easy Set-Up",
      description:
        "Your free email address is ready and waiting for you. Got a thriving social media or ecommerce page already set up? Use URL forwarding to direct your visitors to your Instagram, Weebly or Shopify page of your choice.",
      image: easehelp,
    },
    {
      title: "We Are Here To Help",
      description:
        "Your domain carries your brand, public image, and professional reputation. As well as 24/7 customer support, we provide everything you need to develop your personal or business site, including answers to questions like:",
      image: toolhelp,
      links: [
        "What is a domain and why do I need one? →",
        "What makes a good domain name? →",
        "How do I choose the right Top-level Domain? →",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Help at every stage
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            We’re here to support your online journey
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {helpSections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">{section.description}</p>

                  {/* Optional links */}
                  {section.links && (
                    <ul className="space-y-3 text-blue-600 font-medium">
                      {section.links.map((link, i) => (
                        <li key={i} className="hover:underline cursor-pointer">
                          {link}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HelpCenter;
