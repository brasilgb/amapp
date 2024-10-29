import Kpis from "@/Components/customer/kpis"
import RadialChart from "@/Components/customer/RadialChart"
import CustomerLayout from "@/Layouts/CustomerLayout"
import { Link } from "@inertiajs/react"
import { ChartNoAxesCombined, ChartSpline, HandCoins, LogOut, TrendingUp } from "lucide-react"
import React from 'react'

type Props = {}

const Dashboard = ({ totals }: any) => {
    console.log(totals)
    return (
        <CustomerLayout>
            <main className="p-4">
                <div className="grid sm:grid-cols-4 gap-4">
                    <Kpis title="Meta" value={totals.valmeta} icon={<ChartSpline size={32} className="ml-auto text-blue-600" />} />
                    <Kpis title="Faturamento" value={totals.valven} icon={<HandCoins size={32} className="ml-auto text-green-600" />} />
                    <Kpis title="Margem" value={totals.margem} icon={<ChartNoAxesCombined size={32} className="ml-auto text-orange-600" />} />
                    <Kpis title="Valor Projetado" value={totals.projec} icon={<TrendingUp size={32} className="ml-auto text-lime-600" />} />
                </div>

                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                    <RadialChart title={"Valor 1"} label={"Meta"} value={15} />
                    <RadialChart title={"Valor 2"} label={"Margem"} value={65} />
                    <RadialChart title={"Valor 3"} label={"Meta Dia"} value={80} />
                    <RadialChart title={"Valor 3"} label={"Projeção"} value={95.5} />
                </div>
            </main>
        </CustomerLayout>
    )
}

export default Dashboard
