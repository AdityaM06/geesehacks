import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DonutChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const PortfolioPieChart: React.FC<DonutChartProps> = ({ data }) => {
  const COLORS = ['#9B59B6', '#48C3FC', '#00C49F', '#FFBB28', '#FF8042', '#F39C12', '#E74C3C'];

  const cashData = data.find(item => item.name === 'Cash');
  const filteredData = data.filter(item => item.name !== 'Cash');
  const sortedData = [...filteredData].sort((a, b) => b.value - a.value);
  const topData = cashData ? [cashData, ...sortedData] : sortedData;
  const top3 = topData.slice(0, 3);
  const othersValue = topData.slice(3).reduce((sum, item) => sum + item.value, 0);
  const displayData = othersValue > 0 ? [...top3, { name: 'Others', value: othersValue }] : top3;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={displayData}
          dataKey="value"
          nameKey="name"
          outerRadius="80%"
          innerRadius="50%"
          labelLine={false}
          isAnimationActive={true}
          stroke="none"
        >
          {displayData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PortfolioPieChart;