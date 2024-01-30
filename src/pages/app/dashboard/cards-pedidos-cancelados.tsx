import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Utensils } from "lucide-react"

export const CardsPedidoCancelados = () => {
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">
                    Cancelamentos (mês)
                </CardTitle>
                <Utensils className="" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tighter">
                    32
                </span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">-6% </span>{' '}
                    em relação ao mês passado !
                </p>
            </CardContent>
        </Card>
    )
}