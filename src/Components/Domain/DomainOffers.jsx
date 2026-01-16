import React from "react";

function DomainOffers() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Grab an <span className="text-orange-500">exciting deal</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Discover how you can save today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Free domain with hosting
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Get a free domain with an all-in-one hosting package deal.
            </p>
            <button className="text-orange-500 font-semibold hover:underline">
              Get your Package Deal →
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Monthly coupons
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover exciting coupon codes for domains and more.
            </p>
            <button className="text-orange-500 font-semibold hover:underline">
              Get your Monthly Coupons →
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              $0.99 domains
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Find a popular domain at a bargain price.
            </p>
            <button className="text-orange-500 font-semibold hover:underline">
              Get a $0.99 domain →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DomainOffers;
