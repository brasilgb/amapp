import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart"
import moment from "moment"

export const description = "A bar chart"


const chartConfig = {
    vendas: {
        label: "Vendas",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

interface ComposeChartProps{
    data: any;
}
const ComposeChart = ({ data }:ComposeChartProps) => {

    const diasemana = data.map((value: any) => moment(value?.dtvenda).format("DD"));
    const mesano = moment(data[0]?.dtvenda).format("MM/YYYY");
    const margem = data.map((value: any) => parseFloat(value?.margem));
    const meta = data.map((value: any) => parseFloat(value?.valmeta));
    const vendas = data.sort((a:any, b:any) => a.id > b.id ? 1 : -1).map((value: any) => parseFloat(value?.valvenda));

    const chartData = data.map((value: any) => ({diasemana: moment(value?.dtvenda).format("DD"), vendas: parseFloat(value?.valvenda)}));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[250px] w-full">
            
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="diasemana"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="vendas" fill="var(--color-vendas)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
export  default ComposeChart;
