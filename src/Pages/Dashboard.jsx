import React from "react";
import Sidebar from "../Components/Sidebar";
import TopSummaryCards from "../Components/TopSummaryCards";
import ChartSection from "../Components/ChartSection";
import RecentTransactions from "../Components/RecentTransactions";
import BudgetSummary from "../Components/BudgetSummary";
import PendingTransactions from "../Components/PendingTransactions";
import { Input } from "../Components/Ui/Input";
import Clock from "../Components/Clock";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="grid grid-cols-12 gap-6">
          

          <div className="col-span-10 space-y-6">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">Dashboard</div>
              <Input placeholder="Search transaction, invoices or help" className="col-span-10" />
              <div className="flex justify-end mb-4">
                <Clock />
              </div>

            </div>

            <TopSummaryCards />

            <div className="grid grid-cols-3 gap-4">
              <ChartSection />
              <PendingTransactions />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <RecentTransactions />
              <BudgetSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
