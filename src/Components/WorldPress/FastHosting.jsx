import React from "react";

function FastHosting() {
  const hostingData = [
    {
      name: "EasyWP",
      loadTime: "0.7 seconds",
      ttfb: "192 milliseconds",
      price: "$9.88",
      highlight: true,
    },
    {
      name: "Bluehost",
      loadTime: "0.8 seconds",
      ttfb: "396 milliseconds",
      price: "$15.99",
    },
    {
      name: "GoDaddy",
      loadTime: "0.8 seconds",
      ttfb: "200 milliseconds",
      price: "$19.99",
    },
    {
      name: "WP Engine",
      loadTime: "0.9 seconds",
      ttfb: "245 milliseconds",
      price: "$30.00",
    },
    {
      name: "Kinsta",
      loadTime: "1.29 seconds",
      ttfb: "491 milliseconds",
      price: "$35.00",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            The Fastest Hosting for <br />
            <span className="text-indigo-600">WordPress Around</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            EasyWP is not only the fastest Managed Hosting for WordPress around,
            but also the most affordable.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Hosting Provider
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Fully Loaded Time
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Time to First Byte
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Price Per Month
                </th>
              </tr>
            </thead>

            <tbody>
              {hostingData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t ${
                    item.highlight
                      ? "bg-indigo-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {item.name}
                    {item.highlight && (
                      <span className="ml-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">
                        Best
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {item.loadTime}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.ttfb}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Check the article for more details
        </p>
      </div>
    </section>
  );
}

export default FastHosting;
