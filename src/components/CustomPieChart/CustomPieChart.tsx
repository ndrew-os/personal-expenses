import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import formatCurrency from '../../utils/formatCurrency';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00239F', '#A80B28', '#FF80FF'];

const CustomPieChart: React.FC<{ data: { category: string; amount: number }[] }> = ({ data }) => {
  return (
    <ResponsiveContainer className="w-100" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default CustomPieChart
