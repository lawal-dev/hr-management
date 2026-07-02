import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  // useLocation lets us look at the current browser URL path
  const location = useLocation();

  // This simple helper function checks if a link is active.
  // If it matches, it adds the lavender background code from image_7ad37e.png.
  const getLinkStyle = (path) => {
    const baseClasses =
      "flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-default transition-all duration-150 ";

    if (location.pathname === path) {
      return baseClasses + "bg-secondary text-primary font-semibold";
    }
    return baseClasses + "text-secondary-text hover:bg-gray-50";
  };

  return (
    <aside className="w-64 h-screen bg-surface border-r border-gray-200 p-6 fixed left-0 top-0 flex flex-col justify-between">
      {/* TOP SECTION */}
      <div>
        {/* Brand Logo Header block from image_7ad37e.png */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary text-white font-bold rounded-default flex items-center justify-center text-lg">
            ⚏
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

        {/* Divider Line */}
        <hr className="border-gray-100 mb-6" />

        {/* Navigation Item List */}
        <nav className="flex flex-col gap-1">
          <Link to="/" className={getLinkStyle("/")}>
            <span>㗊</span> Dashboard
          </Link>

          <Link to="/employees" className={getLinkStyle("/employees")}>
            <span>👥</span> Employees
          </Link>

          <Link to="/departments" className={getLinkStyle("/departments")}>
            <span>🏢</span> Departments
          </Link>

          <Link to="/payroll" className={getLinkStyle("/payroll")}>
            <span>💵</span> Payroll
          </Link>
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div>
        <nav className="flex flex-col">
          <Link to="/settings" className={getLinkStyle("/settings")}>
            <span>⚙️</span> Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}
