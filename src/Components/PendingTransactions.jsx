import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Ui/Card";

export default function PendingTransactions() {
  return (
    <Card>
      <CardHeader><CardTitle>Pending Transactions</CardTitle></CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div><div className="font-semibold">Transportation of products</div><div className="text-gray-500">02/12/2021</div></div>
          <div><div className="font-semibold">Cargo Export</div><div className="text-gray-500">05/12/2021</div></div>
          <div><div className="font-semibold">Cargo Export</div><div className="text-gray-500">08/12/2021</div></div>
        </div>
      </CardContent>
    </Card>
  );
}
