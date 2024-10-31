import ComposeChart from "@/Components/customer/ComposeChart"
import Kpis from "@/Components/customer/kpis"
import KpisCombo from "@/Components/customer/kpisCombo"
import RadialChart from "@/Components/customer/RadialChart"
import CustomerLayout from "@/Layouts/CustomerLayout"
import { Link } from "@inertiajs/react"
import { ChartColumn, ChartNoAxesCombined, ChartScatter, ChartSpline, CircleDollarSign, HandCoins, LogOut, TrendingUp } from "lucide-react"
import React from 'react'

const Dashboard = ({ totals, salesmonth, companies }: any) => {

    return (
        <CustomerLayout data={companies}>
            <main className="px-4 pb-4">
                <div className="grid sm:grid-cols-4 gap-4">
                    <Kpis title="Meta" value={totals.valmeta} icon={<ChartSpline size={32} className="ml-auto text-blue-600" />} />
                    <Kpis title="Faturamento" value={totals.valven} icon={<HandCoins size={32} className="ml-auto text-green-600" />} />
                    <Kpis title="Margem" value={totals.margem} icon={<ChartNoAxesCombined size={32} className="ml-auto text-orange-600" />} />
                    <Kpis title="Valor Projetado" value={totals.projec} icon={<TrendingUp size={32} className="ml-auto text-lime-600" />} />
                </div>

                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                    <RadialChart title={"Valor 1"} label={"Meta"} value={totals.permet} />
                    <RadialChart title={"Valor 2"} label={"Margem"} value={65} />
                    <RadialChart title={"Valor 3"} label={"Meta Dia"} value={80} />
                    <RadialChart title={"Valor 3"} label={"Projeção"} value={95.5} />
                </div>
                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                    <KpisCombo title={"Venda do dia 30/09/2024"} valueMeta={59677.41} valueVenda={45079.96} valueMargem={39.85} valueRep={2.43} icon={<ChartColumn size={18} />} />
                    <KpisCombo title={"Venda do dia 29/09/2024"} valueMeta={59677.41} valueVenda={45079.96} valueMargem={39.85} valueRep={2.43} icon={<ChartColumn size={18} />} />
                    <KpisCombo title={"Venda do dia 28/09/2024"} valueMeta={59677.41} valueVenda={45079.96} valueMargem={39.85} valueRep={2.43} icon={<ChartColumn size={18} />} />
                    <KpisCombo title={"Venda do dia 27/09/2024"} valueMeta={59677.41} valueVenda={45079.96} valueMargem={39.85} valueRep={2.43} icon={<ChartColumn size={18} />} />
                </div>
                <div className="mt-4">
                    <ComposeChart data={salesmonth} />
                </div>
            </main>
        </CustomerLayout>
    )
}

export default Dashboard
