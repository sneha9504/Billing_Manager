import React from "react";
import { Settings, CreditCard, FileText, HelpCircle } from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex bg-gradient-to-b from-indigo-500 to-purple-400 text-black rounded-2xl shadow-lg p-6 min-h-screen">
  <nav className="grow space-y-6">
    {/* Section: Main */}
    <div className="space-y-2">
      <div className="text-sm uppercase tracking-widest text-gray-200">Main</div>
      <div className="flex items-center gap-3 font-medium text-white hover:bg-white/10 rounded-lg p-2 transition">
         Dashboard
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        Products
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        Inbox
      </div>
    </div>


    <div className="space-y-2 pt-6 border-t border-white/20">
      <div className="text-sm uppercase tracking-widest text-gray-300">Billing</div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        Transactions
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        Invoices
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
         Reports
      </div>
    </div>

   
    <div className="space-y-2 pt-6 border-t border-white/20">
      <div className="text-sm uppercase tracking-widest text-gray-300">Settings</div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        <Settings size={18} /> Account Settings
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        <CreditCard size={18} /> Payment Settings
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        <FileText size={18} /> Bill Details
      </div>
      <div className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-2 transition">
        <HelpCircle size={18} /> Help Center
      </div>
    </div>
  </nav>
</div>

  );
}
