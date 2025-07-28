import React from 'react'
import Sidebar from './Sidebar' ;
import Routing from "../Routing";
import Head from './Header';

const Layout= () => {
  return (
    <div className="flex flex-col min-h-screen">
   
      <header className="h-16 bg-gradient-to-br from-white to-white shadow flex items-center justify-between px-4 border-b-2 border-gray-200 sticky top-0 z-10">
        <Head />
        </header>

    
      <div className="flex flex-1">
    
        <aside className="w-64 bg-gradient-to-b from-indigo-100 to-purple-200 text-gray-800 p-6 shadow-md">
          <Sidebar />
        </aside>

        
        <main className="flex-1 bg-gray-150 p-6 overflow-y-auto">
          <Routing />
        </main>
      </div>
    </div>
  )
}

export default Layout