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

  // Custom legend renderer
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '12px', lineHeight: '1.4' }}>
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '12px',  // Circle size
                height: '12px',
                backgroundColor: COLORS[index % COLORS.length], // Access the correct color using the index
                marginRight: '8px',
                borderRadius: '50%',
              }}
            ></span>
            {entry.payload.name} {/* Use `entry.payload.name` for the label */}
          </li>
        ))}
      </ul>
    );
  };

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
          paddingAngle={0}
          isAnimationActive={true}
          stroke="none"
        >
          {displayData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend content={renderLegend} layout="vertical" align="right" verticalAlign="middle" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PortfolioPieChart;
