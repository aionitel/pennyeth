import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { getChartHeight, getChartWidth } from '../../data/utils/getDimensions';

interface HomeChartProps {
  data: any[],
}

const YearChart: React.FC<HomeChartProps> = ({ data }) => {
 return (
    <ResponsiveContainer
      width={getChartWidth()}
      height={getChartHeight()}
    >
      <AreaChart
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="date"
          type="category"
          ticks={["root"]}
        />
        <CartesianGrid strokeDasharray="5" />
        <Tooltip 
          labelStyle={{ color: '#8884d8' }} 
          formatter={value => new Intl.NumberFormat('en-US',
                    { style: 'currency', currency: 'USD',
                      minimumFractionDigits: 2 }).format(value)} />
        <Area dataKey='price' stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default YearChart;