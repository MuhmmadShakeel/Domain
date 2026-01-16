import React from "react";

function Footer() {
  const sections = [
    {
      title: "About",
      links: ["About Namecheap", "Read our blog", "Join Our Newsletter & Marketing Communication"],
    },
    {
      title: "Domains",
      links: [
        "Domain Name Search",
        "Domain Transfer",
        "New TLDs",
        "Handshake domains NEW",
        "Personal Domain",
        "Namecheap Market",
        "Whois Lookup",
        "PremiumDNS",
        "FreeDNS",
      ],
    },
    {
      title: "Hosting",
      links: [
        "Shared Hosting",
        "WordPress Hosting",
        "Reseller Hosting",
        "VPS Hosting",
        "Dedicated Servers",
        "Private Email Hosting",
        "Migrate to Namecheap",
        "WordPress",
      ],
    },
    {
      title: "Security",
      links: [
        "Domain Privacy",
        "Website Security NEW",
        "Fix Hacked Website SOS",
        "Domain Vault NEW",
        "PremiumDNS",
        "CDN",
        "FastVPN UPDATED",
        "Cyber Insurance NEW",
        "2FA",
        "Public DNS",
        "Anti-Spam Protection",
      ],
    },
    {
      title: "Transfer to Us",
      links: ["Domain Transfer", "Migrate Hosting", "Migrate WordPress", "Migrate Email"],
    },
    {
      title: "SSL Certificates",
      links: [
        "Comodo",
        "Organization Validation",
        "Domain Validation",
        "Extended Validation",
        "Single Domain",
        "Wildcard",
        "Multi-Domain",
        "Resellers",
        "SSL Certificates",
        "Reseller Hosting",
      ],
    },
    {
      title: "Promos & Tools",
      links: [
        "Guru Guides",
        "Help Center",
        "Status Updates",
        "Knowledgebase",
        "How-To Videos",
        "Submit Ticket",
        "Live Chat",
        "Report Abuse",
        "Marketing Tools",
      ],
    },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Branding */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Namecheap</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We make registering, hosting, and managing domains for yourself or others easy and affordable, because the internet needs people.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer text-sm transition">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="mb-4 text-gray-400 font-medium">Join Our Newsletter & Marketing Communication</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="you@yours.com"
              className="px-4 py-2 rounded-md w-full sm:w-64 text-gray-900 outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
              Join
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Namecheap. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
