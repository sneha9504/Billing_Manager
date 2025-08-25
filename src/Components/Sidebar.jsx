import React from "react";
import { NavLink } from "react-router-dom";
import { Settings, CreditCard, FileText, HelpCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-indigo-400 to-purple-400 text-black rounded-2xl shadow-lg p-4 h-full w-full">
      <nav className="space-y-6">
        {/* Main */}
        <div className="space-y-1">
          <NavLink
            to="/home/dashboard"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/home/products"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Products
          </NavLink>


        </div>

        {/* Billing */}
        <div className="space-y-1 pt-4 border-t border-white/20">
          <NavLink
            to="/home/billing"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Billing
          </NavLink>

          <NavLink
            to="/home/transactions"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Transactions
          </NavLink>

          <NavLink
            to="/home/expenses"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Expenses Tracker
          </NavLink>

          <NavLink
            to="/home/reports"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Reports
          </NavLink>

        </div>

        {/* Settings */}
        <div className="space-y-1 pt-4 border-t border-white/20">
          <div className="text-xs uppercase tracking-wide text-gray-200 mt-2 px-3">
            Settings
          </div>

          <NavLink
            to="/home/account"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md font-medium transition ${isActive
                ? "bg-white/20 text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
           <Settings size={16} /> Account Settings
          </NavLink>

          
        </div>
      </nav>
    </div>
  );
}
