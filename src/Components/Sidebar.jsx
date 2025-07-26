import React from "react";
import { Settings, CreditCard, FileText, HelpCircle } from "lucide-react";
 // Make sure the image path is correct
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="col-span-2 bg-white rounded-2xl shadow p-4 min-h-screen">
      

      <nav className="space-y-4 text-gray-700">
        <div className="font-semibold text-blue-600">Dashboard</div>
        <div>Products</div>
        <div>Inbox</div>

        <div className="pt-4 border-t text-sm text-gray-500">Billing Services</div>
        <div>Transactions</div>
        <div>Invoices</div>
        <div>Reports</div>

        <div className="pt-4 border-t text-sm text-gray-500">Settings</div>
        <div className="flex items-center gap-2">
          <Settings size={16} /> Account Settings
        </div>
        <div className="flex items-center gap-2">
          <CreditCard size={16} /> Payment Settings
        </div>
        <div className="flex items-center gap-2">
          <FileText size={16} /> Bill Details
        </div>
        <div className="flex items-center gap-2">
          <HelpCircle size={16} /> Help Center
        </div>
      </nav>
    </div>
  );
}
