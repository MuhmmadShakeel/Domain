import React, { useState } from "react";

const faqs = [
  {
    question: "What is a reasonable price to pay for a top-level domain (TLD)? Where can I find the cheapest domains?",
    answer:
      "The prices can vary hugely, as the demand for some TLDs is higher. The standard price of traditional top-level domains (TLDs) such as .net and .org can range between $6 and $15, whereas newer TLDs like .site and .club can range between $10 and $25. You can learn more about the average cost of domain names in our blog. To find the cheapest domains, check out our TLD list or take a look at our domain pricing tool! Using our handy filter, you can select 'Sale' to find our cheapest domains. You can also select 'Popular' to see the most sought-after domains, and 'New' to view our recently launched domains."
  },
  {
    question: "What TLDs are both popular and affordable?",
    answer:
      "While most people look to buy .com first, sometimes your dream domain name isn’t available. Plus, it’s important to choose one that reflects your business or personal brand. There are a huge number of generic TLDs and Country Code TLDs out there, and as we offer affordable, low-cost domains for less than $1, it’s easy to find the perfect domain name for growing your online presence!"
  },
  {
    question: "Do you have any domain promotions/discounts?",
    answer:
      "We frequently offer promotions and discounts on various TLDs. Check our homepage and domain pricing tool regularly to find the best deals and offers available for your preferred domain names."
  },
  {
    question: "Still have questions about domain registration?",
    answer:
      "If you still have questions, feel free to reach out to our 24/7 customer support team. We’re here to help you with everything from domain selection to registration, ensuring your online presence is smooth and hassle-free."
  }
];

function DomainFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            About domain pricing and registration
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition"
              >
                <span>{faq.question}</span>
                <span className="text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed transition-all">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DomainFaq;
