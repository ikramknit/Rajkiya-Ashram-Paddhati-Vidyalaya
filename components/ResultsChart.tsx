import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { RESULTS_DATA } from '../constants';

const ResultsChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-center text-lg font-semibold text-slate-700 mb-6">Board Examination Performance (2012-2024)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={RESULTS_DATA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis 
            dataKey="year" 
            tick={{ fontSize: 12 }} 
            angle={-45}
            textAnchor="end" 
            height={60}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend verticalAlign="top" height={36}/>
          <Line 
            type="monotone" 
            dataKey="class10" 
            name="Class 10 Pass %" 
            stroke="#ea580c" // Orange 600
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }} 
          />
          <Line 
            type="monotone" 
            dataKey="class12" 
            name="Class 12 Pass %" 
            stroke="#b91c1c" // Red 700
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
            connectNulls={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
