"use client"

import * as React from "react"

import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover"
import moment from "moment"
import { useAuthContext } from "@/Contexts"

export function DatePicker() {

    const { setDataFiltro, dataFiltro } = useAuthContext();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !dataFiltro && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {moment(dataFiltro).format("DD/MM/YYYY")}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={dataFiltro}
                    onSelect={setDataFiltro}
                    initialFocus
                    
                />
            </PopoverContent>
        </Popover>
    )
}
