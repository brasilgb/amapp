import apiautomagico from "@/bootstrap"
import ComposeChart from "@/Components/customer/ComposeChart"
import Kpis from "@/Components/customer/kpis"
import KpisCombo from "@/Components/customer/kpisCombo"
import LoadingPage from "@/Components/customer/LoadingPage"
import RadialChart from "@/Components/customer/RadialChart"
import { useAuthContext } from "@/Contexts"
import CustomerLayout from "@/Layouts/CustomerLayout"
import { Link, usePage } from "@inertiajs/react"
import { ChartColumn, ChartNoAxesCombined, ChartScatter, ChartSpline, CircleDollarSign, HandCoins, LogOut, TrendingUp } from "lucide-react"
import moment from "moment"
import React, { useEffect, useState } from 'react'
import 'animate.css';

const Dashboard = () => {
    const { auth } = usePage().props as any;
    const { filialAnalise, dataFiltro, setLoading, loading } = useAuthContext();
    const [totals, setTotals] = useState<any>([]);
    const [salesMonth, setSalesMonth] = useState<any>([]);

    useEffect(() => {
        const getCompanies = async () => {
            setLoading(true);
            const adata = moment(dataFiltro).format("YYYYMMDD");
            await apiautomagico.get(`totals?dt=${adata}&org=${auth?.user?.organization_id}&fl=${filialAnalise}`)
                .then((res) => {
                    setTotals(res.data.response.totals);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => setLoading(false));
        };
        getCompanies();
    }, [auth, filialAnalise, dataFiltro]);

    useEffect(() => {
        const getCompanies = async () => {
            setLoading(true);
            const adata = moment(dataFiltro).format("YYYYMM");
            await apiautomagico.get(`salesmonth?dt=${adata}&org=${auth?.user?.organization_id}&fl=${filialAnalise}`)
                .then((res) => {
                    setSalesMonth(res.data.response.sales);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => setLoading(false));
        };
        getCompanies();
    }, [auth, filialAnalise, dataFiltro]);

    return (
            <CustomerLayout>
                {loading && <LoadingPage />}
                {totals?.length > 0 || salesMonth?.length > 0 &&
                    <main className="px-4 pb-4 animate__animated animate__fadeIn">
                        <div className="grid sm:grid-cols-4 gap-4">
                            <Kpis title="Meta" value={totals.valmeta} icon={<ChartSpline size={32} className="ml-auto text-blue-600" />} />
                            <Kpis title="Faturamento" value={totals.valven} icon={<HandCoins size={32} className="ml-auto text-green-600" />} />
                            <Kpis title="Margem" value={totals.margem} icon={<ChartNoAxesCombined size={32} className="ml-auto text-orange-600" />} />
                            <Kpis title="Valor Projetado" value={totals.projec} icon={<TrendingUp size={32} className="ml-auto text-lime-600" />} />
                        </div>

                        <div className="grid sm:grid-cols-4 gap-4 mt-4">
                            <RadialChart title={"Valor 1"} label={"Meta"} value={totals.permet} />
                            <RadialChart title={"Valor 2"} label={"Margem"} value={totals.margem} />
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
                            {salesMonth && <ComposeChart data={salesMonth} />}
                        </div>
                    </main>
                }
            </CustomerLayout>
    )
}

export default Dashboard
