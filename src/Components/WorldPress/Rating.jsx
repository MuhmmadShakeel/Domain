import React, { useState } from "react";

function Rating() {
  const [billing, setBilling] = useState("biyearly");

  const pricingData = {
    monthly: [
      {
        name: "EasyWP Starter",
        price: "9.99",
        note: "Billed monthly",
        features: [
          "10 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "Free SSL",
          "Free CDN",
          "WordPress Auto Updates",
          "HackGuardian",
        ],
      },
      {
        name: "EasyWP Turbo",
        price: "12.99",
        note: "Billed monthly",
        features: [
          "50 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "2x more CPU",
          "1.5x more RAM",
          "Free domain name",
          "Free SSL",
          "Free CDN",
          "Free Business Email",
          "Free Brizy Site Builder",
          "WordPress Auto Updates",
          "HackGuardian",
          "MalwareGuardian",
          "Autoclean Protection",
          "Free RelateSEO",
        ],
      },
      {
        name: "EasyWP Supersonic",
        price: "15.99",
        note: "Best for e-commerce",
        features: [
          "100 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "4x more CPU",
          "2x more RAM",
          "Free domain name",
          "Free SSL",
          "Free CDN",
          "Free Business Email",
          "Free Brizy Site Builder",
          "WordPress Auto Updates",
          "HackGuardian",
          "MalwareGuardian",
          "Autoclean Protection",
          "Free RelateSEO",
          "Priority support",
        ],
      },
    ],

    yearly: [
      {
        name: "EasyWP Starter",
        price: "59.90",
        note: "Billed yearly",
        features: [
          "10 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "Free SSL",
          "Free CDN",
          "WordPress Auto Updates",
          "HackGuardian",
        ],
      },
      {
        name: "EasyWP Turbo",
        price: "89.10",
        note: "44% off",
        features: [
          "50 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "2x more CPU",
          "1.5x more RAM",
          "Free domain name",
          "Free SSL",
          "Free CDN",
          "Free Business Email",
          "Free Brizy Site Builder",
          "WordPress Auto Updates",
          "HackGuardian",
          "MalwareGuardian",
          "Autoclean Protection",
          "Free RelateSEO",
        ],
      },
      {
        name: "EasyWP Supersonic",
        price: "110.50",
        note: "43% off",
        features: [
          "100 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "4x more CPU",
          "2x more RAM",
          "Free domain name",
          "Free SSL",
          "Free CDN",
          "Free Business Email",
          "Free Brizy Site Builder",
          "WordPress Auto Updates",
          "HackGuardian",
          "MalwareGuardian",
          "Autoclean Protection",
          "Free RelateSEO",
          "Priority support",
        ],
      },
    ],

    biyearly: [
      {
        name: "EasyWP Starter",
        price: "85.90",
        note: "You pay $85.90 — renews at $125.90/2 years",
        features: [
          "10 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "Free SSL",
          "Free CDN",
          "WordPress Auto Updates",
          "HackGuardian",
        ],
      },
      {
        name: "EasyWP Turbo",
        price: "115.10",
        note: "You pay $115.10 — renews at $207.10/2 years",
        features: [
          "50 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "2x more CPU",
          "1.5x more RAM",
          "Free domain name",
          "Free SSL",
          "Free CDN",
          "Free Business Email",
          "Free Brizy Site Builder",
          "WordPress Auto Updates",
          "HackGuardian",
          "MalwareGuardian",
          "Autoclean Protection",
          "Free RelateSEO",
        ],
      },
      {
        name: "EasyWP Supersonic",
        price: "140.50",
        note: "You pay $140.50 — renews at $245.50/2 years",
        features: [
          "100 GB NVMe storage",
          "Unlimited bandwidth",
          "Unlimited number of visitors",
          "4x more CPU",
          "2x more RAM",
          "Free domain name",
          "Free SSL",
          "Free CDN",
          "Free Business Email",
          "Free Brizy Site Builder",
          "WordPress Auto Updates",
          "HackGuardian",
          "MalwareGuardian",
          "Autoclean Protection",
          "Free RelateSEO",
          "Priority support",
        ],
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800">
          Get started from <span className="text-indigo-600">$0</span>
        </h2>
        <p className="mt-3 text-gray-500">
          Simple, flexible pricing, no excuses.
        </p>

        {/* Toggle Buttons */}
        <div className="mt-8 flex justify-center gap-3">
          {["monthly", "yearly", "biyearly"].map((type) => (
            <button
              key={type}
              onClick={() => setBilling(type)}
              className={`px-6 py-2 rounded-md font-semibold transition ${
                billing === type
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
            >
              {type === "biyearly" ? "Bi-Yearly" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {pricingData[billing].map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 text-left"
            >
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold text-gray-800">$</span>
                <span className="text-5xl font-bold text-gray-800">
                  {plan.price.split(".")[0]}
                </span>
                <span className="text-xl text-gray-500">
                  .{plan.price.split(".")[1]}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">{plan.note}</p>

              <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-md font-semibold">
                Get {plan.name.split(" ")[1]}
              </button>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer List */}
        <div className="mt-20 text-left max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-800 mb-3">
            All plans also include:
          </h4>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
            <li>• 1X WordPress website</li>
            <li>• Installed in under 90 seconds</li>
            <li>• Hosted on Namecheap Cloud</li>
            <li>• Seamless scalability</li>
            <li>• 99.9% Uptime</li>
            <li>• 3X faster than traditional hosting</li>
            <li>• Support for any domain provider</li>
            <li>• Easy backups and restores</li>
            <li>• SFTP and database access</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Rating;
