import { ApexChart } from "./apexChart";

export const SparkLineChart = ({
  series,
  width,
  height,
  className,
}: {
  gainers?: boolean;
  width?: number;
  height?: number;
  className?: string;
  changedVPercentage?: string;
  series: {
    data: number[];
    name?: string;
  }[];
}) => {
  const options = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
    },
    stroke: { curve: "smooth", width: width ?? 3 },
    tooltip: { enabled: false },
    colors: ["#008053"],
  };

  return (
    <div className={`${className} flex flex-col items-end justify-end`}>
      <ApexChart
        options={options}
        data={series}
        type="line"
        height={height ?? 60}
      />
    </div>
  );
};
