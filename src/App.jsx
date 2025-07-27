import React from "react";
import Sidebar from "./Components/Sidebar";
import Routing from "./Routing";
import Head from "./Components/Header";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="h-16 bg-gradient-to-br from-white to-blue-500 shadow flex items-center justify-between px-6">
        <Head />
        </header>

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-indigo-100 to-purple-200 text-gray-800 p-6 shadow-md">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Routing />
        </main>
      </div>
    </div>
  );
}
