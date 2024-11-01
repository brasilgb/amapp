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

const SelectFilial = () => {
    const { setFilialAnalise, filialAnalise } = useAuthContext();
    const { auth } = usePage().props as any;
    const [companies, setCompanies] = useState<any>([]);

    useEffect(() => {
        const getCompanies = async () => {
            await apiautomagico.get(`companies?org=${auth?.user?.organization_id}`)
                .then((res) => {
                    setCompanies(res.data.response.companies);
                }).catch((err) => {
                    console.log(err);
                })
        };
        getCompanies();
    }, [auth]);

    const defaultCompany = companies.filter((fil: any) => (fil.subnumber == filialAnalise)).map((filial: any) => (filial));

    const handleSelected = (value: any) => {
        setFilialAnalise(value);
    };
    return (
        <>
            {companies &&
                <Select onValueChange={handleSelected}>
                    <SelectTrigger className="w-[280px]">
                        <SelectValue placeholder={`${defaultCompany[0]?.subnumber} - ${defaultCompany[0]?.subname}`} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={'0'}>0 - Análise da rede</SelectItem>
                        {companies.map((filial: any, fdx: number) => (
                            <SelectItem key={fdx} value={filial.subnumber}>{filial.subnumber} - {filial.subname}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            }
        </>
    )
}
export default SelectFilial;
