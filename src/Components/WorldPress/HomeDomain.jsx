import React from "react";
import homedomain from "../../assets/Images/homedomain.webp";

function HomeDomain() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          One home for all your{" "}
          <span className="text-indigo-600">websites</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-500 leading-relaxed max-w-3xl mx-auto">
          EasyWP lets you manage all your WordPress websites from one single
          dashboard. Here you can create backups, change your domain name, and
          access your files through SFTP. If you're planning on creating a new
          website, don't worry about setting up a separate account and
          remembering a different password. With EasyWP you can do it all from
          one place.
        </p>

        {/* Image */}
        <div className="mt-16 flex justify-center">
          <img
            src={homedomain}
            alt="EasyWP Dashboard"
            className="w-full max-w-5xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeDomain;
