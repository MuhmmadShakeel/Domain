import React from "react";

function DomainHeader() {
  return (
    <div className="w-full">
      <div
        className="relative h-[420px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/00/92/75/32/360_F_92753252_rUw0UdxhNLSH5dV5hzEM6JBIr9hnf7yM.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1D3557]/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Domain Prices
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mb-6">
            Discover more popular top-level domains, for less and just
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search your perfect domain"
              className="w-full px-4 py-3 rounded-l-lg text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-[#AF864C]"
            />
            <button className="bg-[#AF864C] px-6 text-white font-semibold rounded-r-lg hover:bg-[#9f6f3b] transition">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-20 -mt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* .COM */}
          <DomainCard
            domain=".COM"
            price="$9.98 / year"
            points={["Most trusted", "Global recognition", "Best for business"]}
          />

          {/* .NET */}
          <DomainCard
            domain=".NET"
            price="$7.98 / year"
            points={["Great for tech", "Reliable choice", "Popular alternative"]}
          />

          {/* .ORG */}
          <DomainCard
            domain=".ORG"
            price="$6.98 / year"
            points={[
              "Perfect for NGOs",
              "Builds credibility",
              "Community focused",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

/* ================= DOMAIN CARD ================= */
const DomainCard = ({ domain, price, points }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
      <h2 className="text-2xl font-bold text-[#1D3557] mb-2">
        {domain}
      </h2>
      <p className="text-[#AF864C] font-semibold mb-4">{price}</p>

      <ul className="text-sm text-gray-600 space-y-2 mb-6">
        {points.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>

      <button className="w-full bg-[#1D3557] text-white py-2 rounded-lg hover:bg-[#162a44] transition">
        Buy Now
      </button>
    </div>
  );
};

export default DomainHeader;
