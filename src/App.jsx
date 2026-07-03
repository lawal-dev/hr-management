import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// 1. Import the separate files you created in the pages folder
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Employee from "./pages/Employee";
import Department from "./pages/Department";
import Payroll from "./pages/Payroll";
import Setting from "./pages/Setting";
import Navbar from "./components/Navbar";

export default function App() {
  const pathname = window.location.pathname;
  console.log("Current Pathname:", pathname);
  return (
    <div className="min-h-screen bg-background flex text-text-main">
      {/* Permanent Navigation Sidebar */}
    { pathname !== "/" && <Sidebar /> }
     

      {/* Main Right Workspace Window */}
      <main className="flex-1 ml-64 p-8">
        {/* <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            HR Pulse Workspace
          </h1>
          <p className="text-xs text-secondary-text mt-0.5">
            Welcome to your team administration panel.
          </p>
        </header> */}

        {/* 2. Connect the URL paths to their actual separate files */}
        {/* 2. Connect the URL paths to their actual separate files */}
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      {/* </main> */}
    </div>
  );
}
