import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Helmet } from "react-helmet-async"
import { OrdersTableRow } from "./ordesr-table-row"
import { OrdersTableFilter } from "./orders-table-filter"

export const Orders = () => {
    return (
        <>
            <Helmet title="pedidos" />
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter"></h1>
            </div>
            <div className="space-y-2.5">
                <OrdersTableFilter />
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">Identificador</TableHead>
                                <TableHead className="w-[180px]">Realizado há</TableHead>
                                <TableHead className="w-[140px]">Status</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">Total de pedidos</TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <OrdersTableRow />
                        </TableBody>
                    </Table>
                </div>

            </div>
        </>
    )
}