import React from "react";

function BeleivePrice() {
  return (
    <section className="bg-white py-2 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Believe this pricing
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-relaxed">
          Everyone has the right to get online. That's why EasyWP removed the
          middle man and cut down on excessive office costs, all to deliver the
          highest performance and reliability at unparalleled value.
        </p>

        {/* Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Features
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  EasyWP Starter
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  GoDaddy
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  WPEngine
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t bg-indigo-50">
                <td className="px-6 py-4 font-semibold text-gray-800">Storage</td>
                <td className="px-6 py-4 font-semibold text-gray-800">10 GB</td>
                <td className="px-6 py-4 text-gray-600">10 GB</td>
                <td className="px-6 py-4 text-gray-600">10 GB</td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4 font-semibold text-gray-800">Visitors</td>
                <td className="px-6 py-4 font-semibold text-gray-800">50K/mo</td>
                <td className="px-6 py-4 text-gray-600">Limited at 25K/mo</td>
                <td className="px-6 py-4 text-gray-600">Limited at 25K/mo</td>
              </tr>

              <tr className="border-t">
                <td className="px-6 py-4 font-semibold text-gray-800">Price</td>
                <td className="px-6 py-4 font-semibold text-gray-800">$9.88/mo</td>
                <td className="px-6 py-4 text-gray-600">$19.99/mo</td>
                <td className="px-6 py-4 text-gray-600">$30.00/mo</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-8 py-3 bg-[#C32F1E] text-white font-semibold rounded-lg hover:bg-red-700 transition">
            Get started from $0
          </button>

          <button className="px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition">
            See More Comparisons
          </button>
        </div>
      </div>
    </section>
  );
}
export default BeleivePrice;
