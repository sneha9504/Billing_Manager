import React from "react";
import Sidebar from "../Components/Sidebar";
import TopSummaryCards from "../Components/TopSummaryCards";
import ChartSection from "../Components/ChartSection";
import RecentTransactions from "../Components/RecentTransactions";
import BudgetSummary from "../Components/BudgetSummary";
import PendingTransactions from "../Components/PendingTransactions";
import { Input } from "../Components/Ui/Input";
import Clock from "../Components/Clock";
import Button  from "../Components/Ui/Button";

export default function Dashboard() {
  return (
    <>
      <div className="bg-gray-200 text-black rounded-2xl shadow-lg p-4 h-full w-full">
        <div className="grid grid-cols-12 gap-6">


          <div className="col-span-10 space-y-6">
            <div className="flex flex-col justify-between">
              <div className="text-2xl font-semibold">Dashboard</div>

              <div className="mt-4 flex items-center gap-2">
                <Input
                  placeholder="Search transaction, invoices or help"
                  className="w-full"
                />
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Search
                </Button>
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
