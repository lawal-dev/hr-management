import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full">
      {/* Dashboard Top Header Bar matching image_7c405c.png */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-100">
        {/* Left Side: Titles */}
        <div>
          <h1 className=" text-4xl font-[900] text-gray-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-base font-[400] text-gray-500 mt-1">
            Welcome back, Sarah. Here's what's happening today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <i className="bi bi-search text-sm"></i>
            </span>
            <input
              type="text"
              placeholder="Search employees..."
              className="w-64 pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-all placeholder:text-gray-400"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all whitespace-nowrap">
            <i className="bi bi-plus-lg"></i>
            Add Employee
          </button>
        </div>
      </div>

      {/* STAT CARDS GRID SECTION matching image_7cbfdd.png */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Card 1: Total Employees */}
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between min-h-[160px]">
          <div className="flex justify-between items-start">
            {/* Icon Box */}
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-lg">
              <i className="bi bi-people-fill"></i>
            </div>
            {/* Badge */}
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
              <i className="bi bi-graph-up"></i> +12%
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Total Employees</p>
            <h3 className="text-3xl font-bold text-gray-950 mt-1">124</h3>
          </div>
        </div>

        {/* Card 2: Open Roles */}
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between min-h-[160px]">
          <div className="flex justify-between items-start">
            {/* Icon Box */}
            <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center text-lg">
              <i className="bi bi-briefcase"></i>
            </div>
            {/* Badge */}
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              3 Urgent
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Open Roles</p>
            <h3 className="text-3xl font-bold text-gray-950 mt-1">8</h3>
          </div>
        </div>

        {/* Card 3: Leave Requests */}
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between min-h-[160px]">
          <div className="flex justify-between items-start">
            {/* Icon Box */}
            <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center text-lg">
              <i className="bi bi-calendar-x"></i>
            </div>
            {/* Badge */}
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              Pending
            </span>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-500">Leave Requests</p>
            <h3 className="text-3xl font-bold text-gray-950 mt-1">14</h3>
          </div>
        </div>
      </div>

      {/* LOWER TWO-COLUMN GRID SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Department Breakdown
            </h2>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              View Details
            </button>
          </div>
          <div className="space-y-5">
            {/* Engineering */}
            <div>
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span className="text-gray-700 font-bold">
                  Engineering (45)
                </span>
                <span className="text-gray-500">36%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: "36%" }}
                ></div>
              </div>
            </div>

            {/* Sales */}
            <div>
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span className="text-gray-700 font-bold">Sales (32)</span>
                <span className="text-gray-500">26%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: "26%" }}
                ></div>
              </div>
            </div>

            {/* Marketing */}
            <div>
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span className="text-gray-700 font-bold">Marketing (28)</span>
                <span className="text-gray-500">16%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: "22%" }}
                ></div>
              </div>
            </div>

            {/* HR & Administration */}
            <div>
              <div className="flex justify-between text-sm font-medium mb-1.5">
                <span className="text-gray-700 font-bold">HR & Admin(19)</span>
                <span className="text-gray-500">19%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full">
                <div
                  className="bg-amber-500 h-2 rounded-full"
                  style={{ width: "16%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm relative">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Recent Activity
          </h2>
          <div className="space-y-6 relative pl-4 border-l border-gray-100">
            {/* Activity 1 */}
            <div className="relative">
              {/* Dot indicator */}
              <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-white"></span>
              <p className="text-sm font-semibold text-gray-900">
                New hire onboarded:{" "}
                <span className="font-normal text-gray-600">
                  Marcus Johnson (Engineering)
                </span>
              </p>
              <span className="text-xs text-gray-400  mt-1">2 hours ago</span>
            </div>

            {/* Activity 2 */}
            <div className="relative">
              {/* Dot indicator */}
              <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-white"></span>
              <p className="text-sm font-semibold text-gray-900">
                Leave approved:{" "}
                <span className="font-normal text-gray-600">Emily Chen</span>
              </p>
              <span className="text-xs text-gray-400 block mt-1">
                5 hours ago
              </span>
            </div>

            {/* Activity 3 */}
            <div className="relative">
              {/* Dot indicator */}
              <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-white"></span>
              <p className="text-sm font-semibold text-gray-900">
                Policy update:{" "}
                <span className="font-normal text-gray-600">
                  Remote Work Guidelines 2024
                </span>
              </p>
              <span className="text-xs text-gray-400 block mt-1">
                1 day ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-gray-900">Recent Hires</h2>
          <button className="px-3 py-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-sm">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  {/* Initial Avatar circle placeholder */}
                  <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shadow-inner">
                    <img
                      src="https://i.postimg.cc/D0S7bQYc/Gemini-Generated-Image-km06fqkm06fqkm06.png"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Marcus Johnson
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      marcus.j@company.com
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600 font-medium">
                  Senior Frontend Developer
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50/70 px-2.5 py-1 rounded-md">
                    Engineering
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-500">Oct 12, 2023</td>
                <td className="py-4 px-4">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </td>
              </tr>

              {/* Row 2: Alicia Vance */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shadow-inner">
                    <img
                      src="https://i.postimg.cc/D0S7bQYc/Gemini-Generated-Image-km06fqkm06fqkm06.png"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alicia Vance</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      alicia.v@company.com
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600 font-medium">
                  Product Marketing Manager
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50/70 px-2.5 py-1 rounded-md">
                    Marketing
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-500">Oct 05, 2023</td>
                <td className="py-4 px-4">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Active
                  </span>
                </td>
              </tr>

              {/* Row 3: Liam Chen */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shadow-inner">
                    <img
                      src="https://i.postimg.cc/D0S7bQYc/Gemini-Generated-Image-km06fqkm06fqkm06.png"
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Liam Chen</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      liam.c@company.com
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600 font-medium">
                  Product Marketing Manager
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50/70 px-2.5 py-1 rounded-md">
                    Sales
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-500">Oct 05, 2023</td>
                <td className="py-4 px-4">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                    Onboarding
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
