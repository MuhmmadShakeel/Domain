import React, { useEffect, useState } from "react";

const testimonials = [
  {
    message:
      "Cheap domain registration, good and reliable hosting plus classic customer support services!",
    name: "Emmanuel S.",
  },
  {
    message:
      "Very straightforward and appreciated that there are privacy guards included by default. Useful additional extras available.",
    name: "Anonymous Customer",
  },
  {
    message:
      "Great prices. Many carts to choose from and the best online-tech support by text that I have ever dealt with. Five stars from me.",
    name: "Pamela W.",
  },
];

function FreeDomain() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Enjoy free products and services
          </h2>

          <p className="text-slate-600 text-lg mb-8">
            Everybody loves free stuff!
          </p>

          <div className="space-y-5 text-slate-700">
            <div className="flex gap-3">
              <span className="text-green-600 text-xl font-bold">✔</span>
              <p>
                <span className="font-semibold">
                  Free privacy protection for life
                </span>{" "}
                — Keep your data safe with domain privacy protection.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-green-600 text-xl font-bold">✔</span>
              <p>
                <span className="font-semibold">Free email address</span> — Enjoy
                a 2-month free trial, ready when you sign up.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-green-600 text-xl font-bold">✔</span>
              <p>
                <span className="font-semibold">Free DNSSEC security</span> —
                Protect your website visitors from fraudulent activity.
              </p>
            </div>
          </div>

          <button className="mt-10 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Hear more from our customers →
          </button>
        </div>

        {/* RIGHT TESTIMONIAL CAROUSEL */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[220px] flex flex-col justify-between">
            <p className="text-slate-700 text-lg leading-relaxed">
              “{testimonials[index].message}”
            </p>

            <div className="mt-6">
              <p className="font-bold text-slate-900">
                {testimonials[index].name}
              </p>
              <p className="text-sm text-slate-500">Verified Customer</p>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full transition ${
                  i === index ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default FreeDomain;
