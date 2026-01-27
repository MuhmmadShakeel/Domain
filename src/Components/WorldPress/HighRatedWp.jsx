import React from "react";

function HighRatedWp() {
  return (
    <section className="bg-white py-2 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Highly rated by the WordPress community
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          Join <span className="font-semibold text-gray-700">thousands of users</span> that love EasyWP
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-indigo-600 mx-auto my-10 rounded-full"></div>

        {/* Trustpilot Section */}
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-wider text-gray-400">
            Review us on
          </p>

          <p className="text-xl font-semibold text-gray-700">
            Trustpilot
          </p>

          <p className="text-gray-500 max-w-xl mx-auto">
            Join many satisfied customers on Trustpilot and share your experience.
          </p>
        </div>

        {/* Spacing */}
        <div className="my-12"></div>

        {/* Review Signal Section */}
        <div className="space-y-3">
          <p className="text-xl font-semibold text-gray-700">
            EasyWP ranked
          </p>

          <p className="text-lg text-gray-500">
            <span className="font-semibold text-gray-700">
              a Top Tier WordPress Provider
            </span>{" "}
            for 3 years in a row.
          </p>
        </div>

        {/* Pricing CTA */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-800">
            Get started from <span className="text-indigo-600">$0</span>
          </h3>

          <p className="mt-3 text-gray-500">
            Simple, flexible pricing, no excuses.
          </p>

          <button className="mt-6 px-8 py-3 cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-md shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default HighRatedWp;
