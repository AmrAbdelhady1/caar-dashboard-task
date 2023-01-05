import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import carStaticsData from "../data/carStatics";

const CarChart = () => {
  return (
    <ResponsiveContainer width="90%">
      <AreaChart
        data={carStaticsData}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF764C" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FF764C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="" />

        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
        <Area
          type="monotone"
          dataKey="week"
          stroke="#FF764C"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CarChart;