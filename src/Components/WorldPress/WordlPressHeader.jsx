import React from "react";
import wpimage from "../../assets/Images/wordpress.webp"
function WordlPressHeader() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Text Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-2xl font-bold text-gray-800">
          Easy WP
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Hosting for WordPress
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          EasyWP is the fast, affordable Managed Hosting for WordPress solution
          for everyone. Launch your website with speed, security, and zero
          technical headaches.
        </p>

        <div className="mt-6">
          <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-7 py-3 rounded-md font-semibold shadow-lg">
            Try for Free
          </button>

          <p className="mt-2 text-sm text-gray-400">
            1st month free trial. No commitment.*
          </p>
        </div>
      </div>

      {/* Image & Video Section */}
      <div className="relative max-w-5xl mx-auto mt-20">
        {/* Image */}
        <img
          src={wpimage}
          alt="WordPress Hosting"
          className="w-full rounded-2xl"
        />

        {/* Overlapping Video */}
        <div className="absolute left-1/2 -bottom-24 transform -translate-x-1/2 w-[85%] md:w-[70%] h-56 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/xYshkFR6FSU"
            title="EasyWP Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Spacer for overlap */}
      <div className="h-32"></div>
    </section>
  );
}

export default WordlPressHeader;
