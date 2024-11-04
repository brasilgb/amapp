import React, { useEffect, useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import apiautomagico from "@/bootstrap";
import { usePage } from "@inertiajs/react";
import { useAuthContext } from "@/Contexts";
import { Button } from "../ui/button";
import { Building2, Network } from "lucide-react";

const SelectFilial = () => {
    const { setFilialAnalise, filialAnalise, setLoading, loading } = useAuthContext();
    const { auth } = usePage().props as any;
    const [companies, setCompanies] = useState<any>([]);

    useEffect(() => {
        const getCompanies = async () => {
            setLoading(true);
            await apiautomagico.get(`companies?org=${auth?.user?.organization_id}`)
                .then((res) => {
                    setCompanies(res.data.response.companies);
                }).catch((err) => {
                    console.log(err);
                }).finally(() => setLoading(false));
        };
        getCompanies();
    }, [auth]);

    const handleSelected = (value: any) => {
        setFilialAnalise(value);
    };

    return (
        <div className="flex gap-4">
            {auth?.user?.company_id
                ? <div className="text-sm uppercase font-semibold text-gray-500 flex items-center gap-2">
                    <Building2 className='h-5 w-5' />
                    {companies.filter((fil: any) => (fil.subnumber == auth?.user?.company_id)).map((com: any) => (com.subname))}
                </div>
                : <>
                    <Select onValueChange={handleSelected} value={`${filialAnalise}`}>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0">0 - Análise da Rede</SelectItem>
                            {companies.map((filial: any, fdx: number) => (
                                <SelectItem key={fdx} value={filial.subnumber}>{filial.subnumber} - {filial.subname}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        variant="outline"
                        size="default"
                        onClick={() => setFilialAnalise(0)}
                    >
                        <Network className="h-5 w-5" /><span>Análise da rede</span>
                    </Button>
                </>
            }
        </div>
    )
}
export default SelectFilial;
