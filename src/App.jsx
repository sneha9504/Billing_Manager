import React from "react";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <aside className="w-64 bg-white shadow-md relative z-10">
        {/* Logo fixed to the top-left inside Sidebar */}
        <div className="p-4">
          <img src="/logo.svg" alt="Billora Logo" className="w-40" />
        </div>
        <Sidebar />
      </aside>

      {/* Main dashboard content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Dashboard />
      </main>
    </div>
  );
}
