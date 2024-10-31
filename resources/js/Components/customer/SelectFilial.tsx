import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"

const SelectFilial = ({ data }: any) => {
    console.log(data);

    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={'0'}>0 - Análise da rede</SelectItem>
                {data.map((filial: any, fdx: number) => (
                    <SelectItem key={fdx} value={filial.subnumber}>{filial.subnumber} - {filial.subname}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
export default SelectFilial;
