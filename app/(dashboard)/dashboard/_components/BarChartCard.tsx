import { useState } from "react";

import { TrendingDown } from "lucide-react";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { month: "JAN", value: 3200 },
  { month: "FEV", value: 1800 },
  { month: "MAR", value: 2700 },
  { month: "ABR", value: 2100 },
  { month: "MAI", value: 2600 },
  { month: "JUN", value: 2900 },
  { month: "JUL", value: 1900 },
  { month: "AGO", value: 2300 },
  { month: "SET", value: 2900 },
  { month: "OUT", value: 2900 },
  { month: "NOV", value: 2900 },
  { month: "DEZ", value: 2900 },
];

const MIN_BAR_WIDTH = 48;
const BAR_GAP = 8;
const CHART_PADDING = 40;

export function BarChartCard() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleBarClick = (_: unknown, index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  const minChartWidth = data.length * (MIN_BAR_WIDTH + BAR_GAP) + CHART_PADDING;

  return (
    <>
      <div className="flex lg:flex-col">
        <div className="flex flex-1 flex-col justify-center gap-1 p-1">
          <span className="text-xl">Gasto mensal</span>
          <p className="text-2xl lg:text-4xl">R$ 3.842,00</p>
          <div className="flex flex-row items-center gap-2">
            <TrendingDown />
            <span className="text-sm">7,8% vs mês anterior</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:flex-row">
          <span className="text-sm">Média anual </span>
          <p className="text-base">R$ 3.564,20</p>
        </div>
      </div>

      <div className="h-80 w-full overflow-x-auto outline-none **:outline-none lg:flex lg:h-60 lg:flex-1 lg:justify-center">
        <div style={{ width: minChartWidth }} className="h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barCategoryGap={BAR_GAP}
              margin={{
                top: 8,
                right: 8,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="month" axisLine={false} tickLine={false} />

              <Tooltip
                cursor={{
                  fill: "rgba(141, 221, 208, 0.15)",
                }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [
                  `R$ ${Number(value).toLocaleString("pt-BR")}`,
                  "Gasto",
                ]}
                labelFormatter={(label) => String(label)}
              />

              <Bar
                dataKey="value"
                radius={[12, 12, 0, 0]}
                cursor="pointer"
                barSize={MIN_BAR_WIDTH}
                onClick={handleBarClick}
                shape={(props) => {
                  const isSelected = selectedIndex === props.index;

                  return (
                    <Rectangle
                      {...props}
                      fill={isSelected ? "#2A9D8F" : "#8DDDD0"}
                      fillOpacity={
                        selectedIndex === null || isSelected ? 1 : 0.4
                      }
                    />
                  );
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
