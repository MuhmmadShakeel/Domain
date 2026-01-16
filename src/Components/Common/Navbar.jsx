import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Define your nav items with their paths
  const navItems = [
    { text: "Domains", path: "/domains", badge: "NEW" },
    { text: "Hosting", path: "/hosting" },
    { text: "WordPress", path: "/wordpress" },
    { text: "Email", path: "/email" },
    { text: "Marketing Tools", path: "/marketing-tools", badge: "NEW" },
    { text: "Security", path: "/security", badge: "NEW" },
    { text: "Transfer to Us", path: "/transfer", badge: "TRY ME", badgeColor: "bg-blue-600" },
    { text: "Help Center", path: "/help-center", badge: "NEW" },
    { text: "Account", path: "/account", badge: "NEW" },
  ];

  return (
    <div className="w-full shadow-md">
      {/* Top Search Bar */}
      <div className="bg-[#2f2c3d] px-4 py-3 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="text-orange-500 font-bold text-2xl">N</div>
        </div>

        <div className="flex w-full sm:flex-1">
          <input
            type="text"
            placeholder="Find your new domain name"
            className="w-full px-4 py-2 rounded-l-md bg-white border border-gray-300 outline-none text-sm focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-5 rounded-r-md font-medium hover:bg-orange-600 transition">
            Search
          </button>
        </div>

        <span className="hidden md:block text-orange-500 text-sm font-medium cursor-pointer hover:opacity-80 transition">
          Beast Mode
        </span>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-6 py-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <div className="text-orange-500 font-bold text-3xl">N</div>
          <span className="text-xl font-semibold text-gray-700">namecheap</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-gray-700 hover:text-orange-500 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-white border-b shadow-md px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      )}

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 text-sm font-medium">
        Give your business an online boost with a{" "}
        <span className="underline">.BIZ</span> for just <strong>$1.98 →</strong>
      </div>
    </div>
  );
};

// NavItem component with path
const NavItem = ({ text, badge, badgeColor, path }) => {
  return (
    <Link
      to={path}
      className="relative cursor-pointer hover:text-orange-500 transition w-fit flex items-center gap-1"
    >
      {text}
      {badge && (
        <span
          className={`ml-1 inline-block px-2 py-[2px] text-[10px] text-white rounded ${badgeColor ? badgeColor : "bg-orange-500"}`}
        >
          {badge}
        </span>
      )}
    </Link>
  );
};

export default Navbar;
