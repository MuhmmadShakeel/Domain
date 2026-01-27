import React from "react";
import { TrendingUp, Zap, Activity } from "lucide-react";

function HostingWP() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hosting for WordPress{" "}
            <span className="text-indigo-600">The Smart Way</span>
          </h2>

          <p className="mt-6 text-gray-500 leading-relaxed">
            This isn't just cheap Hosting for WordPress. With EasyWP, your
            WordPress website is managed by our very own optimized cloud
            technology, giving you that{" "}
            <span className="font-medium text-gray-700">
              "set-and-forget" experience
            </span>
            . This unique infrastructure is designed to let each and every
            website live and grow quickly, without hiccups.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Easy to Grow */}
          <div className="text-center px-6">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                <TrendingUp size={28} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Easy to Grow
            </h3>

            <p className="text-gray-500 mb-6">
              Take your website through the heaviest of visitor storms, thanks
              to our powerful next-generation cloud platform.
            </p>

            <div className="text-4xl font-bold text-green-600">50K</div>
            <p className="mt-2 text-sm text-gray-500">
              Recommended visitors every month for starter plan
            </p>
          </div>

          {/* Blazingly Fast */}
          <div className="text-center px-6">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                <Zap size={28} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Blazingly Fast
            </h3>

            <p className="text-gray-500 mb-6">
              Deliver your website at optimal speed, without any interference
              from us.
            </p>

            <div className="text-4xl font-bold text-green-600">3x</div>
            <p className="mt-2 text-sm text-gray-500">
              Faster than standard WordPress on traditional shared hosting
            </p>
          </div>

          {/* Always Live */}
          <div className="text-center px-6">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                <Activity size={28} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Always Live
            </h3>

            <p className="text-gray-500 mb-6">
              A fully-containerized cloud platform means you can forget server
              failures and noisy neighbors.
            </p>

            <div className="text-4xl font-bold text-green-600">99.9%</div>
            <p className="mt-2 text-sm text-gray-500">
              Uptime Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostingWP;
