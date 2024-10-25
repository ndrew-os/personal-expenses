import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const CustomBarChart: React.FC<{ data: { category: string; amount: number }[] }> = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#3399ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CustomBarChart
