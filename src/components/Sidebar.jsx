import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  // Your custom link style helper from image_f84245.png
  const getLinkStyle = (path) => {
    const baseClasses =
      "flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-default transition-all duration-150 ";

    if (location.pathname === path) {
      return baseClasses + "bg-secondary text-primary font-semibold";
    }
    return baseClasses + "text-secondary-text hover:bg-gray-50";
  };

  return (
    <>
      {/* Semi-transparent dark overlay for mobile view when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar tracking element - uses the absolute positions from your original code */}
      <aside
        className={`w-64 h-screen bg-surface border-r border-gray-200 p-6 fixed left-0 top-0 flex flex-col justify-between z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* TOP SECTION */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white font-bold rounded-default flex items-center justify-center text-lg">
                <i className="bi bi-grid-fill"></i>
              </div>
              <div>
                <h2 className="text-base font-bold text-primary leading-tight">
                  HR Pulse
                </h2>
                <p className="text-xs text-secondary-text font-medium">
                  HR Manager Portal
                </p>
              </div>
            </div>

            {/* Mobile close button (only visible on mobile screens) */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50"
            >
              <i className="bi bi-x-lg text-lg"></i>
            </button>
          </div>

          {/* Divider Line */}
          <hr className="border-gray-100 mb-6" />

          {/* Navigation Item List using Bootstrap Icons instead of emojis */}
          <nav className="flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={getLinkStyle("/")}
            >
              <i className="bi bi-grid-1x2-fill text-base"></i>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/employees"
              onClick={() => setIsOpen(false)}
              className={getLinkStyle("/employees")}
            >
              <i className="bi bi-people-fill text-base"></i>
              <span>Employees</span>
            </Link>

            <Link
              to="/departments"
              onClick={() => setIsOpen(false)}
              className={getLinkStyle("/departments")}
            >
              <i className="bi bi-building-fill text-base"></i>
              <span>Departments</span>
            </Link>

            <Link
              to="/payroll"
              onClick={() => setIsOpen(false)}
              className={getLinkStyle("/payroll")}
            >
              <i className="bi bi-cash-stack text-base"></i>
              <span>Payroll</span>
            </Link>
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div>
          <nav className="flex flex-col">
            <Link
              to="/settings"
              onClick={() => setIsOpen(false)}
              className={getLinkStyle("/settings")}
            >
              <i className="bi bi-gear-fill text-base"></i>
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
