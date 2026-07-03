import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-100 px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Left side: Quick status indicator */}
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
        <span className="text-xs font-medium text-gray-600">System Live</span>
      </div>

      {/* Right side: Action items & Profile info */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-all">
          <i className="bi bi-bell text-lg"></i>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200"></div>

        {/* User Profile Block */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-sm shadow-sm group-hover:bg-indigo-700 transition-all">
            SA
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold text-gray-800 leading-none">
              Sarah Amos
            </p>
            <p className="text-xs text-gray-400 mt-0.5">HR Administrator</p>
          </div>
          <i className="bi bi-chevron-down text-xs text-gray-400 group-hover:text-gray-600 transition-all ml-1"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
