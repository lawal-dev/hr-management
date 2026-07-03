// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

// // 1. Import the separate files you created in the pages folder
// import Dashboard from "./pages/Dashboard";
// import Employee from "./pages/Employee";
// import Department from "./pages/Department";
// import Payroll from "./pages/Payroll";
// import Setting from "./pages/Setting";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = React.useState(false);
//   return (
//     <div className="min-h-screen bg-gray-50 flex text-gray-900 relative overflow-x-hidden">
//       <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//       {/* Main Right Workspace Window */}
//       <main className="flex-1 ml-64 p-8">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/employees" element={<Employee />} />
//           <Route path="/departments" element={<Department />} />
//           <Route path="/payroll" element={<Payroll />} />
//           <Route path="/settings" element={<Setting />} />
//         </Routes>
//       </main>
//     </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Department from "./pages/Department";
import Payroll from "./pages/Payroll";
import Setting from "./pages/Setting";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex text-gray-900 relative overflow-x-hidden">
      {/* 1. Pass the toggle state controls to the Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Workspace Frame */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0 w-full">
        {/* 2. Pass the trigger action down to the Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content Viewport */}
        <main className="flex-1 p-4 md:p-8 pt-20 md:pt-24 lg:pt-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/departments" element={<Department />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
