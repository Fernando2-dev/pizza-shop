import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export const CardRevenue = () => {
    return (
        <Card>
            <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
                <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
                <DollarSign className="" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tighter">
                    R$ 1248,60
                </span>
                <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">+2% </span>{' '}
                    em relção ao mês passado !
                </p>
            </CardContent>
        </Card>
    )
}