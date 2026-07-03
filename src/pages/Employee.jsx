import React from "react";
import { HiUserPlus } from "react-icons/hi2";
import sarah from "../assets/sarah.jpg";
import maria from "../assets/maria.jpg";
import kim from "../assets/kim.jpg";
import alex from "../assets/alex.jpg";
import { MdHomeWork } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";

const Employee = () => {
  return (
    <>
      <div>
        <div className="header flex flex-col gap-4 items-start justify-between md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl md:text-4xl">
              Employee Directory
            </h1>
            <p className="text-base text-secondary-text mt-0.5 md:text-lg">
              Manage your employees efficiently
            </p>
          </div>
          <button className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 hover:scale-85 w-full justify-center md:w-auto">
            <HiUserPlus />
            Add Employee
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-2 bg-white p-4 rounded-lg sm:flex-row sm:items-center">
          <form className="flex items-center gap-2 w-full rounded-sm text-base font-medium sm:w-3/4">
            <input
              type="text"
              placeholder="Search Employee by name,roles, department or email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none hover:ring-2 hover:ring-indigo-500 hover:border-indigo-500"
            />
          </form>
          <select className="text-xs font-bold px-4 py-2 w-full sm:w-1/4 border border-gray-300 rounded-lg hover:ring-2 hover:ring-indigo-500 hover:border-indigo-500 focus:outline-none">
            <option>Names</option>
            <option>Department</option>
            <option>Roles</option>
            <option>Email</option>
            <option> Hire Date </option>
          </select>
        </div>

        <div className="mt-4 bg-white p-4 rounded-lg md:translate-y-5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-gray-100 w-full">
                <tr>
                  <th className="p-4 text-left rounded-l-lg whitespace-nowrap">Name</th>
                  <th className="p-4 text-left whitespace-nowrap">Role</th>
                  <th className="p-4 text-left whitespace-nowrap">Department</th>
                  <th className="p-4 text-left whitespace-nowrap">Status</th>
                  <th className="p-4 text-left rounded-r-lg whitespace-nowrap">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={sarah}
                        alt="Sarah Jenkins"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-medium text-gray-900 whitespace-nowrap">Sarah Jenkins</p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                          sarah.jenkins@hrpulse.co
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-gray-900 text-sm font-medium whitespace-nowrap">
                    Senior Frontend Engineer
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                      Engineering
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium whitespace-nowrap">
                      ● Active
                    </span>
                  </td>

                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={maria}
                        alt="Maria Garcia"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-medium text-gray-900 whitespace-nowrap">Maria Garcia</p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                          maria.garcia@hrpulse.co
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-gray-900 text-sm font-medium whitespace-nowrap">
                    Product Marketing Manager
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                      Marketing
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 rounded-lg p-2">
                      <MdHomeWork className="text-2xl text-orange-600" />
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium whitespace-nowrap">
                        Remote
                      </span>
                    </div>
                  </td>

                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={kim}
                        alt="Kim Johnson"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-medium text-gray-900 whitespace-nowrap">Kim Johnson</p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                          kim.johnson@hrpulse.co
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-gray-900 text-sm font-medium whitespace-nowrap">
                    Director Of Finance
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                      Finance
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="inline-flex items-center gap-2 bg-amber-100 rounded-lg p-2">
                      <FaUmbrellaBeach className="text-2xl text-amber-600" />
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium whitespace-nowrap">
                        ● On Leave
                      </span>
                    </div>
                  </td>

                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={alex}
                        alt="Alex Chen"
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <div>
                        <p className="font-medium text-gray-900 whitespace-nowrap">Alex Chen</p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">
                          alex.chen@hrpulse.co
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-gray-900 text-sm font-medium whitespace-nowrap">
                    Head of Engineering
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                      HR
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium whitespace-nowrap">
                      ● Active
                    </span>
                  </td>

                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;



// This Employee Directory component was coded by Dawood Abdulqahar (Dev), as part of my ongoing React training and frontend development journey. Built with React and styled entirely with Tailwind CSS, this project reflects the practical skills I've been developing over time — from mastering useState and controlled components, to structuring reusable UI, handling responsive layouts across breakpoints, and integrating icon libraries like react-icons for a clean, modern interface. The directory table, search and filter section, and responsive design choices were all implemented as part of my continued growth in building real-world, production-style interfaces. This piece stands as one of several hands-on projects I've completed during my SIWES industrial training program, where I've been steadily progressing from foundational HTML, CSS, and JavaScript concepts into full React development, Git/GitHub workflows, and component-based architecture. More features and refinements are still in progress as the learning continues.
