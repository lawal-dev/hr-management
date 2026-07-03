import React from "react";
import { useLocation } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const location = useLocation();

  // Dynamic title based on current router paths
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/employees":
        return "Employees";
      case "/departments":
        return "Departments";
      case "/payroll":
        return "Payroll";
      case "/settings":
        return "Organization Settings";
      default:
        return "Dashboard Overview";
    }
  };

  return (
    <nav className="lg:hidden w-full h-16 bg-white border-b border-gray-100 px-4 md:px-6 flex items-center justify-between fixed top-0 right-0 left-0 z-40">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-9 h-9 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-default transition-colors border border-gray-200"
          aria-label="Open Navigation Menu"
        >
          <i className="bi bi-list text-xl font-bold"></i>
        </button>
      </div>

      {/* User Badge Profile Avatar Frame */}
      <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity">
        <div className="w-15 h-8 rounded bg-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">
          HR Pulse
        </div>
      </div>
    </nav>
  );
};

export default Header;
