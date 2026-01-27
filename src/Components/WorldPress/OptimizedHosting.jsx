import React from "react";
import createmnge from '../../assets/Images/createmnge.webp';
import customise from '../../assets/Images/customise.webp';
function OptimizedHosting() {
  return (
    <section className="bg-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Content (UNCHANGED) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Optimized and{" "}
            <span className="text-[#C32F1E]">Super-Fast Hosting</span>
          </h2>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Imagine your WordPress website going live in minutes, with everything
            ready to go. No need to worry about navigating old cPanel interfaces
            or figuring out how to install services. We do it all for you in one
            click. With EasyWP Hosting for WordPress plans you save time and
            money.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src={createmnge}
              alt="EasyWP Dashboard"
              className="w-full h-60 object-cover"
            />

            <div className="p-8">
              <p className="text-sm uppercase tracking-wider text-[#C32F1E] font-semibold">
                EasyWP Dashboard
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-800">
                Create and manage your website on EasyWP
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                A simple website creation dashboard appears with the EasyWP logo
                in the lower right corner. Everything is designed to be intuitive,
                fast, and distraction-free.
              </p>

              <p className="mt-4 text-gray-600 font-medium">
                We do the hard work for you, no management required.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src={customise}
              alt="WordPress Editor"
              className="w-full h-60 object-cover"
            />

            <div className="p-8">
              <p className="text-sm uppercase tracking-wider text-[#C32F1E] font-semibold">
                WordPress Editor
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-800">
                Customise and publish with WordPress
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                A screenshot of people creating a post in WordPress highlights
                how simple and powerful content creation can be.
              </p>

              <p className="mt-4 text-gray-600">
                With over{" "}
                <span className="font-semibold text-gray-800">
                  40% of all global websites
                </span>{" "}
                powered by WordPress, it’s no wonder it’s the most popular website
                creator in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptimizedHosting;
