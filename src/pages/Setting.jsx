import React from "react";

const Setting = () => {
  return (
    <div className="w-full">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100">
        {/* Left Side: Titles */}
        <div>
          <h2 className="text-xl font-[900] text-gray-900 tracking-tight">
            Organization Settings
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <i className="bi bi-search text-sm"></i>
            </span>
            <input
              type="text"
              placeholder="Search Settings..."
              className="w-64 pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center font-bold gap-2 px-4 py-2 text-base font-medium text-black hover:bg-indigo-500 rounded-xl shadow-sm transition-all whitespace-nowrap">
            <i class="bi bi-bell"></i>
          </div>
          <div className="flex items-center font-bold gap-2 px-4 py-2 text-base font-medium text-black  hover:bg-indigo-500 rounded-xl shadow-sm transition-all whitespace-nowrap">
            <i class="bi bi-gear"></i>
          </div>
        </div>
      </div>

      {/* Settings Options */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 flex flex-col mt-6 gap-1">
          <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gray-200 text-indigo-800 transition-all text-left">
            <i className="bi bi-building text-base"></i>
            Company Profile
          </button>

          <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-indigo-50  transition-all text-left">
            <i className="bi bi-bell text-base"></i>
            Notifications
          </button>

          <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-indigo-50 transition-all text-left">
            <i className="bi bi-shield-lock text-base"></i>
            Security
          </button>

          <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-indigo-50 transition-all text-left">
            <i className="bi bi-grid-3x3-gap text-base"></i>
            Workspace
          </button>

          <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-indigo-50 transition-all text-left">
            <i className="bi bi-plugin text-base"></i>
            Integrations
          </button>
        </div>

        {/* Right Content Workspace Container */}
        <div className="lg:col-span-3">
          <div className="mb-6 mt-6">
            <h2 className="text-3xl font-[700] text-gray-900">
              Company Profile
            </h2>
            <p className="text-base text-gray-500 mt-1">
              Manage your organization's identity, contact information, and
              primary details.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 p-5 bg-white border border-gray-100 rounded-xl shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-gray-900">
                Brand Identity
              </h3>

              {/* Drag and Drop Box */}
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center text-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-all cursor-pointer group min-h-[260px]">
                <div className="w-10 h-10 bg-white border border-gray-100 text-indigo-600 rounded-lg flex items-center justify-center text-lg shadow-sm group-hover:scale-105 transition-transform">
                  <i className="bi bi-building"></i>
                </div>
                <p className="text-xs font-semibold text-indigo-600 mt-3">
                  Click to upload
                </p>
                <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                  SVG, PNG, JPG (max 2MB)
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Brand Color (Hex)
                </label>
                <div className="flex items-center border border-gray-200 rounded px-3 py-2 bg-white focus-within:border-indigo-500 transition-all">
                  <span className="text-sm text-gray-400 mr-1">#</span>
                  <input
                    type="text"
                    defaultValue="4648d4"
                    className="w-full text-sm font-medium text-gray-800 focus:outline-none"
                  />
                  <div className="w-4 h-4 rounded bg-[#4648d4] border border-black/10 ml-2 shadow-sm"></div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-11 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-6">
              <h3 className="text-sm font-bold text-gray-900">
                General Information
              </h3>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  defaultValue="Acme Corporation"
                  className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded focus:outline-none focus:border-indigo-500 transition-all text-gray-800 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    defaultValue="Technology & Software"
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-all text-gray-800 font-medium"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1">
                    Tax ID / EIN
                  </label>
                  <input
                    type="text"
                    placeholder="XX-XXXXXXX"
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-all text-gray-800 font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">
                  Company Description
                </label>
                <textarea
                  rows="3"
                  defaultValue="Leading provider of innovative enterprise solutions for the modern workforce."
                  className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-all text-gray-800 font-medium resize-none leading-relaxed"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 mb-10 mt-8 pt-4 border-t border-gray-100">
            <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              Cancel
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
