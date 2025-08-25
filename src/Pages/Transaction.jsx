import React, { useState } from "react";

const Transaction = () => {
  const [transactions] = useState([
    {
      id: 1,
      billNo: "B001",
      date: "2025-08-06",
      amount: 550,
      method: "Cash",
    },
    {
      id: 2,
      billNo: "B002",
      date: "2025-08-06",
      amount: 1120,
      method: "Card",
    },
    {
      id: 3,
      billNo: "B003",
      date: "2025-08-05",
      amount: 780,
      method: "UPI",
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

      <div className="overflow-x-auto shadow border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Bill No</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Amount (₹)</th>
              <th className="px-4 py-2 text-left">Payment Method</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td className="px-4 py-2">{txn.billNo}</td>
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">₹{txn.amount.toFixed(2)}</td>
                <td className="px-4 py-2">{txn.method}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline text-sm">
                    View Bill
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
