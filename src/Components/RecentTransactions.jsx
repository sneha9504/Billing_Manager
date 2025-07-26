import React, { Component } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Ui/Card";

export default function RecentTransactions() {
  return (
    <Card className="col-span-2">
      <CardHeader><CardTitle>Recent Transactions</CardTitle></CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th>ID</th><th>Recipient Name</th><th>Date</th><th>Amount</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A10</td><td>Transportation</td><td>02/12/2021</td><td>₹10000</td><td className="text-green-600">Success</td></tr>
            <tr><td>A04</td><td>Order Shipment</td><td>30/11/2021</td><td>₹2000</td><td className="text-green-600">Success</td></tr>
            <tr><td>A05</td><td>Cargo Export</td><td>25/11/2021</td><td>₹11500</td><td className="text-yellow-600">Delayed</td></tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
