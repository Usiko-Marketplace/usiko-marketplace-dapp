import { Column } from "@/components/ui/tableComponent/tableComponent";
import { SupplyTypes } from "@/types/martkes";

// Supply and Accrued Data
export const supplyAccruedData = [
  {
    id: "1",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 5000,
    accrued: 0.0306,
  },
  {
    id: "2",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 300,
    accrued: 0.0306,
  },
  {
    id: "3",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 300,
    accrued: 0.0306,
  },
  {
    id: "4",
    date: "8/23/2025, 1:38:59 PM",
    asset: "USDC",
    supplied: 300,
    accrued: 0.0306,
  },
];

export const supplyColData: Column<SupplyTypes & { actions?: string }>[] = [
  {
    title: "DATE",
    key: "date",
    render: (_, { date }) => <> {date}</>,
  },
  {
    title: "ASSET",
    key: "asset",
    render: (_, { asset }) => <>{asset}</>,
  },

  // {
  //   title: "Action",
  //   key: "actions",
  //   render: (_, record) => <SupplyClaimAction data={record} />,
  // },
];
