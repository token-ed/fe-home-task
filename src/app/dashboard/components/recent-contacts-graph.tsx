import { Bar, BarChart, Label, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Contact } from "../helpers/types";

interface MonthlyData {
  name: string;
  total: number;
}

const generateMonthlyData = (contacts: Contact[]): MonthlyData[] => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyData: MonthlyData[] = months.map((month) => ({
    name: month,
    total: 0,
  }));

  contacts.forEach((contact) => {
    const monthIndex = new Date(contact.createdAt || "").getMonth(); // 0 = Jan, 11 = Dec
    monthlyData[monthIndex].total += 1;
  });

  return monthlyData;
};

interface Props {
  contacts: Contact[];
}

export const RecentContactsGraph = ({ contacts }: Props) => {
  const data = generateMonthlyData(contacts);

  return (
    <div className="flex w-full flex-col gap-y-4 rounded-md border border-gray-500 p-4">
      <p className="w-full rounded bg-slate-500 p-2 text-center text-xl font-medium text-white">
        Overview
      </p>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            fontSize={20}
            fill="white"
            stroke="black"
            tick={{ fill: "black" }}
          />
          <YAxis
            fontSize={20}
            tickLine={false}
            allowDecimals={false}
            className="fill-white font-bold"
            stroke="black"
            tick={{ fill: "black" }}>
            <Label angle={270} value="Contacts added" fill="black" />
          </YAxis>
          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-blue-200 dark:fill-blue-300"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
