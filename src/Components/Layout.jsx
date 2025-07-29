import React from 'react'
import Sidebar from './Sidebar' ;
import Routing from "../Routing";
import Head from './Header';
import { Outlet } from 'react-router-dom';

const Layout= () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
  {/* Header */}
  <header className="h-16 bg-purple-50 shadow flex items-center px-4 border-b border-gray-300 z-10">
    <Head />
  </header>

  {/* Content */}
  <div className="flex flex-1 overflow-hidden">
    {/* Sidebar */}
    <aside className="w-64 h-full bg-gradient-to-b from-indigo-100 to-purple-200 text-gray-800 p-6 hidden md:block border-r border-gray-300 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.2)]">
      <Sidebar />
    </aside>

    {/* Main Scrollable Section */}
    <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
      <Outlet />
    </main>
  </div>

  {/* Footer */}
  <footer className="h-16 bg-gradient-to-b from-indigo-100 to-purple-100 shadow flex items-center justify-center border-t border-gray-300">
    <p className="text-gray-600 text-sm">© 2025 Billing Manager</p>
  </footer>
</div>

  )
}

export default Layout