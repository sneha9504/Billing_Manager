import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../Components/Ui/Card";

export default function BudgetSummary() {
  return (
    <Card>
      <CardHeader><CardTitle>Budget</CardTitle></CardHeader>
      <CardContent className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-2">
          <div className="absolute inset-0 rounded-full border-8 border-blue-400" style={{ clipPath: 'inset(0 0 48% 0)' }}></div>
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-blue-600 text-sm">
            48% Saved
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Total spent: ₹30,000<br />
          Money Saved: ₹40,000
        </div>
      </CardContent>
    </Card>
  );
}
