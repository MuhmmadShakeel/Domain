import React from "react";

function DomainPrices() {
  const domains = [
    {
      tld: "sale.com",
      register: "$11.28",
      registerNote: "25% off 1st year $14.98",
      renew: "$18.48",
      transfer: "$11.48",
      transferNote: "23% OFF $14.98",
    },
    {
      tld: "sale.net",
      register: "$12.98",
      registerNote: "13% off 1st year $14.98",
      renew: "$18.58",
      transfer: "$12.98",
      transferNote: "13% OFF $14.98",
    },
    {
      tld: "sale.org",
      register: "$7.48",
      registerNote: "42% off 1st year $12.98",
      renew: "$15.98",
      transfer: "$10.98",
      transferNote: "15% OFF $12.98",
    },
    {
      tld: "sale.io",
      register: "$34.98",
      registerNote: "40% off 1st year $57.98",
      renew: "$66.98",
      transfer: "$57.98",
    },
    {
      tld: "sale.co",
      register: "$12.48",
      registerNote: "63% off 1st year $33.98",
      renew: "$39.98",
      transfer: "$33.98",
    },
    {
      tld: ".ai",
      register: "$79.98",
      renew: "$92.98",
      transfer: "$89.98",
    },
    {
      tld: "sale.co.uk",
      register: "$6.98",
      registerNote: "SPECIAL $7.48",
      renew: "$9.98",
      transfer: "$0.00",
    },
    {
      tld: "sale.ca",
      register: "$11.98",
      renew: "$14.98",
      transfer: "$10.98",
      transferNote: "8% OFF $11.98",
    },
    {
      tld: "sale.dev",
      register: "$12.98",
      registerNote: "19% off 1st year $15.98",
      renew: "$20.98",
      transfer: "$15.98",
    },
    {
      tld: "sale.me",
      register: "$10.98",
      registerNote: "45% off 1st year $19.98",
      renew: "$23.98",
      transfer: "$17.98",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Domain <span className="text-orange-500">Prices</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Transparent pricing with unbeatable discounts on popular domains
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
          <table className="min-w-full text-sm text-gray-700">
            
            {/* Table Head */}
            <thead className="bg-gray-200 text-gray-800 text-left">
              <tr>
                <th className="px-6 py-4 font-semibold">TLD</th>
                <th className="px-6 py-4 font-semibold">Register</th>
                <th className="px-6 py-4 font-semibold">Renew</th>
                <th className="px-6 py-4 font-semibold">Transfer</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {domains.map((domain, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    "bg-gray-100" 
                  } hover:bg-gray-200 transition`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {domain.tld}
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">
                      {domain.register}
                    </div>
                    {domain.registerNote && (
                      <div className="text-xs text-green-600 font-medium mt-1">
                        {domain.registerNote}
                      </div>
                    )}
                  </td>

                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {domain.renew || "—"}
                  </td>

                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">
                      {domain.transfer || "—"}
                    </div>
                    {domain.transferNote && (
                      <div className="text-xs text-blue-600 font-medium mt-1">
                        {domain.transferNote}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}

export default DomainPrices;
