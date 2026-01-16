import React from "react";

function WhyNameCheap() {
  const features = [
    {
      title: "Privacy and Security",
      description:
        "Your website security and privacy comes first at Namecheap, and we will always support the rights of individuals and consumers online. It’s our mission to keep the Internet open, free, and safe for everyone.",
    },
    {
      title: "Your Business Online",
      description:
        "Boost your business with industry-premium products and services, at prices that won’t break your budget. If it doesn’t provide you with a better Internet experience, we simply don’t offer it.",
    },
    {
      title: "Customer Service",
      description:
        "You’re covered by a Support Team that’s renowned for being one of the most knowledgeable, friendly, and professional in the business. Real people are ready to assist you with any issue, any time, 24/7.",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Why <span className="text-orange-500">Namecheap</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyNameCheap;
