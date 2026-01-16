import React from "react";

function DomainName() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Popular domains <span className="text-orange-500">at competitive prices</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Use our domain price search tool and save money.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-100 p-6 rounded-full">
                {/* Shield Icon */}
                <svg className="w-14 h-14 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V7l7-4z" />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Free products and services
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Free Privacy Protection for life and so much more when you register your domain.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-6 rounded-full">
                {/* Settings Icon */}
                <svg className="w-14 h-14 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317a1 1 0 011.35-.436l1.8.9a1 1 0 01.5.866v2.07a1 1 0 01-.5.866l-1.8.9a1 1 0 01-1.35-.436L9.4 7.6a1 1 0 010-.866l.925-1.417z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Easy set-up and guidance
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Simple domain setup with helpful tools and guidance to get you online fast.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-6 rounded-full">
                {/* Support Icon */}
                <svg className="w-14 h-14 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 10a6 6 0 10-12 0v4a2 2 0 002 2h1v-6H7v6a2 2 0 002 2h6a2 2 0 002-2v-4z" />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expert help anytime
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Get expert help and advice whenever you need it from our support team.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DomainName;
