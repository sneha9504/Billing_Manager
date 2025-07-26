import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Ui/Card";

export default function TopSummaryCards() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card>
        <CardHeader><CardTitle>ORDERS</CardTitle></CardHeader>
        <CardContent className="text-xl font-bold">1685</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>REVENUE</CardTitle></CardHeader>
        <CardContent className="text-xl font-bold text-green-600">₹ 300,258</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>AVG PRICE</CardTitle></CardHeader>
        <CardContent className="text-xl font-bold">15.8</CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>PRODUCT SOLD</CardTitle></CardHeader>
        <CardContent className="text-xl font-bold">1547</CardContent>
      </Card>
    </div>
  );
}
