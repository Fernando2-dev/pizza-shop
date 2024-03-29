import { Helmet } from "react-helmet-async"
import { CardRevenue } from "./cards-revenue"
import { CardsPedido } from "./cards-pedidos"
import { CardsPedidoDia } from "./cards-pedidos-diarios"
import { CardsPedidoCancelados } from "./cards-pedidos-cancelados"
import { RevenueChart } from "./revenue-chart"
import { PopularChart } from "./pupular-products-chart"


export const Dashboard = () => {
  return (
    <>
      <Helmet title="dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <CardRevenue />
          <CardsPedido />
          <CardsPedidoDia />
          <CardsPedidoCancelados />
        </div>

        <div className="grid grid-cols-9 gap-4">

          <RevenueChart/>
          <PopularChart/>
        </div>
      </div>
    </>
  )
}