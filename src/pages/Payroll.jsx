import React from "react";
import { FiSearch, FiBell, FiHelpCircle } from "react-icons/fi";
import { FiDownload, FiPlay } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlineHomeWork } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";

const Payroll = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="flex items-center justify-between rounded-lg bg-gray-200 px-6 py-4 shadow-sm">


        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />

          <input type="text" placeholder="Search pay roll records" className="w-full rounded-lg bg-white py-2 pl-10 pr-4 outline-none" />
        </div>


        <div className="ml-6 flex items-center gap-5">

          <button className="rounded-full bg-white p-2 hover:bg-gray-100">
            <FiBell className="text-xl text-gray-700" />
          </button>

          <button className="rounded-full bg-white p-2 hover:bg-gray-100">
            <FiHelpCircle className="text-xl text-gray-700" />
          </button>

          <img src="david chen.jpg" alt="Profile" className="h-11 w-11 rounded-full object-cover" />

        </div>

      </div>


      <div className="mt-8 flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">


        <div>
          <h2 className="text-2xl font-bold text-gray-800">Payroll Overview</h2>

          <p className="mt-1 text-gray-500">Manage and process the current payroll cycle.</p>
        </div>


        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 rounded-lg h-16 w-32 bg-gray-200 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-200">
            <FiDownload className="text-lg" />
            Export
          </button>

          <button className="flex items-center gap-2 rounded-lg h-16 w-32 bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-700">
            <FiPlay className="text-4xl" />
            Process Payroll
          </button>

        </div>

      </div>



      <div className="grid grid-cols-1 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow-md m-4">

          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Current Cycle</h3>

              <p className="mt-2 text-lg font-semibold text-gray-800">Oct 1 - Oct 15</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
              <FiCalendar className="text-xl text-indigo-600" />
            </div>
          </div>


          <div className="mt-6 flex items-center justify-between">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              . Pending Approval
            </span>

            <span className="text-sm text-gray-500">
              Due in 3 days
            </span>
          </div>
        </div>





        <div className="rounded-xl bg-white p-6 shadow-md m-4">

          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Payroll Cost</h3>

              <p className="mt-2 text-lg font-semibold text-gray-800">$284,500.00</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
              <MdOutlineHomeWork className="text-xl text-indigo-600" />
            </div>
          </div>


          <div className="mt-6 flex items-center justify-between">

            <div className="flex items-center gap-2">
              <FiTrendingUp className="text-indigo-600 text-lg" />

              <span className="text-sm font-medium text-indigo-600">+2.4%</span>
            </div>

            <span className="text-sm text-gray-500">vs last cycle</span>

          </div>

        </div>



        <div className="rounded-xl bg-white p-6 shadow-md m-4">

          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Employees</h3>

              <p className="mt-2 text-lg font-semibold text-gray-800">142/145</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
              <IoPersonCircleSharp className="text-xl text-indigo-600" />
            </div>
          </div>


          <div className="mt-6">

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">


                <div className="h-2 w-20 rounded-full bg-gray-200">
                  <div className="h-2 w-[80%] rounded-full bg-indigo-600"></div>
                </div>


              </div>


            </div>

            <p className="mt-2 text-sm text-indigo-600">3 pending verification</p>

          </div>


        </div>


      </div>








      <div className="mt-7 overflow-x-auto rounded-xl bg-white shadow-md">
       <table className="min-w-[900px] w-full border-collapse text-left">

          <thead>
            <tr className="shadow-sm bg-gray-50">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Employee
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Role / Dept
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Gross Pay
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Deductions
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Net Pay
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            
            <tr className="hover:bg-gray-50">

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                 <img src="david chen.jpg" alt="David Chen" className="h-10 w-10 rounded-full object-cover"/>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Jenkins</p>

                    <p className="text-xs text-gray-500">EMP-0492</p>
                  </div> 
                </div>
              </td>

              <td className="px-6 py-4">
                <p className="font-medium">Senior Developer</p>
                <p className="text-xs text-gray-500">Engineering</p>
              </td>

              <td className="px-6 py-4">$5,200</td>

              <td className="px-6 py-4 text-red-500">
                -$1,144.00
              </td>

              <td className="px-6 py-4 font-semibold">
                $4,056.00
              </td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  scheduled
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <button>
                  <FiMoreVertical className="text-xl text-gray-500" />
                </button>
              </td>
            </tr>





            <tr className="hover:bg-gray-50">

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                 <img src="david chen.jpg" alt="David Chen" className="h-10 w-10 rounded-full object-cover"/>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Jenkins</p>

                    <p className="text-xs text-gray-500">EMP-0492</p>
                  </div> 
                </div>
              </td>

              <td className="px-6 py-4">
                <p className="font-medium">Senior Developer</p>
                <p className="text-xs text-gray-500">Engineering</p>
              </td>

              <td className="px-6 py-4">$5,200</td>

              <td className="px-6 py-4 text-red-500">
                -$1,144.00
              </td>

              <td className="px-6 py-4 font-semibold">
                $4,056.00
              </td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  scheduled
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <button>
                  <FiMoreVertical className="text-xl text-gray-500" />
                </button>
              </td>
            </tr>





            <tr className="hover:bg-gray-50">

              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                 <img src="david chen.jpg" alt="David Chen" className="h-10 w-10 rounded-full object-cover"/>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Jenkins</p>

                    <p className="text-xs text-gray-500">EMP-0492</p>
                  </div> 
                </div>
              </td>

              <td className="px-6 py-4">
                <p className="font-medium">Senior Developer</p>
                <p className="text-xs text-gray-500">Engineering</p>
              </td>

              <td className="px-6 py-4">$5,200</td>

              <td className="px-6 py-4 text-red-500">
                -$1,144.00
              </td>

              <td className="px-6 py-4 font-semibold">
                $4,056.00
              </td>

              <td className="px-6 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  scheduled
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <button>
                  <FiMoreVertical className="text-xl text-gray-500" />
                </button>
              </td>
            </tr>







            

          </tbody>
        </table>
      </div>





    </div>
  );
};

export default Payroll;
