import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const OrderDetails = () => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 00440040404</DialogTitle>
                <DialogDescription>
                    Detalhes do pedido.
                </DialogDescription>
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">Status</TableCell>
                                <TableCell className="flex justify-end">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                                        <span className="font-medium text-muted-foreground">Pendente</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Cliente
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    Fernando Hnerique da Silva
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Telefone
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    919999999
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Email
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    feroficialvolei@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Realizado há
                                </TableCell>
                                <TableCell className="flex justify-end">
                                    3 minutos
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-right">
                                    Produto
                                </TableHead>
                                <TableHead className="text-right">
                                    QTD
                                </TableHead>
                                <TableHead className="text-right">
                                    Preço
                                </TableHead>
                                <TableHead className="text-right">
                                    SubTotal
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                    </Table>
                </div>
            </DialogHeader>
        </DialogContent>
    )
}