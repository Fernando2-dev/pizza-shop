import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
                                <TableHead className="text-left">
                                    Produto
                                </TableHead>
                                <TableHead className="text-left">
                                    QTD
                                </TableHead>
                                <TableHead className="text-left">
                                    Preço
                                </TableHead>
                                <TableHead className="text-left">
                                    SubTotal
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-left">Pizza Peperone Família</TableCell>
                                <TableCell className="text-left">2</TableCell>
                                <TableCell className="text-left">R$69,90</TableCell>
                                <TableCell className="text-left">R$139,80</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="text-left">Pizza 4Queijos Família</TableCell>
                                <TableCell className="text-left">2</TableCell>
                                <TableCell className="text-left">R$ 60,00</TableCell>
                                <TableCell className="text-left">R$ 120,80</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right font-medium">R$ 259,60</TableCell>
                        </TableFooter>
                    </Table>
                </div>
            </DialogHeader>
        </DialogContent>
    )
}