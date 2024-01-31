import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import colors from "tailwindcss/colors"

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Line,
} from "recharts"

const data = [
    { data: '10/12/2023', revenue: 1280},
    { data: '11/12/2023', revenue: 1180},
    { data: '12/12/2023', revenue: 1480},
    { data: '13/12/2023', revenue: 1680},
    { data: '14/12/2023', revenue: 1380},
    { data: '15/12/2023', revenue: 1880},
    { data: '16/12/2023', revenue: 1080},
]
export const RevenueChart = () => {


    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita no período
                    </CardTitle>
                    <CardDescription>
                        Receita diária no período
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={248}>
                    <LineChart style={{ fontSize: 12 }} data={data}>
                        <XAxis 
                        dataKey="data" 
                        axisLine={false} 
                        tickLine={false}
                        dy={16}
                        />

                        <YAxis 
                        stroke="#888" 
                        axisLine={false} 
                        tickLine={false} 
                        width={80}
                        tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
                            style:'currency',
                            currency: 'BRL'
                        })}/>
                       <Line type="linear" strokeWidth="2" dataKey="revenue" stroke={colors["violet"]['500']}/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}