import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Ui/Card";

export default function ChartSection() {
  return (
    <Card className="col-span-2">
      <CardHeader><CardTitle>Summary in November</CardTitle></CardHeader>
      <CardContent>
        <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
          Chart Placeholder
        </div>
      </CardContent>
    </Card>
  );
}
