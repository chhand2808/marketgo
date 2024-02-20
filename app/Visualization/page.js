import ChartCard from "@/components/ChartCard";
import {
  pieChartData,
  pieChartOptions,
} from "@/utils/card-data";

export default function Charts() {
  return (
    <div className="bg-slate-100 py-4">

      {/* 2nd div with 3 smaller divs containing Pie charts */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-2">
        <ChartCard
          type={"pie"}
          title={"Profit Margin"}
          chartData={pieChartData}
          chartOptions={pieChartOptions}
        />
        <ChartCard
          type={"pie"}
          title={"Total Sales"}
          chartData={pieChartData}
          chartOptions={pieChartOptions}
        />
        <ChartCard
          type={"pie"}
          title={"Seasons"}
          chartData={pieChartData}
          chartOptions={pieChartOptions}
        />
      </div>
    </div>
  );
}
